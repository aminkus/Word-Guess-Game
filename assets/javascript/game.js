
var words = ["jerry", "george", "kramer", "newman", "elaine", "frank", "morty"];

var guessedLetters = [];
var wins = 0;
var guessesRemaining = 10
var answerArray=[];
var word = words[Math.floor(Math.random() * words.length)];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}
function reset () {
    var wins = 0;
    word;
    guessesRemaining = 10;
    answerArray = 0;
}


var winsText = document.getElementById("wins-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var answerArrayText = document.getElementById("answer-text")




document.onkeyup = function(event) {

    
    var userGuess = event.key.toLowerCase();

    var matchingLetter = word.indexOf(userGuess);
 


if (guessesRemaining > 0) {

  
    if (word.indexOf(userGuess) >= 0) {
        answerArray[matchingLetter] = userGuess;
    }
    else if 
        (word.indexOf(userGuess == -1)) { 
            guessesRemaining--;
        }

    } else {
        alert ("YOU LOSE!")
    }




   
   
        

        winsText.textContent = wins;
        guessesRemainingText.textContent = guessesRemaining;
        guessedLettersText.textContent = guessedLetters;
        answerArrayText.textContent = answerArray;

    };

    



    

