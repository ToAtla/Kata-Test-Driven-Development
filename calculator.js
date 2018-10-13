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

function getNegatives(numbers){
	negativeNumbers = [];
	for (var i = 0; i < numbers.length; i++) {
		if(numbers[i] < 0){
			negativeNumbers.push(numbers[i]);
		}
	}
	return negativeNumbers;
}

function checkAndThrowNegatives(negativeNumbers){
	if(negativeNumbers.length > 0){
		errorString = "Negatives not allowed: ";

		for (var i = 0; i < negativeNumbers.length; i++) {
			errorString += negativeNumbers[i] + ",";
		}
		errorString = errorString.slice(0,-1);

		throw errorString;
	}
}

function add (input) {
	if(input === ""){
		return 0;
	}
	numbers = getNumbers(input);

	checkAndThrowNegatives(getNegatives(numbers));

	i = numbers.length;
	while(i--){
		if(numbers[i] > 1000){
			numbers.splice(i,1);
		}
	}
	return sumOfArray(numbers);

}

module.exports = add;