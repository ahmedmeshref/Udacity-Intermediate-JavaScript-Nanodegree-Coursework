const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function (genre) {
        console.log(`${this.title} is a classic ${genre}`);
    }
};

const pride = {
    title: 'Pride and Prejudice'
};

// We can set the value of keyword `this` using:
// 1- Call 
mockingbird.describe('novel')
mockingbird.describe.call(pride, 'novel');


// 2- apply
mockingbird.describe.apply(pride, ['novel']);

// 3- bind -> returns a new function with the provided value of `this`
const newFun = mockingbird.describe.bind(pride);
newFun('novel');