var Letter = require("./letter_tracker.js");

function Word  (word) {
	this.word = word;
	this.termArray = word.split("");
	this.termLength = this.termArray.length;
	this.letters = [];
	this.completed = false;
	this.initialize = function () {
		for (var i = 0; i < this.termArray.length; i++) {
			var newLetter = new Letter(this.termArray[i]);
			this.letters.push(newLetter);
	    }
	}

	this.display = function () {
		for (var i = 0; i < this.letters.length; i++) {
			var solution = "";
			var blank = "_"
			if (this.letters[i].show === false) {
				solution = solution + blank
				console.log(solution)
			}
			else {
				solution += this.letters[i].letter;
				console.log(solution);
			}
		}
	}

	this.verify = function (guess){
		this.completed = true;

		var goodGuess = false;

		for (var i = 0; i < this.letters.length; i++) {
			if (guess === this.letters[i].letter) {
				this.letters[i].show = true;
				goodGuess = true;
			}

			if(this.letters[i].show === false){
				this.completed = false;
			}
		}

		return goodGuess;
	}	
}


module.exports = Word;

// newWord.initialize();
// newWord.display();
// console.log("____________________________________________");
// newWord.verify("o");
// newWord.display();
// console.log("____________________________________________");
// newWord.verify("b");
// newWord.display();