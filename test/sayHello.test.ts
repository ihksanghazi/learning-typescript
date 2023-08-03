import { sayHello } from "../src/sayhello";

describe("sayHello", () => {
	it("should return hello Sandy", function () {
		expect(sayHello("sandy")).toBe("hello sandy");
	});
});
