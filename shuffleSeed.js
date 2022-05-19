function shuffleSeed(seed) {
    let newSeed = new Uint32Array(1)
    newSeed[0] = seed[0] * 1664525 + 1013904223
    return newSeed
}
export default shuffleSeed