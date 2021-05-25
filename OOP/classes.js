"use strict";

export default function Animal (name, age) {
    this.name = name;
    this.age = age;
}

// Extend Animal prototype 
Animal.prototype.walk = function () {
    return `${this.name} is walking.`;
}

Animal.prototype.getAge = function () {
    return `${this.name} is ${this.age} years old.`;
}

// Create a new instance 
const biso = new Animal('biso', 1);

// // Use biso's methods and properties
// console.log(biso.__proto__ == Animal.prototype);
// console.log(biso.age);
// console.log(biso.getAge());
// console.log(biso.walk());
