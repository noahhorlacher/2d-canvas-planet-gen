import Biome from "../Biome.js"
import Color from '../Color.js'
import Range from '../Range.js'

export default new Biome({
    skyGradient: { start: '#bfc', stop: '#58a' },
    amountSuns: new Range(2, 4),
    sunsSize: new Range(5, 30),
    sunsColor: '#ffc',
    amountStars: new Range(200, 400),
    starsSize: new Range(1, 3),
    starsColor: '#afa8',
    overlayColor: '#011',
    iso: 0.1,
    scale: 0.005,
    octaves: 8,
    persistence: 0.6,
    groundRange: new Range(1 / 4, 5 / 6),
    materials: [
        { value: 0, color: new Color(255, 180, 220) }, // light pink slime
        { value: .01, color: new Color(255, 120, 160) }, // pink slime
        { value: .03, color: new Color(120, 220, 140) }, // slime
        { value: .045, color: new Color(100, 200, 120) }, // slime
        { value: .06, color: new Color(90, 190, 100) }, // slime
        { value: .08, color: new Color(90, 180, 90) }, // slime
        { value: .1, color: new Color(90, 160, 70) }, // slime
        { value: .13, color: new Color(80, 160, 40) }, // slime
        { value: .15, color: new Color(80, 170, 20) }, // slime
        { value: .2, color: new Color(90, 180, 10) }, // slime
        { value: .25, color: new Color(100, 200, 0) }, // slime
        { value: .3, color: new Color(120, 220, 0) }, // slime
        { value: .35, color: new Color(140, 230, 0) }, // slime
        { value: .4, color: new Color(160, 240, 0) }, // slime
        { value: .5, color: new Color(180, 255, 0) }, // slime
        { value: .55, color: new Color(200, 255, 0) }, // slime
        { value: .6, color: new Color(220, 255, 0) }, // slime
        { value: .65, color: new Color(255, 255, 200) }, // glow
        { value: .7, color: new Color(255, 255, 0) }, // magma
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