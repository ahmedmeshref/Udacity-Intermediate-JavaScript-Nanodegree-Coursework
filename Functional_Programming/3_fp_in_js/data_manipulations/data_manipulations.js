var nearEarthObjects = require('./nasa_near_earth_object_API.json');

// Global Functions 
const getAllObjects = () => {
    const allObjects = Object.values(nearEarthObjects.near_earth_objects).flat();
    return allObjects;
}
// The object in the nasa_near_earth_object_API.json is a copy of real API response from the NASA Near-Earth Object API. 
// Find the following from the API:

// Total Count ---------------------------------------------
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count.
const totalObjects = () => {
    return nearEarthObjects.element_count;
}

console.log(totalObjects());

// Averages ------------------------------------------------
// 2. What was the average absolute magnitude of all the near earth objects in this data set? Return the average absolute_magnitude_h.
const sum = (lst) => {
    return lst.reduce((currTotal, currVal) => currTotal + currVal);
}

const avgMag = () => {
    const allObjects = getAllObjects();
    // const objsMagnitude = allObjects.flat().map(obj => obj.absolute_magnitude_h);
    // return sum(objsMagnitude) / objsMagnitude.length;
    const sumMagnitude = allObjects.reduce((totalMags, currObj) => totalMags + currObj.absolute_magnitude_h, 0);
    return sumMagnitude / allObjects.length;
}

console.log(avgMag());

// Hint - you can achieve this multiple ways, but the reduce method can be a little-known but cool way to find averages. To do it though, you'll need to use the initial_value argument
// For some extra challenge try using reduce with the initial setting argument. To learn more about it, take a look at this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


// Hazardous -----------------------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous
const formatObject = (hazardousObj) => {
    return {
        id: hazardousObj.id,
        name: hazardousObj.name,
        max_size: hazardousObj.estimated_diameter.miles.estimated_diameter_max,
        closest_approach: hazardousObj.close_approach_data[0].miss_distance.miles
    }
}

const allHazardous = () => {
    // is_potentially_hazardous_asteroid
    const allObjects = getAllObjects();
    const hazardous = allObjects.filter(obj => obj.is_potentially_hazardous_asteroid).map(formatObject);
    return hazardous;
}

console.log(allHazardous())

// Too Close for Comfort -----------------------------------
// 4. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles
const objectsByMissDistance = () => {
    const allObjects = getAllObjects();
    return allObjects.filter(obj => obj.close_approach_data[0].miss_distance.miles < 900000).map(formatObject);
}

console.log(objectsByMissDistance());

// Alert ---------------------------------------------------
// 5. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth. 

