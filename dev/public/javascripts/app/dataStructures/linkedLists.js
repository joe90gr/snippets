import { LinkedList } from '../lib/linkedList.js';

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

}
