
currentWord = ["Jerry", "George", "Kramer", "Newman", "Elaine", "Frank", "Morty"];
var guessedLetters = [];
var wins = 0;
var guessesRemaining = 10





var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("currentWord-text");
var guessesRemaining = document.getElementById("guessesRemaining-text");
var chosenLetters = document.getElementById("chosenLetters-text");



document.onkeyup = function(event) {

    var userGuess = event.key;

    var random = currentWord[Math.floor(Math.random() * currentWord.length)];

    if (userGuess === random.split(" ") {
        
        
    }




}
