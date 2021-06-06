// Something is wrong with this promise chain!

// This promise chain catch clause always runs. Figure out why and get the console.log at the last then clause to run.
const setCategory = (category, id) => {
    // imagine we are assiging a category to an item...
    console.log("Category assigned!");
}
const data = {
    id: "KDF8D903N",
    intVal: 855,
    message: "This is a message",
    sourceId: "NotNull"
};

new Promise((resolve, reject) => {
    resolve(data);
})
    .then(data => {
        if (data.sourceId) {
            return data;
        }
        // when the if statement returns something, there is no need for an else statement
        throw new Error('No source was defined');
    })
    .then(data => {
        const {intVal, id, message} = data;
        if (intVal > 0 && intVal !== null) {
            const category = intVal.toString().split()[0];
            setCategory(category, id);
            return { id, message };
        } else {
            throw new Error('No integer value was provided');
        }
    })
    .then(data => console.log(data.id, data.message))
    .catch((error) => {
        console.log(error)
    })
