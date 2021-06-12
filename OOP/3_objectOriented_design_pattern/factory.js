// Create Animal factory 
function Animal() {
    // Default values for the private vars.
    let _name = 'Emore';
    let _age = 1;
    return {
        getAge() {
            return `${_name} is ${_age} years old.`;
        },
        set name(newName) {
            _name = newName;
        },
        get name() {
            return _name;
        },
        set age(newAge) {
            _age = newAge;
        },
        get age() {
            return _age;
        }
    };
}

let koky = Animal();
koky.name = 'Koky';
koky.age = 2;
console.log(koky.getAge());
// Note that koky object can't access private varibales 
console.log(koky._name); // undefined