import Biome from "../Biome.js"
import Color from '../Color.js'
import Range from '../Range.js'
import Material from "../Material.js"

export default new Biome({
    skyGradient: { start: '#cef', stop: '#58a' },
    amountSuns: new Range(1, 2),
    sunsSize: new Range(20, 80),
    sunsColor: '#ffb',
    amountStars: new Range(200, 400),
    starsSize: new Range(1, 1),
    starsColor: '#fff8',
    overlayColor: '#004',
    iso: 0.05,
    scale: 0.01,
    octaves: 6,
    persistence: 0.5,
    groundRange: new Range(1 / 3, 5 / 6),
    materials: [
        new Material('light grass', 0, new Color(90, 150, 80)),
        new Material('grass', .01, new Color(71, 128, 59)),
        new Material('earth', .03, new Color(117, 103, 88)),
        new Material('sandy earth', .045, new Color(189, 171, 142)),
        new Material('stone 1', .06, new Color(212, 209, 186)),
        new Material('stone 2', .08, new Color(190, 205, 183)),
        new Material('stone 3', .1, new Color(180, 200, 180)),
        new Material('stone 4', .13, new Color(175, 192, 170)),
        new Material('stone 5', .15, new Color(170, 185, 170)),
        new Material('stone 6', .2, new Color(150, 170, 150)),
        new Material('stone 7', .25, new Color(135, 155, 135)),
        new Material('stone 8', .3, new Color(120, 140, 120)),
        new Material('stone 9', .35, new Color(105, 125, 105)),
        new Material('stone 10', .4, new Color(90, 110, 90)),
        new Material('stone 11', .5, new Color(70, 90, 70)),
        new Material('stone 12', .55, new Color(50, 80, 50)),
        new Material('stone 13', .6, new Color(20, 50, 20)),
        new Material('magma', .65, new Color(255, 40, 20))
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