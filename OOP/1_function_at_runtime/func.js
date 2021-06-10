// callback functions

function getPositiveValues(arr, callback) {
    arr.forEach(val => {
        console.log(callback(val));
    })
}

function isPositive(val) {
    return val > 0 ? val : false;
}

getPositiveValues([1, 2, -7, 0, 5], isPositive);
