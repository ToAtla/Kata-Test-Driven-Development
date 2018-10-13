//calculator.test.js

const add = require('./calculator');


it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should the argument when input is one number", () => {
	expect(add("3")).toBe(3);
});
