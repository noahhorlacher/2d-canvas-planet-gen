import Biome from "../Biome.js"
import Color from '../Color.js'
import Range from '../Range.js'

export default new Biome({
    skyGradient: { start: '#cef', stop: '#58a' },
    amountSuns: new Range(1, 2),
    sunsSize: new Range(20, 80),
    sunsColor: '#ffb',
    amountStars: new Range(200, 400),
    starsSize: new Range(1, 3),
    starsColor: '#fff8',
    overlayColor: '#004',
    iso: 0.05,
    scale: 0.01,
    octaves: 6,
    persistence: 0.5,
    groundRange: new Range(1 / 3, 5 / 6),
    materials: [
        { value: 0, color: new Color(90, 150, 80) }, // light grass
        { value: .01, color: new Color(71, 128, 59) }, // grass
        { value: .03, color: new Color(117, 103, 88) }, // earth
        { value: .045, color: new Color(189, 171, 142) }, // sandy earth
        { value: .06, color: new Color(212, 209, 186) }, // stone
        { value: .08, color: new Color(190, 205, 183) }, // stone
        { value: .1, color: new Color(180, 200, 180) }, // stone
        { value: .13, color: new Color(175, 192, 170) }, // stone
        { value: .15, color: new Color(170, 185, 170) }, // stone
        { value: .2, color: new Color(150, 170, 150) }, // stone
        { value: .25, color: new Color(135, 155, 135) }, // stone
        { value: .3, color: new Color(120, 140, 120) }, // stone
        { value: .35, color: new Color(105, 125, 105) }, // stone
        { value: .4, color: new Color(90, 110, 90) }, // stone
        { value: .5, color: new Color(70, 90, 70) }, // stone
        { value: .55, color: new Color(50, 80, 50) }, // stone
        { value: .6, color: new Color(20, 50, 20) }, // stone
        { value: .65, color: new Color(100, 40, 20) }, // magma glow
        { value: .7, color: new Color(255, 40, 20) }, // magma
    ],
    syllables: [
        'AA', 'EE', 'II', 'OO', 'UU',
        'AKH', 'EKH', 'IKH', 'OKH', 'UKH',
        'AZ', 'EZ', 'IZ', 'OZ', 'UZ',
        'AR', 'ER', 'IR', 'OR', 'UR',
        'AB', 'EB', 'IB', 'OB', 'UB',
        'ATH', 'ETH', 'ITH', 'OTH', 'UTH',
        'AX', 'EX', 'IX', 'OX', 'UX',
        'AM', 'EM', 'IM', 'OM', 'UM',
        'ANG', 'ENG', 'ING', 'ONG', 'UNG'
    ],
    nameLength: new Range(2, 4)
})