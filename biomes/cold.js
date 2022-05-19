import Biome from "../Biome.js"
import Color from '../Color.js'
import Range from '../Range.js'

export default new Biome({
    skyGradient: { start: '#88a', stop: '#446' },
    amountSuns: new Range(3, 7),
    sunsSize: new Range(10, 30),
    sunsColor: '#ddf',
    amountStars: new Range(500, 600),
    starsSize: new Range(1, 2),
    starsColor: '#fffa',
    overlayColor: '#00a',
    iso: 0.05,
    scale: 0.01,
    octaves: 8,
    persistence: 0.65,
    groundRange: new Range(1 / 4, 1),
    materials: [
        { value: 0, color: new Color(200, 200, 240) }, // light ice
        { value: .01, color: new Color(190, 190, 240) }, // ice
        { value: .03, color: new Color(180, 180, 230) }, // dark ice
        { value: .045, color: new Color(170, 170, 220) }, // ground
        { value: .06, color: new Color(170, 170, 210) }, // ground
        { value: .08, color: new Color(160, 160, 200) }, // ground
        { value: .1, color: new Color(160, 160, 190) }, // ground
        { value: .13, color: new Color(150, 150, 190) }, // ground
        { value: .15, color: new Color(140, 140, 190) }, // ground
        { value: .2, color: new Color(130, 140, 180) }, // ground
        { value: .25, color: new Color(130, 130, 170) }, // ground
        { value: .3, color: new Color(120, 120, 160) }, // ground
        { value: .35, color: new Color(120, 110, 140) }, // ground
        { value: .4, color: new Color(110, 100, 130) }, // ground
        { value: .5, color: new Color(100, 80, 120) }, // ground
        { value: .55, color: new Color(90, 70, 110) }, // ground
        { value: .6, color: new Color(80, 70, 100) }, // ground
        { value: .67, color: new Color(70, 60, 90) }, // ground
        { value: .71, color: new Color(60, 50, 80) }, // ground
    ],
    syllables: [
        'BRI', 'RI', 'BI',
        'ZI', 'IZ', 'I', 'IR',
        'CE', 'EC', 'BRO', 'RO',
        'BO', 'ZO', 'OZ', 'OOO'
    ],
    nameLength: new Range(2, 4)
})