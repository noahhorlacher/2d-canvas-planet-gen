import PlanetGenerator from './PlanetGenerator.js'

const CANVAS = document.createElement('canvas')
document.body.append(CANVAS)
CANVAS.width = window.innerWidth / 4, CANVAS.height = window.innerHeight / 4
const PLANET_GENERATOR = new PlanetGenerator(CANVAS)

function handleClick() {
    let name = PLANET_GENERATOR.generate()
    document.querySelector('#planetname').textContent = name
}

document.body.addEventListener('click', () => handleClick())
handleClick()