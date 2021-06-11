"use strict";

// Contructor Function 
export default function Animal (name, age) {
    this.name = name;
    this.age = age;
}

// Extend Animal prototype (Better performance than defining the method inside of the constructor function)
Animal.prototype.walk = function () {
    return `${this.name} is walking.`;
}

Animal.prototype.getAge = function () {
    return `${this.name} is ${this.age} years old.`;
}

// Create a new instance 
const biso = new Animal('biso', 1);

// Use biso's methods and properties
// 'require.main === module' prevents the code from being run when we import the module
if (typeof require !== 'undefined' && require.main === module) {
    console.log(biso.__proto__ == Animal.prototype);
    console.log(biso.age);
    console.log(biso.getAge());
    console.log(biso.walk());
}
