
var words = ["jerry", "george", "kramer", "newman", "elaine", "frank", "morty"];

var guessedLetters = [];
var wins = 0;
var guessesRemaining = 10
var answerArray=[];
var word = words[Math.floor(Math.random() * words.length)];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}



var winsText = document.getElementById("wins-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var answerArrayText = document.getElementById("answer-text")




document.onkeyup = function(event) {

    
    var userGuess = event.key.toLowerCase();

    var matchingLetter = word.indexOf(userGuess);
 


    if (word.indexOf(userGuess) >= 0) {
        answerArray[matchingLetter] = userGuess;
    }
  
   
   
        

        winsText.textContent = wins;
        guessesRemainingText.textContent = guessesRemaining;
        guessedLettersText.textContent = guessedLetters;
        answerArrayText.textContent = answerArray.join(" ");

    };

    



    

