import Biome from "../Biome.js"
import Color from '../Color.js'
import Range from '../Range.js'
import Material from '../Material.js'

export default new Biome({
    skyGradient: { start: '#88a', stop: '#446' },
    amountSuns: new Range(3, 7),
    sunsSize: new Range(10, 30),
    sunsColor: '#ddf',
    amountStars: new Range(500, 600),
    starsSize: new Range(1, 1),
    starsColor: '#fffa',
    overlayColor: '#00a',
    iso: 0.05,
    scale: 0.01,
    octaves: 8,
    persistence: 0.65,
    groundRange: new Range(1 / 4, 1),
    materials: [
        new Material('light ice', 0, new Color(200, 200, 240)),
        new Material('ice', .01, new Color(190, 190, 240)),
        new Material('dark ice', .03, new Color(180, 180, 230)),
        new Material('ground 1', .045, new Color(170, 170, 220)),
        new Material('ground 2', .06, new Color(170, 170, 210)),
        new Material('ground 3', .08, new Color(160, 160, 200)),
        new Material('ground 4', .1, new Color(160, 160, 190)),
        new Material('ground 5', .13, new Color(150, 150, 190)),
        new Material('ground 6', .15, new Color(140, 140, 190)),
        new Material('ground 7', .2, new Color(130, 140, 180)),
        new Material('ground 8', .25, new Color(130, 130, 170)),
        new Material('ground 9', .3, new Color(120, 120, 160)),
        new Material('ground 10', .35, new Color(120, 110, 140)),
        new Material('ground 11', .4, new Color(110, 100, 130)),
        new Material('ground 12', .5, new Color(100, 80, 120)),
        new Material('ground 13', .55, new Color(90, 70, 110)),
        new Material('ground 14', .6, new Color(80, 70, 100)),
        new Material('ground 15', .67, new Color(70, 60, 90)),
        new Material('ground 16', .71, new Color(60, 50, 80))
    ],
    syllables: [
        'BRI', 'RI', 'BI',
        'ZI', 'IZ', 'I', 'IR',
        'CE', 'EC', 'BRO', 'RO',
        'BO', 'ZO', 'OZ', 'OOO'
    ],
    nameLength: new Range(2, 4)
})