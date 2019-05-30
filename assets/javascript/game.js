
currentWord = ["Jerry", "George", "Kramer", "Newman", "Elaine", ];
guessedLetters = [];
var wins = 0;
var guessesRemaining = currentWord[i].length;





var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("currentWord-text");
var guessesRemaining = document.getElementById("guessesRemaining-text");
var chosenLetters = document.getElementById("chosenLetters-text");



document.onkeyup = function(event) {

var userGuess = event.key;

var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
console.log (computerGuess);

