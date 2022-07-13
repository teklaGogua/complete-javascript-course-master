'use strict';

//////////////////////////////////////
// Scoping in Practice
/*
function clacAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear > 1996) {
      var millenial = false;
      // Creating New variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a gen-z, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Tekla';
clacAge(2006);
// console.log(age);
// printAge();
*/

/*
//////////////////////////////////////
// Hoisting and TDZ in Practise

// Variables
console.log(me); // Undefined
// console.log(job); // Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); // Uncaught ReferenceError: Cannot access 'year' before initialization

var me = 'Tekla';
let job = 'programmer';
const year = 2006;

// Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow); // undefined
// console.log(addArrow(2, 3)); // Uncaught TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) delateShoppingCart();

var numProducts = 10;

function delateShoppingCart() {
  console.log('All products delated!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

////////////////////////////////////////
// The this Keyword in Practice
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  // console.log(this);
};

calcAge(2006);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  // console.log(this);
};

calcAgeArrow(2006);

const tekla = {
  year: 2006,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
tekla.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = tekla.calcAge;
matilda.calcAge();

const f = tekla.calcAge;
f();
