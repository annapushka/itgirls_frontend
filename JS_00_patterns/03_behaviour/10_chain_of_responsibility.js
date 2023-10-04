class MySum {
    constructor(initialValue = 42) {
        this.total = initialValue
    }

    add(value) {
        this.total += value
        return this
    }
}

const sum1 = new MySum()
console.log(sum1.add(8).add(10).total) // 60

const sum2 = new MySum(0)
console.log(sum2.add(1).add(2).total) // 3