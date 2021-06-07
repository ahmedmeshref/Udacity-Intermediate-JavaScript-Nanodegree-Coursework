const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 100);
});

async function asyncSyntax() {
    const val = await promise1();
    console.log(`Waiting is over, val: ${val}`);
    return val;
}

// Async forces the function to return a promise 
const newPromise = asyncSyntax();
console.log(`Function returns : ${newPromise}`);
newPromise.then((val) => {
    console.log(`Val = ${val}`);
})
.catch(err => {
    console.log(err);
})

// NOTICE that line will be printed after the async function is called (Async/Await doesn't BLOCK Event loop).
console.log('1');