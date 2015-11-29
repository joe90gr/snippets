export function iteratorForEach() {
	var nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

	function squareNum(num, index) {
		//console.log(num, ' : ', num * num, ' : ', index);
	}

	nums.forEach(squareNum);

	return nums;
}

export function iteratorEvery() {
	var nums = [ 2, 4, 6, 8, 10 ];
	var even = nums.every(isEven);
	var result;

	if (even) {
		result = 'all numbers are even';
	} else {
		result = 'not all numbers are even';
	}

	function isEven(num) {
		return num % 2 == 0;
	}

	return result;
}

export function iteratorSome() {
	var nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	var someEven = nums.some(isEven);
	var result;

	if (someEven) {
		result = 'some numbers are even';
	} else {
		result = 'no numbers are even';
	}

	function isEven(num) {
		return num % 2 == 0;
	}

	return result;
}

export function iteratorReduce(printHTML) {
	var nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	var sum = nums.reduce(add);

	function add(runningTotal, currentTotal) {
		printHTML(runningTotal + currentTotal);
		return runningTotal + currentTotal;
	}

	return sum;
}
