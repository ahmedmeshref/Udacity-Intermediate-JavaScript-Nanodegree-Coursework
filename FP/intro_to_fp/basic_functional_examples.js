// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------

/** 
 * Get the current hour.  
 */
function getHour() {
    let timeNow = new Date().getHours();
    return timeNow;
}

/**
 * Parse the current time and return "good afternoon" is its afternoon and "good morning" otherwise.  
 */
function determineGreeting() {
    let time = getHour();
    if (time >= 12 && time <= 3) {
        return "good afternoon";
    } else {
        return "good morning";
    }
}

/** 
 * Greet the user with a giving message
 */
function greeting(greetMsg) {
    return greetMsg;
}

console.log(greeting(determineGreeting()))

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------

function countDown(number) {
    let numsArr = [];
    for (let i = number; i >= 0; i--) {
        numsArr.push(i);
    }
    return numsArr;
}

console.log(countDown(10))
