"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        console.log(this.signature)
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        console.log(this.key)
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        console.log(person)

        if (!this.door) {
            throw new Error('Door is close');
        }
        this.tenants.push(person);
        console.log('Person inside');
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Key to another door');
        }
        return this.door = true;
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
//# sourceMappingURL=app.js.map