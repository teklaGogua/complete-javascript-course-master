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
