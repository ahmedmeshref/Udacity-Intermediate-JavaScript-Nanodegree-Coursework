// greeter.js
export default function Greet() {
    let _message = 'Hello World!';
    return {
        greet() {
            console.log(this.message);
        },
        set message(message) {
            _message = message;
        },
        get message() {
            return _message;
        }
    };
}

let greet = Greet();
greet.message = 'Hey';
console.log(greet.message)