//calculator.js

function sumOfArray(numberStrings){
	sum = 0;
	for(var i = 0; i < numberStrings.length; i++){
		sum += parseInt(numberStrings[i]);
	}

	return sum;
}

function add (input) {
	if(input === ""){
		return 0;
	}
	numberStrings = input.split(/,|\n/);
	return sumOfArray(numberStrings);

}

module.exports = add;