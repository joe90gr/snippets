import { HashMap } from '../lib/HashMap2.js';

export function hashMaps(printHTML) {
	var hashTable = new HashMap();

	hashTable.put('Joe');
	hashTable.put('Simon');
	hashTable.put('Thmon');
	hashTable.put('Chris');
	hashTable.put('Bharathy');
	hashTable.put('Emanuele');
	hashTable.put('Murali');
	hashTable.put('Clayton');
	hashTable.put('Raymond');
	hashTable.put('Sai');
	hashTable.put('Leila');

	hashTable.showDistro(printHTML);

	return this;
}

export function hashMapIntegers(printHTML) {
	var hashTable = new HashMap();
	var numberOfStudents = 11;
	var arrSize = 97;
	var idLength = 9;
	var students = new Array(numberOfStudents);

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function generateStudentData(arr) {
		for (let i = 0; i < arr.length; i++) {
			let num = '';
			for (let j = 0; j <= 9; j++) {
				num += Math.floor(Math.random() * 10);
			}
			num += getRandomInt(50, 100);
			arr[i] = num;
		}
	}

	generateStudentData(students);
	printHTML('Student data: \n');

	for (let i = 0; i < students.length; i++) {
		printHTML(students[i].substring(0, 8) + ' ' + students[i].substring(9));
	}

	printHTML('\n\nData distribution: \n');

	for (let i = 0; i < students.length; i++) {
		hashTable.put(students[i]);
	}

	hashTable.showDistro(printHTML);

	return this;
}
