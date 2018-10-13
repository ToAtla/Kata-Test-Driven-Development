//calculator.js

function add (number) {
	if(number === ""){
		return 0;
	}

	return parseInt(number);
}

module.exports = add;