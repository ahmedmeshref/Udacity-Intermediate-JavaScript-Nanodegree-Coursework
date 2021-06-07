// Directions: Translate from normal function to pure function
let greeting = 'Hello, '

const greet = (name) => {
    return greeting += name
}

const pureGreet = (greeting, name) => {
    return `${greeting}, ${name}.`;
}

// Desired output:
//  Hello, Arthur. 
//  Hello, Guinevere. 

// Test inpure function
console.log(greet('Arthur.'))
console.log(greet('Guinevere.'))

// Test pure function
console.log(pureGreet('Hello', 'Arthur'))
console.log(pureGreet('Hey', 'Guinevere'))

