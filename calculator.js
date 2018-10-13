//calculator.js

function sumOfArray(numberStrings){
	sum = 0;
	for(var i = 0; i < numberStrings.length; i++){
		sum += parseInt(numberStrings[i]);
	}

	return sum;
}

function getNumbers(input){
	return input.split(/,|\n/);
}

function add (input) {
	if(input === ""){
		return 0;
	}
	numbers = getNumbers(input);
	return sumOfArray(numbers);

}

module.exports = add;