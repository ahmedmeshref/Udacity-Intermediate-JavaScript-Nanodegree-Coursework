new Promise((resolve, reject) => {
    console.log('A');

    resolve();
})
.then(() => {
    console.log('B');
})
.catch(() => {
    console.log('C');
})