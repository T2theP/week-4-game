var words =  [
	"cat",
	"dog",
	"bird",
	"snake",
	"rock",
	"cow",
	"goat",
	"fish",
	"pig",
	"bat",
];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
		't', 'u', 'v', 'w', 'x', 'y', 'z'];

var showLives;

var gameOn = false;
var userGuess; // letter chosen by user


var wins = 0;
var losses = 0;

var winsDiv = document.getElementById("wins");
var lossesDiv = document.getElementById("losses");

winsDiv.innerHTML = wins;
lossesDiv.innerHTML = losses;

//Create Hangman object
var hangmanConstructor = function(){

	return { 
	strikes: 10,
	gameOngoing: true,
	word: words[Math.floor(Math.random() * words.length)],
	lettersGuessed: [],
	availableSpots: [],
	counter: 0,

		setup: function(){

		    wordHolder = document.getElementById('hold');

		    for (var i = 0; i < this.word.length; i++) {
		      ul.setAttribute('id', 'my-word');
		      guess = document.createElement('li');
		      guess.setAttribute('class', 'guess');
		      guess.innerHTML = "_";

		      this.availableSpots.push(guess);
		      wordHolder.appendChild(ul);
		      ul.appendChild(guess);
		    }
		},

		gameStatus: function () {
			showLives = document.getElementById("mylives");
			showLives.innerHTML = "You have " + this.strikes + " lives";
			if (this.strikes == 0) {
				losses++;
				showLives.innerHTML = "Game Over";
				lossesDiv.innerHTML = losses;
				this.gameOver();
			}
			if (this.counter === this.availableSpots.length) {   // This section needs some work
				wins++;
				showLives.innerHTML = "You Win!";
				winsDiv.innerHTML = wins;
				this.gameOver();
			}
		},

		checkGuess: function(userGuess){   // does not start the way I though it should

			if(!this.lettersGuessed.includes(userGuess)){
				if(this.word.toLowerCase().includes(userGuess)){
					this.lettersGuessed.push(userGuess);
					for (var i = 0; i < this.word.length; i++) {
						if (this.word.toLowerCase().charAt(i) === userGuess) {
							this.availableSpots[i].innerHTML = userGuess;
							this.counter += 1;
						} 
					}
					document.getElementById("lettersGuessed").innerHTML = this.lettersGuessed;
				}
				else{
					this.lettersGuessed.push(userGuess);
					document.getElementById("lettersGuessed").innerHTML = this.lettersGuessed;
					this.strikes--;
				}

			}
			else
				console.log("letter already used");

		}, // end check guess

		gameOver: function(){
			// do stuff when game is over   // does not work!

			gameOn = false;
			wordHolder = document.getElementById('hold');
			console.log("parent node: " + wordHolder);
			wordHolder.innerHTML = '';
			ul = document.createElement('ul');
		}

	};
}

var hangman;

document.onkeyup = function(event){

	userGuess = event.key;

	if(alphabet.includes(userGuess)){

		if(!gameOn){
			gameOn = true;
			hangman = hangmanConstructor();
			hangman.setup();
		}

		hangman.checkGuess(userGuess);
		hangman.gameStatus();

	}
	else
		alert("Please enter a letter from the alphabet");
	
}
