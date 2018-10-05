window.onload = function() {
	var userGuess;
	var words = ["TUPAC", "BIGGIE", "EAZYE", "ICECUBE", "SNOOPDOGG"];
	var word = [];
	var position = [];
	var guessedLetters = [];
	var guesses;
	var wins;
    
wins = 0;
    document.querySelector(".wins").innerHTML = wins;

guesses = 8;
	document.querySelector(".guesses").innerHTML = guesses;

var num = 0;
    newWord(num);


    //New Word Function, clears position and guesses and sets position/display of word
    function newWord(num) {
        guesses = 8;
            document.querySelector(".guesses").innerHTML = guesses;
            position = [];
            guessedLetters = [];
            document.querySelector(".letters-guessed").innerHTML = guessedLetters.join(" ");
            word = words[num].split("");
            for (var i=0; i<word.length; i++) {
                position.push("_");
            }
            document.querySelector(".position").innerHTML = position.join(" ");

        document.onkeyup = function(event) {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                userGuess = String.fromCharCode(event.keyCode).toUpperCase(); 
                checkGuess(userGuess);
            } 
            else {
                document.querySelector(".error").innerHTML = "Press a letter, homie";
            }
        }
    }

    function checkGuess(userGuess) {
		// Check to see if letter matches any letters in word
			for (var i=0; i<guessedLetters.length; i++) {
				if (guessedLetters[i] == userGuess) {
					document.querySelector(".error").innerHTML = "U already guessed that";
					break;
				}
			}
			for (var i=0; i<position.length; i++) {
				if (position[i] == userGuess) {
					document.querySelector(".error").innerHTML = "U already guessed that";
					break;
				}
			}
			addAnswer(userGuess);
    }

    function addAnswer(userGuess) {
		// Check to see if letter matches any letters in word
		var correct = 0;
		for (var i=0; i<word.length; i++) {
			if (word[i] == userGuess) {
				position[i] = word[i];
				correct++;
			}
		}
		if (correct == 0) {
			// If no replacements reduce guesses
			guesses--;
			// Display guesses
			document.querySelector(".guesses").innerHTML = guesses;
			// Push and display guessed letters
			guessedLetters.push(userGuess);
			document.querySelector(".letters-guessed").innerHTML = guessedLetters.join(" ");
		} else {
			// Redisplay positions
			document.querySelector(".position").innerHTML = position.join(" ");
		}
	}
}