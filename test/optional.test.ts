describe("Optional Parameter", () => {
	it("should support null and undefined", function () {
		function sayHello(name?: string | null) {
			if (name) {
				console.info(`Hello ${name}`);
			} else {
				console.info(`Hello`);
			}
		}

		sayHello("Sandy");
		const name: string | undefined = undefined;
		sayHello(name);
		sayHello(null);
	});
});
