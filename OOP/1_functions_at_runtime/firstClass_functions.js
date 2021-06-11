// Functions are first class in JS which means they could be:

// 1- Passed to other functions (callbacks). 
function getPositiveValues(arr, callback) {
    arr.forEach(val => {
        console.log(callback(val));
    })
}

function isPositive(val) {
    return val > 0 ? val : false;
}

getPositiveValues([1, 2, -7, 0, 5], isPositive);

// 2- Returned from a function (powerful for closures)
function counter() {
    let count = 0;
    return function incrementCounter() {
        return count++;
    }
}

let myCounter = counter();
console.log(`Val of my counter: ${myCounter()}`); // 0
console.log(`Val of my counter: ${myCounter()}`); // 1


// 3- Saved in variables 
let sum = (x, y) => {
    return x + y;
}

console.log(`2 + 3 = ${sum(2, 3)}`)