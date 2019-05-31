
var words = ["Jerry", "George", "Kramer", "Newman", "Elaine", "Frank", "Morty"];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}














var guessedLetters = [];
var wins = 0;
var guessesRemaining = 10





var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("currentWord-text");
var guessesRemaining = document.getElementById("guessesRemaining-text");
var chosenLetters = document.getElementById("chosenLetters-text");



document.onkeyup = function(event) {

    
    var userGuess= event.key;
        
        
    }



