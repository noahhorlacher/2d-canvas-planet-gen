import PlanetGenerator from './PlanetGenerator.js'

const CANVAS = document.createElement('canvas')
document.body.append(CANVAS)
const PLANET_GENERATOR = new PlanetGenerator(CANVAS, 260, 480)

document.body.addEventListener('click', () => PLANET_GENERATOR.generate())

PLANET_GENERATOR.generate()