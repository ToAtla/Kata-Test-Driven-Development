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

	negativeNumbers = [];
	for (var i = 0; i < numbers.length; i++) {
		if(numbers[i] < 0){
			negativeNumbers.push(numbers[i]);
		}
	}

	if(negativeNumbers.length > 0){
		errorString = "Negatives not allowed: ";

		for (var i = 0; i < negativeNumbers.length; i++) {
			errorString += negativeNumbers[i] + ",";
		}
		errorString = errorString.slice(0,-1);

		throw errorString;
	}
	return sumOfArray(numbers);

}

module.exports = add;