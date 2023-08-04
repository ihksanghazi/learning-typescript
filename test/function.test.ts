describe("Function", () => {
	it("should support in typescript", function () {
		function sayHello(name: string): string {
			return `Hello ${name}`;
		}

		expect(sayHello("Sandy")).toBe("Hello Sandy");

		function printHello(name: string): void {
			console.info(`Hello ${name}`);
		}

		printHello("Sandy");
	});
});
