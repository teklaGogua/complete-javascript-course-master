/*
//Values and Variables assignment
const myCountry = 'Georgia';
const myContinent = 'Europe/Asia';
let myPopulation = 3;

console.log(myCountry, myContinent, myPopulation);
*/

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

/*
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
*/

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

/*
//Strings and template literals assignment
const descriptionNew = `${myCountry} is in ${myContinent}, and it's ${myPopulation} million people speak ${myLanguage}`;
console.log(descriptionNew); //Georgia is in Europe/Asia, and it's 4 million people speak Georgian
*/

/*
//Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years...`);
}

const birthYear = 2006;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
//Taking Decisions: if / else Statements assignment
if (myPopulation > 33) {
    console.log(`${myCountry}'s population is above average`);
} else {
    const beforeAverage = 33 - myPopulation;
    console.log(`${myCountry}'s population is ${beforeAverage} million before average`);
}
*/

/*
//Type Conversion
const inputYear = '2006';
console.log(inputYear + 18); //200618
console.log(Number(inputYear) + 18); //2004

console.log(Number('Jonas')); //NaN
console.log(typeof NaN); //number

console.log(String(23), 23);

//Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old'); //This two are same thanks to type coercion

console.log('23' - '10' - 3); // 10
console.log('23' + '10' + 3); // '23103'

console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5
console.log('23' > '18'); // true

let n = '1' + 1; //'11'
n = n - 1; // 10
console.log(n);
*/

/*
//Type Conversion and Coercion assignment
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
*/

/*
//Truthy and Falsy Values
//There are 5 false values: 0, '', undefined, null, NaN
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 100;
if (money) {
    console.log("Dont't spent it all 😊");
} else {
    console.log('You should get a job!');
}

let height = 162; //0 is bug in this aplication
if (height) {
    console.log('Yay! height is defined');
} else {
    console.log('Height is UNDEFINED ☹️');
}
*/

/*
//Equality Operators: == vs. === assignment
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/

/*
//Logical Operators
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// };

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
};
*/

/*
//Logical Operators assignment
if (myLanguage === 'English' && myPopulation < 50 && !isIsland) {
    console.log(`You should live in ${myCountry} :)`);
} else {
    console.log(`${myCountry} does not meet your criteria :(`);
}
*/

/*
//The switch statement
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
*/

//The switch statement assignment
const language = myLanguage;

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}