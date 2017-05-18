var wins;
var losses;
var guessesRemaining;
var words = ["chickadee", "cardinal", "mourning dove", "blue jay", "house sparrow", "starling", "grackle", "woodpecker", "nuthatch", "tufted titmouse", "wren", "robin", "goldfinch", "house finch"];
var currentWord = words[Math.floor(Math.random() * words.length)];

var answerList = (currentWord.split(""));

