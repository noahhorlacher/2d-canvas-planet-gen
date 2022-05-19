import Biome from "../Biome.js"
import Color from '../Color.js'
import Range from '../Range.js'
import Material from "../Material.js"

export default new Biome({
    skyGradient: { start: '#100', stop: '#000' },
    amountSuns: new Range(1, 1),
    sunsSize: new Range(5, 30),
    sunsColor: '#ffe',
    amountStars: new Range(500, 600),
    starsSize: new Range(1, 1),
    starsColor: '#fff8',
    overlayColor: '#000',
    iso: 0.05,
    scale: 0.0025,
    octaves: 6,
    persistence: 0.65,
    groundRange: new Range(1 / 4, 5 / 6),
    materials: [
        new Material('light red dust', 0, new Color(220, 150, 150)),
        new Material('red dust', .01, new Color(220, 130, 130)),
        new Material('ground 1', .03, new Color(210, 120, 120)),
        new Material('ground 2', .045, new Color(200, 120, 120)),
        new Material('ground 3', .06, new Color(190, 120, 120)),
        new Material('ground 4', .08, new Color(180, 110, 110)),
        new Material('ground 5', .1, new Color(170, 110, 110)),
        new Material('ground 6', .13, new Color(160, 110, 110)),
        new Material('ground 7', .15, new Color(150, 110, 110)),
        new Material('ground 8', .2, new Color(140, 110, 110)),
        new Material('ground 9', .25, new Color(130, 100, 100)),
        new Material('ground 10', .3, new Color(130, 90, 90)),
        new Material('ground 11', .35, new Color(120, 90, 90)),
        new Material('ground 12', .4, new Color(110, 80, 90)),
        new Material('ground 13', .5, new Color(100, 80, 80)),
        new Material('ground 14', .55, new Color(90, 70, 70)),
        new Material('ground 15', .6, new Color(80, 70, 60)),
        new Material('ground 16', .67, new Color(70, 60, 60)),
        new Material('ground 17', .71, new Color(60, 50, 50))
    ],
    syllables: [
        'MA', 'RA', 'SA',
        'M', 'R', 'S'
    ],
    nameLength: new Range(2, 4)
})