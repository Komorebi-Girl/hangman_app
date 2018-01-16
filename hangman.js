var Word = require("./word_tracker.js");
var inquirer = require("inquirer");
var options = ['cat', 'tree', 'swing', 'around', 'scientist', 'nighttime', 'adventure'];
var newWord;

function startGame () {
	var count = 0; 
 	var choice = options[Math.floor(Math.random() * 7)];
	newWord = new Word(choice);
	newWord.initialize();
	newWord.display();
}

function playAgain () {
	inquirer.prompt([
		    {
		      type: "confirm",
		      message: "What you like to play again?",
		      name: "replay"
		    },

		  ])
		  .then(function(answer) {
		    if (answer.replay === true) {

		    	startGame();
		    	runGame();
		    }
		   
		   else {
		   		return;
		   }



		  });

}

var count = 0;
var tries = 7;

function runGame () {
	
	if (count < 7 ) {
		inquirer.prompt([
		    {
		      type: "input",
		      message: "What letter would you like to guess?",
		      name: "guess"
		    },

		  ])
		  .then(function(answer) {
		    var goodGuess = newWord.verify(answer.guess);

		    newWord.display();

		    if (newWord.completed === true) {
		    	console.log("You've won!");
		    	playAgain();
		    }

		    else {
		    	if (goodGuess === false) {
		    		count++;
		    		tries--;
		    		console.log("You have " + tries +" tries left.")

	        		}
		    	runGame();		
		    }
		   		    
		  });
	}

	else {
 
			console.log("You've run out of tries.");
			playAgain();
		}


		
	}



startGame();
runGame();



