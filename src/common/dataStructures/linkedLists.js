import { LinkedList } from '../lib/LinkedList.js';

export function linkedLists(printHTML) {
	var cities = new LinkedList();
	cities.insert('Conway', 'head');
	cities.insert('Russellville', 'Conway');
	cities.insert('Alma', 'Russellville');
	cities.insert('London', 'Alma');

	cities.display(printHTML);
	printHTML('----------------------------');
	cities.remove('Russellville');
	cities.display(printHTML);
	printHTML('----------------------------');
	cities.displayReverse(printHTML);

	return '';
}

export function circularLinkedList(printHTML) {
	var cities = new LinkedList();

	cities.insert('Joe', 'head');
	cities.insert('Simon', 'Joe');
	cities.insert('Chris', 'Simon');
	cities.insert('Bharathy', 'Chris');
	cities.insert('Emanuele', 'Bharathy');
	cities.insert('Murali', 'Emanuele');
	cities.insert('Sai', 'Murali');
	cities.insert('Leila', 'Sai');

	cities.display(printHTML);
	printHTML('----------------------------');

	cities.show(printHTML);
	cities.advance(1);
	cities.show(printHTML);
	cities.advance(2);
	cities.show(printHTML);
	cities.back(1);
	cities.show(printHTML);
	cities.back(1);
	cities.show(printHTML);
	cities.back(1);
	cities.show(printHTML);
	cities.back(1);
	cities.show(printHTML);

	return '';
}
