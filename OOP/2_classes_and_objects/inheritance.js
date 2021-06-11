"use strict";
import Animal from './classes.js';

// Cat inhert from Animal class  
export default function Cat(name, age, species) {
    Animal.call(this, name, age);
    this.species = species;
}

// Inhert prototype from Animal
Cat.prototype = Object.create(Animal.prototype);

// Extend the prototype of Cat with new methods 
Cat.prototype.miaw = function () {
    return `${this.name} says miaw!`;
}

// Create a new instance 
const koky = new Cat('koky', 1, 'Calico');

// Test implementation 
if (typeof require !== 'undefined' && require.main === module) {
    console.log(koky.age);
    console.log(koky.miaw());
    console.log(koky.getAge());
    console.log(koky.walk());
}