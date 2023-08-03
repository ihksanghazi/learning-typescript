describe("Object", () => {
	it("should support in typescript", function () {
		const person: { id: string; name: string; hobbies?: string[] } = {
			id: "1",
			name: "Sandy",
		};

		console.info(person);
	});
});
