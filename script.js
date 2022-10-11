const submitBtn = document.getElementById('submitBtn');
const guesses = document.getElementById('guesses');
const resetGame = document.getElementById('resetGame');
const inputWrapper = document.getElementById('inputWrapper');

let randomNumber = Math.floor(Math.random() * 10) + 1;

submitBtn.addEventListener('click', displayResult);

function playAgain() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  resetGame.style.display = 'none';
  inputWrapper.style.display = 'block';
  guesses.innerHTML = '';
}

// Skapa funktion för att jämföra input värde med rätt svar värde
function displayResult() {
  let input = document.getElementById('userInput').value;
  const inputField = document.getElementById('userInput');

  if (input == randomNumber) {
    guesses.innerHTML = `Ja, du gissade rätt, din gissning: ${input}`;
    resetGame.style.display = 'block';
    inputWrapper.style.display = 'none';
    inputField.value = '';
  } else if (input > randomNumber) {
    guesses.innerHTML = 'Gissa på ett lägre nummer';
    inputField.value = '';
  } else {
    guesses.innerHTML = 'Gissa på ett högre nummer';
    inputField.value = '';
  }
}
