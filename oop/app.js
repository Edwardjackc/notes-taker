const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');
const game1 = new Hangman('Cat', 2); 

puzzleEl.textContent = game1.puzzleEl
guessesEl.textContent = game1.statusMessage 

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle
  guessesEl.textContent = game1.getStatusMessage
})