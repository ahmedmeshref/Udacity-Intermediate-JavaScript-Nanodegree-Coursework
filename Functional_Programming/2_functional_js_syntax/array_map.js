// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// your code
function reverseArray(arr) {
    let reversedArr = [...arr].reverse();
    return reversedArr;
}

console.log(reverseArray(start));
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:

// your code
function jobName(shipMates) {
    let jobNameArr = shipMates.map(val => `${val[1]}: ${val[0]}`);
    return jobNameArr;
}

const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]
console.log(jobName(shipMates));

// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name length: even|odd

function oddOrEvenCalc(val) {
    return val % 2 == 0 ? 'even' : 'odd';
}

function oddOrEven(strs) {
    let strsArr = strs.map(str => `${str}: ${oddOrEvenCalc(str.length)}`);
    return strsArr;
}

const awayTeam = ["Picard", "Riker", "Troy", "Data"]
console.log(oddOrEven(awayTeam));

// expected output: Array: ["Picard: even", "Riker: odd", etc...]

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

function eleInd(arr) {
    return arr.map((val, ind) => [val , ind]);
}

console.log(eleInd(sci_fi_shows));
// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4]

// your code
function multidimensionalArr (arr) {
    return arr.map((val, ind, array) => array);
}

console.log(multidimensionalArr(numbers));
// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]

