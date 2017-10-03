function guessBird(){

	var guess = document.getElementById("userGuess").value;	

	if(guess.toUpperCase() === "PUFFIN") {
		alert("CORRECT! This is a Puffin");
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
