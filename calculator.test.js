//calculator.test.js

const add = require('./calculator');


it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return the argument when input is one number", () => {
	expect(add("3")).toBe(3);
});

it("should return the sum of the arguments when input is two numbers", () => {
	expect(add("3,5")).toBe(8);
});

it("should return the sum of the arguments when input is three numbers", () => {
	expect(add("3,5,2")).toBe(10);
});

it("should return the sum of the arguments when input is many numbers", () => {
	expect(add("3,5,2,1,5,3")).toBe(19);
});

it("should return the sum when numbers are seperated by \\n character", () => {
	expect(add("2\n6\n3")).toBe(11);
});

it("should return the sum when numbers are seperated by \\n and , characters", () => {
	expect(add("1,2\n6,3")).toBe(12);
});