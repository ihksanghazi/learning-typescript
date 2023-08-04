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
});
