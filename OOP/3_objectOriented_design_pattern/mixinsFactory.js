function CoffeeMaker(object) {
    let needsRefill = false;

    return Object.assign({}, object, {
        pourAll: function () {
            needsRefill = true;
        },
        isEmpty: function () {
            return needsRefill;
        }
    });
}


function IceCreamMaker(object) {
    // _flavor is private 
    let _flavor = 'mango';

    return Object.assign({}, object, {
        set flavor(flavor) {
            _flavor = flavor;
        },
        get flavor() {
            return _flavor;
        }
    })
}

// let banana = IceCreamMaker({});
// banana.flavor = 'banana';
// console.log(banana.flavor);

// Test using factory inhertance
const iceCoffee = CoffeeMaker(IceCreamMaker({}));
console.log(iceCoffee); 
iceCoffee.flavor = 'coffee';
console.log(iceCoffee.flavor);
