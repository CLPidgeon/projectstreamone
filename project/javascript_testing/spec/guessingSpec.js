describe("birdGame", function() {

	describe("If answer is correct", function() {
		it("should have called the alert function saying CORRECT", function() {
			spyOn(window, "alert");
			guessBird("PUFFIN");
			expect(window.alert).toHaveBeenCalledWith("CORRECT! This is a PUFFIN");
		});
	});

	describe("If answer is incorrect", function() {
		it("should have called the alert function if answer is wrong", function() {
			spyOn(window, "alert");
			guessBird();
			expect(window.alert).toHaveBeenCalledWith("INCORRECT! Try again.");
		});
	});
});