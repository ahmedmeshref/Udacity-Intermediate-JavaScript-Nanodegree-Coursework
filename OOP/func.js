// callback functions
function test(arr, callback) {
    for (let val of arr) {
        console.log(callback(val));
    }
}


function isPositive (val) {
    return val > 0 ? val : false;
}

test([1, 2, -7, 0, 5], isPositive);
