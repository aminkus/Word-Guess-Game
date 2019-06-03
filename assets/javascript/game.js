//create array of words to be guessed by user
var words = ["jerry"];
//create variables to store wins, losses, guessed letters, and answer
var guessedLetters = [];
var wins = 0;
var guessesRemaining = 10
var answerArray=[];

//create loop that puts an underscore in place of each letter 
var word = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}


//creates reference point for display to HTML
var winsText = document.getElementById("wins-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var answerArrayText = document.getElementById("answer-text")




document.onkeyup = function(event) {

    //create event listener
    var userGuess = event.key.toLowerCase();
    


for(var i = 0; i < word.length; i++) {
    if (word[i] === userGuess) {
        answerArray[i] = userGuess;
    }
}
     if 
        (word.indexOf(userGuess) == -1) { 
            guessesRemaining--;
        }
    




  



   
   
        

        winsText.textContent = wins;
        guessesRemainingText.textContent = guessesRemaining;
        guessedLettersText.textContent = guessedLetters;
        answerArrayText.textContent = answerArray;

    };

    



    

