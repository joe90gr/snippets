export function CArray(numElements) {
	this.dataStore = [];
	this.position = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
}

function setData() {
	var i;

	for (i = 0; i < this.numElements; ++i) {
		this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
	}
}

function clear() {
	var i;

	for (i = 0; i < this.dataStore.length; ++i) {
		this.dataStore[i] = 0;
	}
}

function insert(element) {
	this.dataStore[this.pos++] = element;
}

function toString() {
	var retstr = '', i;

	for (i = 0; i < this.dataStore.length; ++i) {
		retstr += this.dataStore[i] + ' ';
		if (i > 0 && i % 10 == 0) {
			retstr += '\n';
		}
	}

	return retstr;
}

function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
