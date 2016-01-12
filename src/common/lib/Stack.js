export function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
	this.toString = toString;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	var topOfStack = this.dataStore[--this.top];
	this.dataStore.length = this.top;

	return topOfStack;
}

function peek() {
	return this.dataStore[this.top-1];
}

function length() {
	return this.top;
}

function clear() {
	this.top = 0;
	this.dataStore.length = 0;
}

function toString() {
	return this.dataStore;
}
