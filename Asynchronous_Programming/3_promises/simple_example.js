new Promise((resolve, reject) => {
    console.log('A');

    resolve('B');
    // reject(data);
})
    .then((letter) => {
        console.log(letter);
        return 'C';
    })
    .then((letter) => {
        console.log(letter);
    })
    .catch(() => {
        console.log('D');
    })