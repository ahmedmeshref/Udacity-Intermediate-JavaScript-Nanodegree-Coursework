const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 100);
});

async function asyncSyntax() {
    const val = await promise1();
    console.log(`Waiting is over, val: ${val}`);
    return val;
}

// Async forces the function to return a promise 
const funcVal = asyncSyntax();
console.log(`Function returns : ${funcVal}`);
setTimeout(console.log, 3000, funcVal); // return a promise 
