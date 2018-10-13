//calculator.test.js

const add = require('./calculator');


it("should return zero on an empty string", () => {
	expect(add()).toBe(0);
});
