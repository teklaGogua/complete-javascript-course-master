'use strict';

// Starting conditions
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayText = function (attribut, message) {
  document.querySelector(attribut).textContent = message;
};

// Buttom 'Check' functionality
document.querySelector('.check').addEventListener('click', function () {
  // 1. Generate random Secret Number
  const guess = Number(document.querySelector('.guess').value);

  // 2. Check guess's value
  if (!guess) {
    // When there is no input
    displayText('.message', '⛔ No number!');
  } else if (guess === secretNumber) {
    // When player wins
    displayText('.message', '🎉 Correct Number!');
    displayText('.number', secretNumber);
    displayText('#title', 'You won a game!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('#title').style.fontSize = '5rem';

    if (score > highscore) {
      highscore = score;
      displayText('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    //When guess is wrong
    if (score > 1) {
      displayText(
        '.message',
        guess > secretNumber ? '☝️ Too high!' : '👇 Too low!'
      );
      score--;
      displayText('.score', score);
    } else {
      // when play loses a game
      displayText('.message', '🤕 Try again...');
      displayText('.score', 0);
      displayText('.number', '💀');
      displayText('#title', 'You lost a game!');

      document.querySelector('body').style.backgroundColor = 'rgb(200, 10, 4)';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('#title').style.fontSize = '5rem';
    }
  }
});

// Buttom 'again' functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayText('.message', 'Start guessing...');
  displayText('.number', '?');
  displayText('.score', score);
  displayText('#title', 'Guess My Number!');

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('#title').style.fontSize = '4rem';
});
