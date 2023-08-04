import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", () => {
	it("should support in typescript", function () {
		const seller: Seller = {
			id: 1,
			name: "Toko ABC",
			nib: "ajbakd",
			npwp: "ahdahahdhks",
		};

		seller.name = "Toko Sandy";
		// seller.nib = "dasdadada"; // error

		console.info(seller);
	});

	it("should support function interface", function () {
		interface AddFunction {
			(value1: number, value2: number): number;
		}

		const Add: AddFunction = (value1: number, value2: number): number => {
			return value1 + value2;
		};

		expect(Add(2, 2)).toBe(4);
	});

	it("should support indexable interface", function () {
		interface StringArray {
			[index: number]: string;
		}

		const names: StringArray = ["Nur", "Sandy", "Ihksan"];

		console.info(names);
	});

	it("should support indexable interface for non number index", function () {
		interface StringDictionary {
			[key: string]: string;
		}

		const dictionary: StringDictionary = {
			name: "Sandy",
			address: "Jaksel",
		};

		expect(dictionary["name"]).toBe("Sandy");
		expect(dictionary["address"]).toBe("Jaksel");
	});

	it("should support extends interface", function () {
		const employee: Employee = {
			id: "1",
			name: "Sandy",
			division: "IT",
		};

		console.info(employee);

		const manager: Manager = {
			id: "2",
			name: "Ihksan",
			division: "IT",
			numberOffEmployees: 10,
		};

		console.info(manager);
	});

	it("should support function in interface", function () {
		const person: Person = {
			name: "Sandy",
			sayHello: function (name: string): string {
				return `Hello ${name}, My Name is ${this.name}`;
			},
		};

		console.info(person.sayHello("Budi"));
	});

	it("should support intersection types", function () {
		interface HasName {
			name: string;
		}
		interface HasId {
			id: string;
		}

		type Domain = HasId & HasName;

		const domain: Domain = {
			id: "1",
			name: "Sandy",
		};

		console.info(domain);
	});

	it("should support type assertions", function () {
		const person: any = {
			name: "Sandy",
			age: 21,
		};

		const person2: Person = person as Person;

		console.info(person2);
	});
});
