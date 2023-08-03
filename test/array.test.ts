describe("Array", () => {
	it("should same with js", function () {
		const name: string[] = ["Sandy", "Azhi"];
		const values: number[] = [1, 2, 3];

		console.info(name);
		console.info(values);
	});
	it("should support readonly array", function () {
		const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
		console.info(hobbies);

		// hobbies[0] = "Play Game"; gak bisa
	});
	it("should support tuple", function () {
		const person: readonly [string, string, number] = ["Sandy", "Ihksan", 21];
		console.info(person);
	});
});
