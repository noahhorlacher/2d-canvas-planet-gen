import SimplexNoise from './node_modules/simplex-noise/dist/esm/simplex-noise.js'

function randomRange(min, max) {
    return Math.round((max - min) * Math.random() + min)
}

class Terrain {
    constructor(backgroundGradient, amountSuns, sunsSize, sunsColor, amountStars, starsColor, iso, scale) {
        this.backgroundGradient = backgroundGradient
        this.amountSuns = amountSuns
        this.sunsSize = sunsSize
        this.sunsColor = sunsColor
        this.amountStars = amountStars
        this.starsColor = starsColor
        this.iso = iso
        this.scale = scale
    }
}

class PlanetGenerator {
    static PlanetTerrains = [
        new Terrain(
            { start: '#00f', stop: '#000' },
            { min: 1, max: 2 },
            { min: 5, max: 30 },
            '#f00',
            { min: 100, max: 150 },
            "#fff",
            0.1,
            0.05
        )
    ]

    constructor(canvas, width, height) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.width = width
        this.height = height

        this.canvas.width = width
        this.canvas.height = height
    }

    static randomBiome() {
        return PlanetGenerator.PlanetTerrains[randomRange(0, PlanetGenerator.PlanetTerrains.length - 1)]
    }

    generate() {
        this.simplex = new SimplexNoise()
        this.biome = PlanetGenerator.randomBiome()
        this.drawBackground()
        this.drawStars()
        this.drawSuns()
        this.drawTerrain()
    }

    drawTerrain() {
        // draw raw terrain
        const imd = this.context.getImageData(0, 0, this.width, this.height)
        const data = imd.data

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let _v = (this.simplex.noise2D(x * this.biome.scale, y * this.biome.scale) + 1) / 2 // 0 to 1
                let heightMultiplier = Math.min(1, Math.max(0, (y - (this.height / 5)) / (2 * this.height / 5)))
                _v *= heightMultiplier
                if (_v >= this.biome.iso) {
                    let v = 255 * _v // 0 to 255
                    let idx = 4 * ((y * this.width) + x)
                    data[idx] = v
                    data[idx + 1] = v
                    data[idx + 2] = v
                    data[idx + 3] = 255
                }
            }
        }

        this.context.putImageData(imd, 0, 0)
    }

    drawStars() {
        this.context.fillStyle = this.biome.starsColor
        for (let i = 0; i < randomRange(this.biome.amountStars.min, this.biome.amountStars.max); i++) {
            this.context.beginPath()
            this.context.arc(randomRange(0, this.width), randomRange(0, this.height), 1, 0, 2 * Math.PI)
            this.context.fill()
        }
    }

    drawSuns() {
        this.context.fillStyle = this.biome.sunsColor
        for (let i = 0; i < randomRange(this.biome.amountSuns.min, this.biome.amountSuns.max); i++) {
            let randomRadius = randomRange(this.biome.sunsSize.min, this.biome.sunsSize.max)
            this.context.beginPath()
            this.context.arc(randomRange(0, this.width), randomRange(0, this.height / 3), randomRadius, 0, 2 * Math.PI)
            this.context.fill()
        }
    }

    drawBackground() {
        let gradient = this.context.createLinearGradient(0, 0, 0, this.height)
        gradient.addColorStop(0, this.biome.backgroundGradient.start)
        gradient.addColorStop(1, this.biome.backgroundGradient.stop)

        this.context.fillStyle = gradient
        this.context.fillRect(0, 0, this.width, this.height)
    }
}

export default PlanetGenerator