import Range from './Range.js'
import biomeDefault from './biomes/default.js'
import biomeSlime from './biomes/slime.js'
import biomeMars from './biomes/mars.js'
import biomeCold from './biomes/cold.js'

Array.prototype.random = function () {
    return this[Range.random(0, this.length - 1)]
}

class PlanetGenerator {
    static #PlanetBiomes = [
        biomeDefault,
        biomeSlime,
        biomeMars,
        biomeCold
    ]

    constructor(canvas) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.context.imageSmoothingEnabled = false
        this.width = canvas.width
        this.height = canvas.height
    }

    static #randomBiome() {
        return this.#PlanetBiomes.random()
    }

    generate() {
        this.biome = PlanetGenerator.#randomBiome()
        this.biome.generateName()
        this.biome.draw(this.context, this.width, this.height)

        return this.biome.name
    }
}

export default PlanetGenerator