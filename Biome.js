import fractalSimplexNoise from './fractalSimplexNoise.js'
import Range from './Range.js'
import defaultTerrain from './biomes/default.js'

function map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

export default class Biome {
    constructor(
        options
    ) {
        this.skyGradient = options.skyGradient || defaultTerrain.skyGradient
        this.amountSuns = options.amountSuns || defaultTerrain.amountSuns
        this.sunsSize = options.sunsSize || defaultTerrain.sunsSize
        this.sunsColor = options.sunsColor || defaultTerrain.sunsColor
        this.amountStars = options.amountStars || defaultTerrain.amountStars
        this.starsSize = options.starsSize || defaultTerrain.starsSize
        this.starsColor = options.starsColor || defaultTerrain.starsColor
        this.overlayColor = options.overlayColor || defaultTerrain.overlayColor
        this.iso = options.iso || defaultTerrain.iso
        this.scale = options.scale || defaultTerrain.scale
        this.octaves = options.octaves || defaultTerrain.octaves
        this.persistence = options.persistence || defaultTerrain.persistence
        this.groundRange = options.groundRange || defaultTerrain.groundRange
        this.materials = options.materials || defaultTerrain.materials
        this.syllables = options.syllables || defaultTerrain.syllables
        this.nameLength = options.nameLength || defaultTerrain.nameLength
    }

    generateName() {
        this.name = ''
        for (let i = 0; i < this.nameLength.random(); i++) this.name += this.syllables.random()
    }

    draw(context, width, height) {
        this.drawSky(context, width, height)
        this.drawStars(context, width, height)
        this.drawSuns(context, width, height)
        this.drawTerrain(context, width, height)
        this.drawOverlay(context, width, height)
    }

    drawSky(context, width, height) {
        let gradient = context.createLinearGradient(0, 0, 0, height)
        gradient.addColorStop(0, this.skyGradient.start)
        gradient.addColorStop(1, this.skyGradient.stop)

        context.fillStyle = gradient
        context.fillRect(0, 0, width, height)
    }

    drawStars(context, width, height) {
        context.fillStyle = this.starsColor
        for (let i = 0; i < this.amountStars.random(); i++) {
            context.beginPath()
            context.arc(Range.random(0, width), Range.random(0, height), this.starsSize.random(), 0, 2 * Math.PI)
            context.fill()
        }
    }

    drawSuns(context, width, height) {
        for (let i = 0; i < this.amountSuns.random(); i++) {
            const x = Range.random(0, width), y = Range.random(0, this.groundRange.min * height)
            const radius = this.sunsSize.random()
            // halo
            const halo = context.createRadialGradient(x, y, radius, x, y, radius * 2)
            halo.addColorStop(0, this.sunsColor + '8')
            halo.addColorStop(1, this.sunsColor + '0')

            context.fillStyle = halo
            context.beginPath()
            context.arc(x, y, radius * 2, 0, 2 * Math.PI)
            context.fill()

            // body
            context.fillStyle = this.sunsColor
            context.beginPath()
            context.arc(x, y, radius, 0, 2 * Math.PI)
            context.fill()
        }
    }

    drawTerrain(context, width, height) {
        const imd = context.getImageData(0, 0, width, height)
        const data = imd.data

        const noise = fractalSimplexNoise(width, height, {
            frequency: this.scale,
            octaves: this.octaves,
            persistence: this.persistence,
            amplitude: 1
        })

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let v = (noise[x][y] + 1) / 2 // 0 to 1
                let heightMultiplier = map(y, this.groundRange.min * height, this.groundRange.max * height, 0, 1)
                heightMultiplier = Math.max(0, Math.min(1, heightMultiplier))
                v *= heightMultiplier
                if (v >= this.iso) {
                    // remap v from iso-1 to 0-1
                    v = (v - this.iso) / (1 - this.iso)
                    let { r, g, b } = this.getColor(v)
                    let idx = 4 * ((y * width) + x)
                    data[idx] = r
                    data[idx + 1] = g
                    data[idx + 2] = b
                    data[idx + 3] = 255
                }
            }
        }

        context.putImageData(imd, 0, 0)
    }

    drawOverlay(context, width, height) {
        let dist = height * this.groundRange.min
        const gradient = context.createLinearGradient(0, dist, 0, height)
        gradient.addColorStop(0, this.overlayColor + '0')
        gradient.addColorStop(1, this.overlayColor + '8')

        context.fillStyle = gradient
        context.fillRect(0, dist, width, height)
    }

    getColor(value) {
        // find corresponding material
        let material

        // go through all materials
        for (let i = 0; i < this.materials.length; i++)
            // if last material or value fits material, set material
            if (
                i == this.materials.length - 1 ||
                value >= this.materials[i].value && value < this.materials[i + 1].value
            ) {
                material = this.materials[i].color
                break
            }

        return {
            r: material.r,
            g: material.g,
            b: material.b,
            a: material.a || 255
        }
    }
}