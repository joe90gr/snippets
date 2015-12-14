export function HashMap() {
	this.dataStore = [];

	this.add = add;
	this.remove = remove;
	this.toString = toString;
	this.clone = clone;
	this.containsKey = containsKey;
	this.containsValue = containsValue;
	this.get = get;
	this.put = put;
	this.entrySet = entrySet;
	this.clear = clear;
	this.isEmpty = isEmpty;
	this.size = size;
}

function add(key, val) {
	var row = {};
	row[key] = val;
	this.dataStore.push(row);
}

function remove(key) {
	var i;

	for (i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i][key]) {
			delete this.dataStore[i][key];
			this.dataStore.splice(i, 1);
		}
	}
}

function clone() {
	//javascript clone menthod;
	return this.dataStore.slice(0);
}

function containsKey(key) {
	var i;

	for (i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i][key]) {
			return true;
		}
	}

	return false;
}

function containsValue(val) {
	var i, key;

	for (i = 0; i < this.dataStore.length; i++) {
		for (key in this.dataStore[i]) {
			if (this.dataStore[i][key] == val) {
				return true;
			}
		}
	}

	return false;
}

function get(key) {
	var i;

	for (i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i][key]) {
			return this.dataStore[i][key];
		}
	}

	return null;
}

function put(key, val) {
	var i;

	for (i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i][key]) {
			this.dataStore[i][key] = val;
		}
	}

	return null;
}

function entrySet() {
	return this.dataStore;
}

function clear() {
	this.dataStore = [];
}

function isEmpty() {
	return this.dataStore.length === 0;
}

function size() {
	return this.dataStore.length;
}
