// Mixins allows for inherting methods and properties from multiple resources.

const features = {
    color: 'Red',
    type: 'Dog'
}

const abilities = {
    canRun: true
}


// Wolf is a new class with extended features 
let Wolf = Object.assign({}, features, abilities);
console.log(Wolf.canRun);
console.log(Wolf.color);
