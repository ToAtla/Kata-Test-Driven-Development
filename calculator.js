//calculator.js

function add (input) {
	if(input === ""){
		return 0;
	}else if (!input.includes(',')){
		return parseInt(input);
	}else{
		numberStrings = input.split(',');
		return parseInt(numberStrings[0]) + parseInt(numberStrings[1]);
	}

}

module.exports = add;