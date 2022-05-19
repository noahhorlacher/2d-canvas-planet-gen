import Biome from "../Biome.js"
import Color from '../Color.js'
import Range from '../Range.js'

export default new Biome({
    skyGradient: { start: '#100', stop: '#000' },
    amountSuns: new Range(1, 1),
    sunsSize: new Range(5, 30),
    sunsColor: '#ffe',
    amountStars: new Range(500, 600),
    starsSize: new Range(1, 2),
    starsColor: '#fff8',
    overlayColor: '#000',
    iso: 0.05,
    scale: 0.0025,
    octaves: 6,
    persistence: 0.65,
    groundRange: new Range(1 / 4, 5 / 6),
    materials: [
        { value: 0, color: new Color(220, 150, 150) }, // light red dust
        { value: .01, color: new Color(220, 130, 130) }, // red dust
        { value: .03, color: new Color(210, 120, 120) }, // ground
        { value: .045, color: new Color(200, 120, 120) }, // ground
        { value: .06, color: new Color(190, 120, 120) }, // ground
        { value: .08, color: new Color(180, 110, 110) }, // ground
        { value: .1, color: new Color(170, 110, 110) }, // ground
        { value: .13, color: new Color(160, 110, 110) }, // ground
        { value: .15, color: new Color(150, 110, 110) }, // ground
        { value: .2, color: new Color(140, 110, 110) }, // ground
        { value: .25, color: new Color(130, 100, 100) }, // ground
        { value: .3, color: new Color(130, 90, 90) }, // ground
        { value: .35, color: new Color(120, 90, 90) }, // ground
        { value: .4, color: new Color(110, 80, 90) }, // ground
        { value: .5, color: new Color(100, 80, 80) }, // ground
        { value: .55, color: new Color(90, 70, 70) }, // ground
        { value: .6, color: new Color(80, 70, 60) }, // ground
        { value: .67, color: new Color(70, 60, 60) }, // ground
        { value: .71, color: new Color(60, 50, 50) }, // ground
    ],
    syllables: [
        'MA', 'RA', 'SA',
        'M', 'R', 'S'
    ],
    nameLength: new Range(2, 4)
})