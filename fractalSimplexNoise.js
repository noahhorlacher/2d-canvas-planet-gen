import makeNoise2D from './openSimplexNoise.js'
import { makeRectangle } from './fractalNoise.js'

function fractalSimplexNoise(width, height, options) {
    return makeRectangle(width, height, makeNoise2D(Date.now()), options)
}

export default fractalSimplexNoise