//Values and Variables assignment
const myCountry = 'Georgia';
const myContinent = 'Europe/Asia';
let myPopulation = 3;

console.log(myCountry, myContinent, myPopulation);

/*
//Data types
let jsIsFun = true;
console.log(jsIsFun); //true

console.log(typeof true); //boolean
console.log(typeof jsIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof 'true'); //string

jsIsFun = 'Yes';
console.log(jsIsFun); //Yes

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 2022;
console.log(year); //2022
console.log(typeof year); //Number

console.log(typeof null); //It return object, but null's type is null 
*/

//Data types asssignment
const isIsland = false;
let myLanguage;

console.log(typeof isIsland); //boolean
console.log(typeof myPopulation); //number
console.log(typeof myCountry); //string
console.log(typeof myLanguage); //undefined

//let, const and var assignment
myLanguage = 'Georgian';

console.log(myLanguage);
console.log(typeof myLanguage);

//Basic operators assignment
let halfPopulation = myPopulation / 2;
console.log(halfPopulation); //1,5

myPopulation++;
console.log(myPopulation); //4

let finlandPopulation = 4;
console.log(myPopulation > finlandPopulation); //false

let averagePopulation = 33;
console.log(myPopulation < averagePopulation); //true

const description = myCountry + ' is in ' + myContinent + ', and its ' + myPopulation + ' million people speak ' + myLanguage;
console.log(description); //Georgia is in Europe/Asia, and its 4 million people speak Georgian

/*
//Strings and template literals
const firstName = 'Tekla';
const job = 'programmer';
const birthYear = 2006;
const year = 2022;

const tekla = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(tekla);

const teklaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(teklaNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines'); //Before ES6

console.log(`String
multiple
lines`); //with multiline string we use template literals `` 
*/

//Strings and template literals assignment
const descriptionNew = `${myCountry} is in ${myContinent}, and it's ${myPopulation} million people speak ${myLanguage}`;
console.log(descriptionNew); //Georgia is in Europe/Asia, and it's 4 million people speak Georgian
