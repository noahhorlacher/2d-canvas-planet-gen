import Range from './Range.js'
import biomeDefault from './biomes/default.js'
import biomeSlime from './biomes/slime.js'
import biomeMars from './biomes/mars.js'
import biomeCold from './biomes/cold.js'
import map from './map.js'

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

    #mouseDown = false

    selectedMaterial = 0

    constructor(canvas) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.context.imageSmoothingEnabled = false
        this.width = canvas.width
        this.height = canvas.height
        this.mouse = {
            x: 0,
            y: 0
        }
        this.brush = [
            [0, 0, 0, .1, .1, .1, .1, .1, 0, 0, 0],
            [0, 0, .1, .2, .2, .2, .2, .2, .1, 0, 0],
            [0, .1, .2, .4, .4, .4, .4, .4, .2, .1, 0],
            [.1, .2, .4, .6, .6, .6, .6, .6, .4, .2, .1],
            [.1, .2, .4, .6, .8, .8, .8, .6, .4, .2, .1],
            [.1, .2, .4, .6, .8, 1, .8, .6, .4, .2, .1],
            [.1, .2, .4, .6, .8, .8, .8, .6, .4, .2, .1],
            [.1, .2, .4, .6, .6, .6, .6, .6, .4, .2, .1],
            [0, .1, .2, .4, .4, .4, .4, .4, .2, .1, 0],
            [0, 0, .1, .2, .2, .2, .2, .2, .1, 0, 0],
            [0, 0, 0, .1, .1, .1, .1, .1, 0, 0, 0]
        ]
        this.brushStrength = .01
        canvas.addEventListener('mousedown', e => this.handleMouseDown(e))
        canvas.addEventListener('mouseup', e => this.handleMouseUp(e))
        canvas.addEventListener('contextmenu', e => this.handleMouseUp(e))
        canvas.addEventListener('mousemove', e => this.handleMouseMove(e))
    }

    static #randomBiome() {
        return this.#PlanetBiomes.random()
    }

    generate() {
        this.biome = PlanetGenerator.#randomBiome()
        this.biome.generate(this.width, this.height)
        this.biome.draw(this.context, this.width, this.height)
    }

    handleMouseMove(e) {
        let pos = {
            x: e.pageX - e.currentTarget.offsetLeft,
            y: e.pageY - e.currentTarget.offsetTop
        }

        // update mouse coords
        let scale = {
            x: this.canvas.offsetWidth / parseInt(this.width),
            y: this.canvas.offsetHeight / parseInt(this.height)
        }

        // apply to x/y
        // scale and cut any fraction to get integer value
        this.mouse = {
            x: Math.round(Math.max(0, pos.x / scale.x)),
            y: Math.round(Math.max(0, pos.y / scale.y))
        }

        if (this.#mouseDown === 'left') this.addMaterial()
        else if (this.#mouseDown === 'right') this.removeMaterial()
    }

    handleMouseDown(e) {
        switch (e.which) {
            case 1:
                this.#mouseDown = 'left'
                break
            case 3:
                this.#mouseDown = 'right'
                break
        }
    }

    handleMouseUp(e) {
        e.preventDefault()
        this.#mouseDown = false
    }

    addMaterial() {
        if (this.selectedMaterial === 0) {
            // add material
            for (let y = 0; y < this.brush.length; y++) {
                for (let x = 0; x < this.brush[y].length; x++) {
                    let cx = this.mouse.x + x - Math.round(this.brush[y].length / 2),
                        cy = this.mouse.y + y - Math.round(this.brush.length / 2)
                    this.biome.data[cx][cy] = Math.max(0, Math.min(1, this.biome.data[cx][cy] + (this.brush[y][x] * this.brushStrength)))
                }
            }
        } else {
            let v = map(this.biome.materials[this.selectedMaterial - 1].value, 0, 1, this.biome.iso, 1)
            console.log('v', v)
            for (let y = 0; y < this.brush.length; y++) {
                for (let x = 0; x < this.brush[y].length; x++) {
                    let cx = this.mouse.x + x - Math.round(this.brush[y].length / 2),
                        cy = this.mouse.y + y - Math.round(this.brush.length / 2)
                    this.biome.data[cx][cy] = v
                }
            }
        }

        // rerender
        this.biome.draw(this.context, this.width, this.height)
    }

    removeMaterial() {
        // remove material
        for (let y = 0; y < this.brush.length; y++)
            for (let x = 0; x < this.brush[y].length; x++) {
                let cx = this.mouse.x + x - Math.round(this.brush[y].length / 2),
                    cy = this.mouse.y + y - Math.round(this.brush.length / 2)
                this.biome.data[cx][cy] = Math.max(0, Math.min(1, this.biome.data[cx][cy] - (this.brush[y][x] * this.brushStrength)))
            }

        // rerender
        this.biome.draw(this.context, this.width, this.height)
    }
}

export default PlanetGenerator