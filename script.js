'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let message = document.querySelector('.message');
let score = 20;
let body = document.querySelector('body');
let playerScore = document.querySelector('.score');
let number = document.querySelector('.number');
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No Number! 🚫';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct! 😅';
    body.style.backgroundColor = '#60b347';
    number.textContent = secretNumber;
    number.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? '📈Too high!' : '📉Too low!';
      score--;
      playerScore.textContent = score;
    } else {
      playerScore.textContent = score;
      message.textContent = 'You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  message.textContent = 'Start guessing...';
  playerScore.textContent = score;
  number.textContent = '?';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  number.style.width = '15rem';
});
