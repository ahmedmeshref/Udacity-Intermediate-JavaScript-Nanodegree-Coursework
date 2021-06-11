import Cat from './inheritance.js'

const features = {
    name : 'memo',
    color : 'white'
}


// Extend Cat with speak method from Mamil
Object.assign(Cat.prototype, features);

// Test speak from Cat
const koky = new Cat('koky', 1, 'Calico');
console.log(koky.name);
console.log(koky.color);
