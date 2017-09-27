function guessBird(){

	var guessOne = document.getElementById("userGuess");
	
	guess = guessOne.value;

	if(guess.toUpperCase() === "PUFFIN") {
		alert("CORRECT! This is a PUFFIN");
		document.getElementById("userGuess").value=" ";
	} else {
		alert("INCORRECT! Try again.");
		document.getElementById("userGuess").value = " ";
		window.location.reload();
	};

};

function clearBox() {
 	document.getElementById("userGuess").value = " ";
};

