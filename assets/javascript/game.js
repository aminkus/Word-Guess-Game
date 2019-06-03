//create array of words to be guessed by user
var words = ["jerry", "george", "elaine", "frank", "morty"];
//create variables to store wins, losses, guessed letters, and answer
var guessedLetters = [];
var wins = 0;
var guessesRemaining = 10
var answerArray = [];

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




document.onkeyup = function (event) {

    //create event listener
    var userGuess = event.key.toLowerCase();

    var isLetterInWord = false;


    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess) {
            answerArray[j] = userGuess;
            isLetterInWord = true;
        }
    }
    if (isLetterInWord == false) {

        guessedLetters.push(userGuess);
        guessesRemaining--;
    }
    if (answerArray.join("") === word) {
        wins++
    }

    

    winsText.textContent = wins;
    guessesRemainingText.textContent = guessesRemaining;
    guessedLettersText.textContent = guessedLetters;
    answerArrayText.textContent = answerArray;

};







