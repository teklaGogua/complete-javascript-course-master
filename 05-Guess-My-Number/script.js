'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayText = function (id, message) {
  document.querySelector(id).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayText('.message', '⛔ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayText('.message', '🎉 Correct Number!');
    displayText('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayText('.highscore', highscore);
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayText(
        '.message',
        guess > secretNumber ? '☝️ Too high!' : '👇 Too low!'
      );
      score--;
      displayText('.score', score);
    } else {
      displayText('.message', '🤕 You lost a game!');
      displayText('.score', 0);
      displayText('.number', '💀');

      document.querySelector('body').style.backgroundColor = 'rgb(200, 10, 4)';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

////////////////////////////////////////////////////////
// Coding Challenge 1
/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK �
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayText('.message', 'Start guessing...');
  displayText('.number', '?');
  displayText('.score', score);
  displayText('.guess', '');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
