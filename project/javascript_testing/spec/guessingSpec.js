describe("birdGame", function() {

	//Checks various ways of typing Puffin are returned as correct
	describe("If answer is correct in lowercase", function() {
		it("should have called the alert function saying 'correct' ", function() {
			expect(checkBird("puffin")).toBe(true);
		});
	});

	describe("If answer is correct in uppercase", function() {
		it("should have called the alert function saying 'correct' ", function() {
			expect(checkBird("PUFFIN")).toBe(true);
		});
	});

	describe("If answer is correct in mixed cases", function() {
		it("should have called the alert function saying 'correct' ", function() {
			expect(checkBird("PuffIN")).toBe(true);
		});
	});

	//Checks returns incorrect if not spelt correctly
	describe("If answer is incorrect", function() {
		it("should have called the alert function saying 'incorrect' ", function() {
			expect(checkBird("puffing")).toBe(false);
		});
	});

});