var wins;
var losses;
var guessesRemaining;
var words = ["chickadee", "cardinal", "mourning dove", "blue jay", "house sparrow", "starling", "grackle", "woodpecker", "nuthatch", "tufted titmouse", "wren", "robin", "goldfinch", "house finch"];
var currentWord;
var lettersToGuess = [];//or string, idk
var visibleWord = [];//or string
var lettersGuessed = "";

function pickWord() {
	currentWord = words[Math.floor(Math.random() * words.length)];
};
function reset() {
	pickWord();
	guessesRemaining = currentWord.length + 5;
	document.getElementById("numGuess").innerHTML = guessesRemaining;
	lettersGuessed = "";
	document.getElementById("lettersGuess").innerHTML = lettersGuessed;
	lettersToGuess = currentWord.split("");
	visibleWord = lettersToGuess.replace("&nbsp_&nbsp");
	document.getElementById("word").innerHTML = visibleWord;
}