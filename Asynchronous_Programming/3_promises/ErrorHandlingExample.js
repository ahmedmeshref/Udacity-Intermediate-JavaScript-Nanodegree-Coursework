// Example from the Better Catch Clauses video

let num = null;

new Promise((resolve, reject) => {
    resolve(['B', 'C', 'D']);
    // reject();
})
    .then(data => {
        foo
        // throw new Error('Error at B');
        console.log(data.shift());
        num = 5;
        return data;
    })
    .catch(error => {
        if (error.message === 'Error at B') {
            alert('Error at B')
            console.log(error)
        } else {
            alert('There was an error completing this action, to try again return to _____.com')
            console.log(error)
        }
    })