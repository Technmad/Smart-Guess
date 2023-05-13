'use strict';
// generates random number bet 1-20
let computedNumber = Math.trunc(Math.random() * 20) + 1;
let userScore = 20;
let highscore = 0;

// console.log(computedNumber);
// console.log(document.querySelector('.guess').value);
// console.log(userScore);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);
  //   console.log(typeof userGuess);

  // when there is no input
  if (!userGuess) {
    displayMessage('Enter a number ');
  } else {
    // when guess is correct
    if (userGuess === computedNumber) {
      displayMessage('You Won!');
      document.querySelector('.number').textContent = computedNumber;
      // style changes
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      //score update
      if (userScore > highscore) {
        highscore = userScore;
        document.querySelector('.highscore').textContent = highscore;
      }
    } // when guess is incorrect
    else if (userGuess !== computedNumber) {
      if (userScore > 1) {
        displayMessage(userGuess > computedNumber ? 'Too High!' : 'Too Low!');
        userScore--;
        document.querySelector('.score').textContent = userScore;
      } else {
        displayMessage('You Lost!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#fd5c63';
      }
    }
  }
});
// game reset
document.querySelector('.again').addEventListener('click', function () {
  userScore = 20;
  computedNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = userScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  // style changes
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#fae799';
});
