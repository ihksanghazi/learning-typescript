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

	it("should support function overloading", function () {
		function callMe(value: number): number;
		function callMe(value: string): string;
		function callMe(value: any): any {
			if (typeof value === "string") {
				return value.toUpperCase();
			} else if (typeof value === "number") {
				return value * 10;
			}
		}

		expect(callMe(10)).toBe(100);
		expect(callMe("sandy")).toBe("SANDY");
	});

	it("should support function as parameter", function () {
		function sayHello(name: string, filter: (name: string) => string): string {
			return `Hello ${filter(name)}`;
		}

		function toUpper(name: string): string {
			return name.toUpperCase();
		}

		expect(sayHello("sandy", toUpper)).toBe("Hello SANDY");
		expect(
			sayHello("sandy", function (name: string): string {
				return name.toUpperCase();
			})
		).toBe("Hello SANDY");
		expect(sayHello("sandy", (name: string) => name.toUpperCase())).toBe(
			"Hello SANDY"
		);
	});
});
