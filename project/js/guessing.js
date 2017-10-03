function checkBird(guess) {

	return guess.toUpperCase() === "PUFFIN";
}

function guessBird(){

	var guess = document.getElementById("userGuess").value;	

	if (checkBird(guess)) {
		alert("CORRECT! This is a Puffin");
		
	} else {
		alert("INCORRECT! Try again.");
	};

	document.getElementById("userGuess").value ="";

};

function clearBox() {
 	document.getElementById("userGuess").value ="";
};
