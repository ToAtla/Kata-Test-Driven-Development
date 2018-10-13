//calculator.js

function add (input) {
	if(input === ""){
		return 0;
	}
	numberStrings = input.split(',');
	sum = 0;
	for(var i = 0; i < numberStrings.length; i++){
		sum += parseInt(numberStrings[i]);
	}

	return sum;

/*
	else if (!input.includes(',')){
		return parseInt(input);
	}else{
		numberStrings = input.split(',');
		if(numberStrings.length === 2)
			return parseInt(numberStrings[0]) + parseInt(numberStrings[1]);
		else
			return parseInt(numberStrings[0]) + parseInt(numberStrings[1]) + parseInt(numberStrings[2]);
	}
	*/

}

module.exports = add;