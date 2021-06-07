// Merge another character into this state. Keep at least one value and change at least one value

let state = {
    name: 'Wash',
    ship: {
        name: 'Serenity',
        class: 'Firefly'
    },
    role: 'Pilot',
    favoriteThing: {
        item: "Toy",
        details: {
            type: 'Toy Tyrannosaurus Rex'
        }
    }
}

const incomingState = {
    name: 'Mal',
    role: 'Captain',
    favoriteThing: {
        item: "Not complicated"
    },
    history: ["Browncoat sergeant"]
}

// Object.assign(target, source)
state = Object.assign(state, incomingState);