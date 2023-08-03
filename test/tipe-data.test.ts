describe("data type", () => {
	it("should must be declare", function () {
		let name: string = "Nursandy Ihksan";
		let balance: number = 100;
		let isVIP: boolean = true;

		console.info(name);
		console.info(balance);
		console.info(isVIP);

		// name = 100; error
		// balance = "sandy"; error
		// isVIP = 100; error
	});
});
