// Pattern to mark private and public methods and protperties 

let person = (function Person() {
    let _name = 'meshref';

    function getName() {
        return _name;
    }

    function setName(name) {
        _name = name;
    }

    return {
        name: getName,
        setName: setName
    }
}
)();


let ahmed = person;
ahmed.setName('ahmed');
console.log(ahmed.name());
