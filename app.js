// Game values
let min = 1,
    max = 10,
    winningNum = 2
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-value'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent =  min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  if(guess === winningNum){
    // disable input
    guessInput.disabled = true;
    // change border to green
    guessInput.style.borderColor = 'green';
    // winning message
    setMessage(`${winningNum} is correct, you win!`, 'green');
  } else {

  }

});

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
} 
