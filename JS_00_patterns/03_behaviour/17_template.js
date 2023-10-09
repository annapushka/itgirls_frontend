class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} does ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} has received ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'writing code';
    }
}

class QA extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'testing';
    }
}

const dev = new Developer('John', 10000);
console.log(dev.work()); // John does writing code
console.log(dev.getPaid()); // John has received 10000

const qa = new QA('Anna', 8000);
console.log(qa.work()); // Anna does testing
console.log(qa.getPaid()); // Anna has received 8000