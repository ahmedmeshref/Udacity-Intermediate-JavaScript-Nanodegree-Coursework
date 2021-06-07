// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two

const numSquare = (x) => {
  return x^2;
}

const addTwo = (callback, x) => {
  return callback() + 2
}

console.log(addTwo(numSquare, 2));

// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`
}

const greet = (title, fName, lName) => {
  return createFullName(fName, lName, title);
}

console.log(greet('MR', 'Ahmed', 'Meshref'));
// you might notice that this function is less than ideal - that's great! We'll talk about why next