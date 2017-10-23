function checkBird(guess) {
	//Turns user input to upper case and checks it matches PUFFIN
	return guess.toUpperCase() === "PUFFIN";
}

function guessBird(){
	//Retrieving user input and storing as variable
	var guess = document.getElementById("userGuess").value;	
	//Feeds value to checkBird function and alerts if correct or incorrect
	if (checkBird(guess)) {
		alert("CORRECT! This is a Puffin");		
	} else {
		alert("INCORRECT! Try again.");
	};
	document.getElementById("userGuess").value ="";
};

function clearBox() {
	//Clears the user input box after guess
 	document.getElementById("userGuess").value ="";
};

