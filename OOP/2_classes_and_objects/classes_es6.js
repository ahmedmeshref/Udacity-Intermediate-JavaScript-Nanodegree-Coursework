// Create the class Animal using ES6 syntax

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    walk() {
        return `${this.name} is walking.`;
    }

    getAge() {
        return `${this.name} is ${this.age} years old.`;
    }
}


// Create cat class that inherts from Animal
class Cat extends Animal {
    constructor(name, age, species) {
        super(name, age);
        this.species = species;
    }

    miaw() {
        return `${this.name} says miaw!`;
    }
}

// Test Animal class
let mage = new Animal('Mage', 3);
console.log(mage.getAge());


// Test Cat class
let miky = new Cat('Miky', 1, 'Calico');
console.log(miky.getAge());
console.log(miky.miaw());