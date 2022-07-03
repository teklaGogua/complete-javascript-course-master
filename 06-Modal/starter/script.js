'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsShowModel = document.querySelectorAll('.show-modal');
console.log(btnsShowModel);

for (let i = 0; i < btnsShowModel.length; i++)
  console.log(btnsShowModel[i].textContent);
