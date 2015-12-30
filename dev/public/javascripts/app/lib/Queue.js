export function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.dequeuePriority = dequeuePriority;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.toStringPriority = toStringPriority;
	this.count = count;
	this.empty = empty;
}

function enqueue(val) {
	this.dataStore.push(val);
}

function dequeue() {
	return this.dataStore.shift();
}

function dequeuePriority() {
	var entry = 0;
	for (let i =0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i].code < this.dataStore[entry].code) {
			entry = i;
		}
	}

	return this.dataStore.splice(entry, 1);
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length - 1];
}

function toString() {
	let str = '';
	for (let i = 0; i < this.dataStore.length; i++) {
		str += this.dataStore[i] + '\n';
	}
	return str;
}

function toStringPriority() {
	let str = '';
	for (let i = 0; i < this.dataStore.length; i++) {
		str += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n';
	}

	return str;
}

function count() {
	return this.dataStore.length;
}

function empty() {
	return this.dataStore.length === 0;
}
