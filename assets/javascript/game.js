var wins = 0;
var currentGuess = 12;
var lettersGuess = "";
var words = ["chickadee", "cardinal", "mourning dove", "blue jay", "house sparrow", "starling", "grackle", "woodpecker", "nuthatch", "tufted titmouse", "wren", "robin", "goldfinch", "house finch"];
var currentWord = words[Math.floor(Math.random() * words.length)];

document.onkeyup = function(event) {
	// When user presses key that becomes their choice
	var userChoice = event.key;
	var length

	currentGuess--;

	lettersGuess = lettersGuess + userChoice + " ";
	document.getElementById("word").innerHTML = currentWord;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("numGuess").innerHTML = currentGuess;
	document.getElementById("lettersGuess").innerHTML = lettersGuess;

}


/*	for (var i = 0; i = why.length; i++) {
		document.getElementById("word").innerHTML = why[(word.length) - ((word.length) - i)];
	}*/
