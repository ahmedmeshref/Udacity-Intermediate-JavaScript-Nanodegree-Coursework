// Callback Challenge 2: Secret Number

// Write a callback chain that does the following:

// 1. Generates a random number
// 2. Waits three seconds, then adds 5 to the random number
// 3. Every two seconds, adds 2 to the random number for a total of 6 seconds
// 4. Subtracts 3
// 5. Waits four seconds, and logs the resulting number


// Your Code Here:
const subtractThree = (num) => {
    num = num - 3;
    setTimeout(console.log, 4000, num);
}

const addTwoCl = (num) => {
    let seconds = 0;
    const addTwo = () => {
        if (seconds < 6) {
            num += 2;
            seconds += 2;
        } else {
            clearInterval(byTwo);
            subtractThree(num);
        }
    }
    const byTwo = setInterval(addTwo, 2000, num);
}

const addFive = (num) => {
    const new_num = num + 5;
    addTwoCl(new_num);
}

// Function for you to get started with:
const generateRandomNumber = () => {
    const rand = Math.round(Math.random() * 10);
    console.log(rand);
    setTimeout(addFive, 1000, rand);
}

generateRandomNumber();