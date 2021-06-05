// Task 2 - print each word of this quote every second using built javascript method setInterval. Print the quote source all at once afterwards

// Tip: To stop a setInterval - call clearInterval() 
// Tip: To pass arguments to the function setInterval is calling, add them as a 3rd (and 4th if you need it) argument to setInterval, after the milliseconds 

const quote = "The art of programming is the skill of controlling complexity.";
const reference = "-- Marijn Haverbeke, Eloquent JavaScript";

const printWordClosure = () => {
    let index = 0;

    return (quoteArr) => {
        if (index < quoteArr.length) {
            console.log(quoteArr[index]);
            index++;    
        } else {
            clearInterval(quoteInterval);
            console.log(reference);
        }
    }
}

const quoteInterval = setInterval(printWordClosure(), 1000, quote.split(' '));

