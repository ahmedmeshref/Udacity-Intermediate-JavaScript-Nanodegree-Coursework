const book1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Enders Game");
});

const book2 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, "Sorry, not available!");
});

const book3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Harry Potter and The Prisoner of Azkaban");
});

const book4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Stranger in a Strange Land");
});

Promise.allSettled([book1, book2, book3, book4])
    .then(results => {
        console.log(results)
        results.forEach(result => console.log(result.value))
    })
    .catch(error => console.log(error));
