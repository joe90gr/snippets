import { CArray } from '../lib/CArray';

export function testBedAlgorithm(printHTML) {
	var numElements = 100;
	var myNums = new CArray(numElements);

	myNums.setData();
	printHTML(myNums.toString());
}

export function bubbleSort(printHTML) {
	var numElements = 10;
	var myNums = new CArray(numElements);

	myNums.setData();
	printHTML('--------Unsorted--------');
	printHTML(myNums.toString());

	printHTML('---------Sorted---------');
	myNums.bubbleSort();

	printHTML(myNums.toString());
}

export function graphAlgorithm(printHTML) {

}
