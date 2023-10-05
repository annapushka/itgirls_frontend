class MtMath {
    constructor(initialValue = 0) {
        this.num = initialValue;
    }

    square() {
        return this.num ** 2;
    }

    cube() {
        return this.num ** 3;
    }
}

class Command {
    constructor(subject) {
        this.subject = subject;
        this.commandsExecuted = [];
    }

    execude(command) {
        this.commandsExecuted.push(command);
        return this.subject[command]();
    }
}

const x = new Command(new MtMath(2));

console.log(x.execude('square')); //4
console.log(x.execude('cube')); //8
console.log(x.commandsExecuted); //['square', 'cube']