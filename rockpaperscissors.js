do {
	var word = prompt("Enter rock, paper, or scissors.");
	if (word == "rock") {
		alert("I choose paper. Sorry you lost.");
	}
	else if (word == "paper") {
		alert("I choose scissors. Sorry you lost.");
	}
	else if (word == "scissors") {
		alert("I choose rock. Sorry you lost.");
	}
	else {
		alert("You did not enter rock, paper, or scissors please enter one of those choices.");
	}
	var playAgain = prompt('type the word "stop" to stop playing. If you want to keep playing type anything else.');
	
	
}
while (playAgain != "stop");