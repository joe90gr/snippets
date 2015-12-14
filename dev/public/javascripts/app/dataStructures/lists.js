import { List } from '../lib/List.js';
import { HashMap } from '../lib/Hashmap.js';

//ADT Lists
export function adtListAppendRemove(printHTML) {
	var names = new List();
	names.append('Joe');
	names.append('Simon');
	names.append('Chris');
	names.append('Bharathy');
	names.append('Emanuele');
	names.append('Murali');
	names.append('Sai');
	names.append('Leila');

	printHTML(names.toString());

	names.remove('Chris');

	printHTML(names.toString());

	return names.toString();
}

export function adtListNextPrevious(printHTML) {
	var names = new List();
	names.append('Joe');
	names.append('Simon');
	names.append('Chris');
	names.append('Bharathy');
	names.append('Emanuele');
	names.append('Murali');
	names.append('Sai');
	names.append('Leila');

	names.front();
	printHTML(names.getElement());//Joe

	printHTML(names.next());//Joe
	printHTML(names.next()); //Simon
	printHTML(names.next()); //Chris

	printHTML(names.previous()); //Chris
	printHTML(names.previous()); //Simon

	return names.toString();
}

export function adtListIterateFoward(printHTML) {
	var names = new List();
	names.append('Joe');
	names.append('Simon');
	names.append('Chris');
	names.append('Bharathy');
	names.append('Emanuele');
	names.append('Murali');
	names.append('Sai');
	names.append('Leila');

	for (names.front(); names.hasNext();) {
		printHTML(names.next());
	}

	return names.toString();
}

export function adtListIterateBackward(printHTML) {
	var names = new List();
	names.append('Joe');
	names.append('Simon');
	names.append('Chris');
	names.append('Bharathy');
	names.append('Emanuele');
	names.append('Murali');
	names.append('Sai');
	names.append('Leila');

	for (names.end(); names.hasPrevious();) {
		printHTML(names.previous());
	}

	return names.toString();
}

//Hashmap lists
export function hashmaps() {
	var hashmap = new HashMap();

	hashmap.add('joe', 'test1');
	hashmap.add('joe1', 'test2');
	hashmap.add('joe2', 'test3');
	hashmap.add('joe1', 'test2duplicate');

	console.log(hashmap.entrySet());
	console.log(hashmap.get('joe'));
	hashmap.remove('joe1');
	hashmap.put('joe2', 're-written');
	console.log(hashmap.entrySet());

	return this;
}
