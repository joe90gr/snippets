export function LinkedList() {
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.findLast = findLast;
	this.display = display;
	this.displayReverse = displayReverse;
}

function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function find(item) {
	var currentNode = this.head;
	while (currentNode.element != item) {
		currentNode = currentNode.next;
	}

	return currentNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var currentNode = this.find(item);
	newNode.next = currentNode.next;
	newNode.previous = currentNode;
	currentNode.next = newNode;
}

function remove(item) {
	var currentNode = this.find(item);
	if (!(currentNode.next === null)) {
		currentNode.previous.next = currentNode.next;
		currentNode.next.previous = currentNode.previous;
		currentNode.previous = null;
		currentNode.next = null;
	}
}

function findLast() {
	var currentNode = this.head;
	while (!(currentNode.next === null)) {
		currentNode = currentNode.next;
	}

	return currentNode;
}

function display(print) {
	var currentNode = this.head;
	while (!(currentNode.next === null)) {
		print(currentNode.next.element);
		currentNode = currentNode.next;
	}
}

function displayReverse(print) {
	var currentNode = this.findLast();
	while (!(currentNode.previous === null)) {
		print(currentNode.element);
		currentNode = currentNode.previous;
	}
}

