describe("If Statement", () => {
	it("should support in typescript", function () {
		const examValue = 90;
		if (examValue > 80) {
			console.info("Good");
		} else if (examValue > 60) {
			console.info("Not Bad");
		} else {
			console.info("Try Again");
		}
	});

	it("should support ternary operator", function () {
		const value: number = 80;
		const say: string = value >= 75 ? "Congratulation" : "Try Again";

		expect(say).toBe("Congratulation");
	});
});
