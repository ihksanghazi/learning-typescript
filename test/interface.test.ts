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
});
