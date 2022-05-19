import Biome from "../Biome.js"
import Color from '../Color.js'
import Range from '../Range.js'
import Material from "../Material.js"

export default new Biome({
    skyGradient: { start: '#bfc', stop: '#58a' },
    amountSuns: new Range(2, 4),
    sunsSize: new Range(5, 30),
    sunsColor: '#ffc',
    amountStars: new Range(200, 400),
    starsSize: new Range(1, 1),
    starsColor: '#afa8',
    overlayColor: '#011',
    iso: 0.1,
    scale: 0.005,
    octaves: 8,
    persistence: 0.6,
    groundRange: new Range(1 / 4, 5 / 6),
    materials: [
        new Material('light pink slime', 0, new Color(255, 180, 220)),
        new Material('pink slime', .01, new Color(255, 120, 160)),
        new Material('slime 1', .03, new Color(120, 220, 140)),
        new Material('slime 2', .045, new Color(100, 200, 120)),
        new Material('slime 3', .06, new Color(90, 190, 100)),
        new Material('slime 4', .08, new Color(90, 180, 90)),
        new Material('slime 5', .1, new Color(90, 160, 70)),
        new Material('slime 6', .13, new Color(80, 160, 40)),
        new Material('slime 7', .15, new Color(80, 170, 20)),
        new Material('slime 8', .2, new Color(90, 180, 10)),
        new Material('slime 9', .25, new Color(100, 200, 0)),
        new Material('slime 10', .3, new Color(120, 220, 0)),
        new Material('slime 11', .35, new Color(140, 230, 0)),
        new Material('slime 12', .4, new Color(160, 240, 0)),
        new Material('slime 13', .5, new Color(180, 255, 0)),
        new Material('slime 14', .55, new Color(200, 255, 0)),
        new Material('slime 15', .6, new Color(220, 255, 0)),
        new Material('slime 16', .65, new Color(255, 255, 200)),
        new Material('slime 17', .7, new Color(255, 255, 0))
    ],
    syllables: [
        'GI', 'GE', 'GA',
        'DI', 'DE', 'DA',
        'NI', 'NE', 'NA',
        'YI', 'YE', 'YA',
        'OO', 'OZ', 'ER'
    ],
    nameLength: new Range(2, 4)
})