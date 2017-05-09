export function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];

	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.previous = previous;
	this.next = next;
	this.hasPrevious = hasPrevious;
	this.hasNext = hasNext;
	this.length = length;
	this.currentPosition = currentPosition;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

function append(element) {
	this.dataStore[this.listSize++] = element;
}

function remove(element) {
	let foundAt = this.find(element);

	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;

		return true;
	}

	return false;
}

function find(element) {
	for (let i = 0; i< this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return i;
		}
	}

	return -1;
}

function toString() {
	return this.dataStore + '';
}

function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.position = 0;
}

function insert(element, after) {
	let insertPos = this.find(after);

	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;

		return true;
	}

	return false;
}

function previous() {
	return this.dataStore[--this.pos];
}

function next() {
	return this.dataStore[this.pos++];
}

function hasNext() {
	return !(this.pos > this.listSize - 1);
}

function hasPrevious() {
	return !(this.pos <= 0);
}

function length() {
	return this.dataStore.length;
}

function currentPosition() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize -1;
}

function contains(element) {
	for (let i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return true;
		}
	}

	return false;
}

