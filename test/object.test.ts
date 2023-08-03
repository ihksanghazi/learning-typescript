describe("Object", () => {
	it("should support in typescript", function () {
		const person: { id: string; name: string } = {
			id: "1",
			name: "Sandy",
		};

		console.info(person);
	});
});
