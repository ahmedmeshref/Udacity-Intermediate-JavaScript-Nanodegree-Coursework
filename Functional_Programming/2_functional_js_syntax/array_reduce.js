// 1. Take this disjointed sentence and turn it into a single string
const text = ['The ships', 'hung in the sky,', 'much the way', 'that bricks don`t']

function join(strsArr) {
    let sentence = strsArr.reduce((currSentence, currVal) => currSentence + ' ' + currVal);
    return sentence;
}

console.log(join(text));
// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
    {
        team: 'A',
        score: 20
    },
    {
        team: 'B',
        score: 17
    },
    {
        team: 'C',
        score: 23
    },
    {
        team: 'D',
        score: 27
    }
]

// Your Code Here
let determineWinner = (currWinner, currTeam) => currWinner.score < currTeam.score ? currTeam : currWinner;

function getWinner(teams) {
    let winningTeam = teams.reduce(determineWinner);
    return winningTeam.team;
}
console.log(getWinner(scores));

// expected output: "C"

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
    {
        name: 'Serenity',
        speed: '4.2G',
    },
    {
        name: 'Cylon Raider',
        speed: '7.5G',
    },
    {
        name: 'Swordfish II',
        speed: '50G',
    },
    {
        name: 'Tie Fighters',
        speed: '4100G',
    }
]

// Your Code Here
function determineFastest (currFastest, currShip) {
    if (parseFloat(currFastest.speed) < parseFloat(currShip.speed)) {
        return currShip;
    }
    else {
        return currFastest;
    } 
} 

function getFastestShip(shipsArr) {
    let fastestShip = shipsArr.reduce(determineFastest);
    return fastestShip.name;
}

console.log(getFastestShip(ships));
// Expected output: Tie Fighters