import PlanetGenerator from './PlanetGenerator.js'

const CANVAS = document.querySelector('canvas')
CANVAS.width = window.innerWidth / 4, CANVAS.height = window.innerHeight / 4
const PLANET_GENERATOR = new PlanetGenerator(CANVAS)
const CONTROLS = document.querySelector('#controls')

function materialSelector(material, i) {
    const EL_CONTAINER = document.createElement('div')
    EL_CONTAINER.className = `materialSelector${i === 0 ? ' selected' : ''}`
    EL_CONTAINER.addEventListener('click', () => {
        document.querySelectorAll('.materialSelector.selected').forEach(el => el.classList.remove('selected'))
        EL_CONTAINER.classList.add('selected')
        PLANET_GENERATOR.selectedMaterial = i
    })

    const EL_TITLE = document.createElement('p')
    EL_TITLE.textContent = material.name

    const EL_SWATCH = document.createElement('div')
    EL_SWATCH.className = 'swatch'
    EL_SWATCH.style.backgroundColor = material.color ? `rgb(${material.color.r},${material.color.g},${material.color.b})` : 'transparent'

    EL_CONTAINER.append(EL_SWATCH, EL_TITLE)

    return EL_CONTAINER
}

function regenerate() {
    PLANET_GENERATOR.generate()
    document.querySelector('#planetname').textContent = PLANET_GENERATOR.biome.name
    CONTROLS.querySelectorAll('*').forEach(el => el.remove())
    CONTROLS.append(materialSelector({ name: 'none' }, 0))
    PLANET_GENERATOR.biome.materials.forEach((material, i) => {
        CONTROLS.append(materialSelector(material, i + 1))
    })
    PLANET_GENERATOR.selectedMaterial = 0
}

document.querySelector('button').addEventListener('click', () => regenerate())
regenerate()