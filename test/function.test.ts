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

	it("should support default value", function () {
		function sayHello(name: string = "Guest"): string {
			return `Hello ${name}`;
		}

		expect(sayHello("Sandy")).toBe("Hello Sandy");
		expect(sayHello()).toBe("Hello Guest");
	});

	it("should support rest parameter", function () {
		function sum(...values: number[]): number {
			let total = 0;
			for (const value of values) {
				total += value;
			}
			return total;
		}

		expect(sum(1, 2, 3, 4, 5)).toBe(15);
	});

	it("should support optional parameter", function () {
		function sayHello(firstname: string, lastname?: string): string {
			if (lastname) {
				return `Hello ${firstname} ${lastname}`;
			} else {
				return `Hello ${firstname}`;
			}
		}

		expect(sayHello("Nur", "Sandy")).toBe("Hello Nur Sandy");
		expect(sayHello("Nur")).toBe("Hello Nur");
	});
});
