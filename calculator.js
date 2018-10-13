//calculator.js

function add (input) {
	if(input === ""){
		return 0;
	}else if (!input.includes(',')){
		return parseInt(input);
	}else{
		numberStrings = input.split(',');
		if(numberStrings.length === 2)
			return parseInt(numberStrings[0]) + parseInt(numberStrings[1]);
		else
			return parseInt(numberStrings[0]) + parseInt(numberStrings[1]) + parseInt(numberStrings[2]);
	}

}

module.exports = add;