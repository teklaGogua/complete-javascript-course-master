'use strict';

/*
Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

GOOD LUCK �
*/

// 1) Understanding the problem
// - How to access array's each components?
// - How to give them an ordered numbers?
// - How connect this two piece of information in one string?

// 2) breaking up into sub-problems
// - Create a string with 3 dots
// - Access Array's components using for loop
// - Define counter outside for loop and increase it in for loop
// - connect this information in one string

const printForecast = function (arr) {
  let counter = 1;
  let newString = '... ';
  for (let i = 0; i < arr.length; i++) {
    newString += `${arr[i]}ºC in ${counter} days ... `;
    counter++;
  }
  return newString;
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));
