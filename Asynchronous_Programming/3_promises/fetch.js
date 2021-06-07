const fetch = require('node-fetch');
// We have set up an endpoint at http://localhost:3000.

// Make one fetch request for each CRUD action below and print the response.


// Create a GET request to http://localhost:3000
fetch('http://localhost:3000')
    .then((response) => response.json())
    .then((resVal) => {
        console.log(resVal);
    })
    .catch((err) => {
        console.log(err);
    })

// Create a POST request to http://localhost:3000
const data = {name: "Meshref"}
fetch('http://localhost:3000', {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
})
    .then((response) => response.json())
    .then((resVal) => {
        console.log(resVal);
    })
    .catch((err) => {
        console.log(err);
    })


// Create a PUT request to http://localhost:3000
const newName = {name: "Ahmed"}
fetch('http://localhost:3000', {
    method: 'PUT',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newName),
})
    .then((response) => response.json())
    .then((resVal) => {
        console.log(resVal);
    })
    .catch((err) => {
        console.log(err);
    })


// Create a DELETE request to http://localhost:3000
const nameToDelete = {name: "Ahmed"}
fetch('http://localhost:3000', {
    method: 'PUT',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(nameToDelete),
})
    .then((response) => response.json())
    .then((resVal) => {
        console.log(resVal);
    })
    .catch((err) => {
        console.log(err);
    })