class User {
    constructor(name) {
        this.name = name;
        this.room = null
    }
    send(message, to) {
        this.room.send(message, this, to);
    }
    recieve(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }
    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }
    send(message, from, to) {
        if (to) {
            to.recieve(message, from);
        } else {
            Object.values(this.users).forEach(user => {
                if (user !== from) {
                    user.recieve(message, from);
                }
            })
        }
    }
}

const anna = new User('Anna');
const mike = new User('Mike');
const john = new User('John');

const room = new ChatRoom();

room.register(anna);
room.register(mike);
room.register(john);

anna.send('Hello Mike', mike);
mike.send('Hello Anna', anna);
john.send('Hello everyone');