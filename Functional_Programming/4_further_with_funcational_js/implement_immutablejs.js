// implement_immutablejs.js
const Immutable = require('immutable');

// Lets think about how we could refactor our application state flow to use Immutable. 
// The original code is provided below, how might you re-write both the store object and updateStore function with Immutable?
// Remember if you need help, the docs should be the first place you look.

let store = Immutable.Map({
    user: Immutable.Map({
        first_name: 'John',
        last_name: 'Doe'
    }),
})

const updateStore = (store, newState) => {
    store = Object.assign(store, newState)
    render(root, store)
}