'use strict';

/*
//Activating strict moda
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;
//const if = 23;
*/

/*
//Functions
function logger() {
    console.log("My name is Tekla");
}

logger(); //Calling / running / invoking functions
logger();
logger(); //You can reuse it many times

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
//Functions assignment
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const georgiaDescription = describeCountry('Georgia', 3, 'Tbilisi');
const germanyDescription = describeCountry('Germany', 83, 'Berlin');
const finlandDescription = describeCountry('Finland', 6, 'Helsinki');

console.log(georgiaDescription);
console.log(germanyDescription);
console.log(finlandDescription);
*/

/*
//Function Declarations
const age1 = calcAge1(2006); // Parameter is birthYear, Value is 2006

function calcAge1(birthYear) {
    return 2022 - birthYear;
}

//Functoion Expressions
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(2006);

console.log(age1, age2); //Functions are Values, not Types
*/

/*
//Function Declarations vs. Expressions assignment
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const georgiaPer1 = percentageOfWorld1(3);
const finlandPer1 = percentageOfWorld1(6);
const germanyPer1 = percentageOfWorld1(83);


const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const georgiaPer2 = percentageOfWorld2(3);
const finlandPer2 = percentageOfWorld2(6);
const germanyPer2 = percentageOfWorld2(83);


console.log(georgiaPer1, finlandPer1, germanyPer1);
console.log(georgiaPer2, finlandPer2, germanyPer2);
*/

/*
//Arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(2006);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2070 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2006, 'Tekla'));
console.log(yearsUntilRetirement(1991, 'Jonas'));
*/

/*
//Arrow Functions assignment
const percentageOfWorld3 = population => population / 7900 * 100;

const georgiaPer3 = percentageOfWorld3(3);
const finlandPer3 = percentageOfWorld3(6);
const germanyPer3 = percentageOfWorld3(83);

console.log(georgiaPer3, finlandPer3, germanyPer3);
*/

/*
//Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
//Functions Calling Other Functions assignment
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const describePopulation = (country, population) => {
    const percPopulation = percentageOfWorld1(population);

    return `${country} has ${population} million people, which is about ${percPopulation} of the world.`
}

const desGeorgia = describePopulation('Georgia', 3);
const desFinland = describePopulation('Finland', 6);
const desGermany = describePopulation('Germany', 83);

console.log(desGeorgia);
console.log(desFinland);
console.log(desGermany);
*/

/*
//Reviewing Functions
const calcAge = function (birthYear) {
    return 2070 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(2006, 'Tekla'));
console.log(yearsUntilRetirement(1991, 'Jonas'));
*/

/*
//Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; //literal syntax
console.log(friends);

const years = new Array(1991, 2006, 2022);
console.log(years);

console.log(friends[0]); //Michael
console.log(friends[2]); //Peter

console.log(friends.length); //3
console.log(friends[friends.length - 1]); //Peter

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']; //TypeError: Assignment to constant variable.

const firstName = 'Tekla';
const tekla = [firstName, 'Gogua', 2022 - 2006, 'student', friends];
console.log(tekla);
console.log(tekla.length); //5
*/

/*
//Arrays exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years)); //NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
//Introduction to Arrays assignment
const populations = [3, 4, 83, 1441];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[populations.length - 1])
];
console.log(percentages);
*/

/*
//Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay'); // Returns length of the Array
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4

friends.unshift('John');
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

//Remove elements
friends.pop(); // Removes Last element
const popped = friends.pop(); // Returns Removed element
console.log(popped); // Peter
console.log(friends); // ['John', 'Michael', 'Steven']

friends.shift(); // Removes First element
console.log(friends); // ['Michael', 'Steven']

//Other methods
console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

friends.push(23);
console.log(friends.includes('Steven')); //true
console.log(friends.includes('Bob')); //false
console.log(friends.includes('23')); //false
console.log(friends.includes(23)); //true

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

/*
//Basic Array Operations (Methods) assignment
const neighbours = ['Russia', 'Turkey', 'Armenia', 'Azerbaijan'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Russia')] = 'Russia federation';
console.log(neighbours);
*/

/*
//Introduction to Objects
const tekla = {
    firstName: 'Tekla',
    lastName: 'Gogua',
    age: 2022 - 2006,
    friends: ['Mary', 'Dachi', 'Lizi']
};
*/

/*
//Introduction to Objects assignment
const myCountry = {
    country: 'Georgia',
    capital: 'Tbilisi',
    language: 'Georgian',
    population: 3,
    neighbours: ['Russia', 'Turkey', 'Armenia', 'Azerbaijan'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;

        // this.isIsland = !Boolean(this.neighbours.length);

        return this.isIsland;
    }
};
*/

/*
//Dot vs. Bracket Notation
console.log(tekla.lastName); //Gogua
console.log(tekla['lastName']); //Gogua

const nameKey = 'Name';
console.log(tekla['first' + nameKey]); //Tekla
console.log(tekla['last' + nameKey]); //Gogua

const interestedIn = prompt('What do you want to know about Tekla? Choose between firstName, lastname, age and friends');
// console.log(tekla.interestedIn); //undefined

if (tekla[interestedIn]) {
    console.log(tekla[interestedIn]);
} else {
    console.log("This information doesn't exist: Choose between firstName, lastname, age and friends");
}

tekla.location = 'Tbilisi';
tekla['school'] = 173;
console.log(tekla);

//Dot vs. Bracket Notation Challenge
//  "Tekla has 3 friends, and her best friend is called Mary"
console.log(`${tekla.firstName} has ${tekla.friends.length} friends, and her best friend is called ${tekla.friends[0]}`);
*/

/*
//Dot vs. Bracket Notation assignment
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);
*/

/*
//Object methods
const tekla = {
    firstName: 'Tekla',
    lastName: 'Gogua',
    birthYear: 2006,
    job: 'programmer',
    friends: ['Mary', 'Dachi', 'Lizi'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
        return this.summary;
    }
};

console.log(tekla.calcAge());

console.log(tekla.age);
console.log(tekla.age);
console.log(tekla.age);

// console.log(tekla['calcAge'](2006));

//Object methods challenge
// 'Tekla is a 16-year old programmer, and she has no driver's license'
console.log(tekla.getSummary());
*/

/*
//Object methods assignment
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
*/

/*
//Iteration_ The for Loop
// console.log('Lifting waights repetition 1');
// console.log('Lifting waights repetition 2');
// console.log('Lifting waights repetition 3');
// console.log('Lifting waights repetition 4');
// console.log('Lifting waights repetition 5');
// console.log('Lifting waights repetition 6');
// console.log('Lifting waights repetition 7');
// console.log('Lifting waights repetition 8');
// console.log('Lifting waights repetition 9');
// console.log('Lifting waights repetition 10');

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting waights repetition ${rep}`);
}
*/

//Iteration_ The for Loop asignment
for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting`);
}

