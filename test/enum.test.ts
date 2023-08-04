import { Customer, CustomerType } from "../src/enum";

describe("Enum", () => {
	it("should support in typescript", function () {
		const customer: Customer = {
			id: 1,
			name: "Sandy",
			type: CustomerType.GOLD,
		};

		console.info(customer);
	});
});
