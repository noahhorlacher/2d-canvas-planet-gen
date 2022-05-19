import fractalSimplexNoise from './fractalSimplexNoise.js'
import Range from './Range.js'
import defaultTerrain from './biomes/default.js'
import map from './map.js'

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

    generate(width, height) {
        this.generateName()
        this.generateTerrain(width, height)
        this.generateBackground(width, height)
    }

    generateName() {
        this.name = ''
        for (let i = 0; i < this.nameLength.random(); i++) this.name += this.syllables.random()
    }

    generateTerrain(width, height) {
        this.data = fractalSimplexNoise(width, height, {
            frequency: this.scale,
            octaves: this.octaves,
            persistence: this.persistence,
            amplitude: 1
        })

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let heightMultiplier = map(y, this.groundRange.min * height, this.groundRange.max * height, 0, 1)
                heightMultiplier = Math.max(0, Math.min(1, heightMultiplier))
                this.data[x][y] = ((this.data[x][y] + 1) * heightMultiplier) / 2
            }
        }
    }

    generateBackground(width, height) {
        const CANVAS = document.createElement('canvas')
        CANVAS.width = width
        CANVAS.height = height
        const CONTEXT = CANVAS.getContext('2d')
        this.drawSky(CONTEXT, width, height)
        this.drawStars(CONTEXT, width, height)
        this.drawSuns(CONTEXT, width, height)
        this.background = CONTEXT.getImageData(0, 0, width, height)
    }

    draw(context, width, height) {
        this.drawBackground(context, width, height)
        this.drawTerrain(context, width, height)
        this.drawOverlay(context, width, height)
    }

    drawBackground(context) {
        context.putImageData(this.background, 0, 0)
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
            const X = Range.random(0, width), Y = Range.random(0, this.groundRange.min * height)
            const RADIUS = this.sunsSize.random()
            // halo gradient
            const HALO = context.createRadialGradient(X, Y, RADIUS, X, Y, RADIUS * 2)
            HALO.addColorStop(0, this.sunsColor + '8')
            HALO.addColorStop(1, this.sunsColor + '0')

            context.fillStyle = HALO
            context.beginPath()
            context.arc(X, Y, RADIUS * 2, 0, 2 * Math.PI)
            context.fill()

            // body
            context.fillStyle = this.sunsColor
            context.beginPath()
            context.arc(X, Y, RADIUS, 0, 2 * Math.PI)
            context.fill()
        }
    }

    drawTerrain(context, width, height) {
        const IMD = context.getImageData(0, 0, width, height)

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (this.data[x][y] >= this.iso) {
                    // remap v from iso-1 to 0-1
                    let v = (this.data[x][y] - this.iso) / (1 - this.iso)

                    // draw with color
                    let { r, g, b } = this.getColor(v)
                    let idx = 4 * ((y * width) + x)
                    IMD.data[idx] = r, IMD.data[idx + 1] = g, IMD.data[idx + 2] = b, IMD.data[idx + 3] = 255
                }
            }
        }

        context.putImageData(IMD, 0, 0)
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