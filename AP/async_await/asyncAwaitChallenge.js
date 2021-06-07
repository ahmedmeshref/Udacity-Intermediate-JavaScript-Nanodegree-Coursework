// Here is an example with Promises where we need to wait for both responses before performing an action

const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 19);
});

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 23);
});

// Challenge 1

// Try using JUST Promise syntax to sum the results of both Promises and console log the message below
// "The answer to life, the universe, and everything is: 42"

function sumVals(p1, p2) {
    Promise.allSettled([p1, p2])
        .then(values => {
            const sum = values.filter(val => val.status === 'fulfilled').reduce((currTotal, currVal) => currTotal + currVal.value, 0);
            console.log(`The answer to life, the universe, and everything is: ${sum}`);
        })
        .catch(err => console.log(err))
}

// ---------------------------------------------------------------------------

// Challenge 2
// Now try the same example, but instead of implementing it with Promises, use Async/await
// Console log: "The answer to life, the universe, and everything is: 42"

async function sumValsAsyncAwait(p1, p2) {
    const val1 = await p1;
    const val2 = await p2;
    console.log(`The answer to life, the universe, and everything is: ${val1 + val2}`);
}

sumVals(promise1(), promise2());
sumValsAsyncAwait(promise1(), promise2())