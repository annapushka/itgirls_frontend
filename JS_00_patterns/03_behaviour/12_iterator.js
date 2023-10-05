class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        value: void 0,
                        done: true
                    }
                }
            }
        }
    }
}

function* generator(collection) {
    let index = 0;

    while (index < collection.length) {
        yield collection[index++];
    }
}

const iterator = new MyIterator(['This', 'is', 'iterator']);
const gen = generator(['This', 'is', 'iterator']);

for (const value of iterator) {
    console.log(value);
}

for (const value of gen) {
    console.log(value);
}

console.log(gen.next().value); // 'This'
console.log(gen.next().value); // 'is'
console.log(gen.next().value); // 'iterator'
console.log(gen.next().value); // undefined

