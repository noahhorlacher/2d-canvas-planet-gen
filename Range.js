class Range {
    constructor(min, max) {
        this.min = min
        this.max = max
    }

    static random(min, max) {
        return Math.round((max - min) * Math.random() + min)
    }

    random() {
        return Math.round((this.max - this.min) * Math.random() + this.min)
    }
}

export default Range