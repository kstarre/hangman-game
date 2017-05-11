var wins = 0;
var currentGuess = 12;
var lettersGuess = "";
var words = ["chickadee", "cardinal", "mourning dove", "blue jay", "house sparrow", "starling", "grackle", "woodpecker", "nuthatch", "tufted titmouse", "wren", "robin", "goldfinch", "house finch"];
var currentWord = words[Math.floor(Math.random() * words.length)];
var wordLog = "";
var answerList = (currentWord.split(""));
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

window.onload = function(event) {

}

document.onkeyup = function(event) {
	// When user presses key that becomes their choice
	var userChoice = event.key;
	var display = "";
	
	currentGuess--;
	if (answerList.indexOf(userChoice) > -1) {
		document.getElementById("word").innerHTML = userChoice;
	}
	else if ()
}
/*	currentGuess--;*/

/*	lettersGuess = lettersGuess + userChoice + " ";*/
/*	document.getElementById("word").innerHTML = currentWord;*/
/*	document.getElementById("wins").innerHTML = wins;*/
/*	document.getElementById("numGuess").innerHTML = currentGuess;
	document.getElementById("lettersGuess").innerHTML = lettersGuess;

}*/


/*	for (var i = 0; i = why.length; i++) {
		document.getElementById("word").innerHTML = why[(word.length) - ((word.length) - i)];
	}*/
