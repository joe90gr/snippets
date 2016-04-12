export function LinkedList() {
	this.head = new Node('head');
	this.head.next = this.head;
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.findLast = findLast;
	this.advance = advance;
	this.back = back;
	this.show = show;
	this.display = display;
	this.displayReverse = displayReverse;
	this.currentNode = this.head;
}

function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function find(item) {
	let currentNode = this.head;

	while (currentNode.element != item) {
		currentNode = currentNode.next;
	}

	return currentNode;
}

function insert(newElement, item) {
	let newNode = new Node(newElement);
	let currentNode = this.find(item);

	newNode.next = currentNode.next;
	newNode.previous = currentNode;
	currentNode.next = newNode;
	this.head.previous = newNode;
}

function remove(item) {
	let currentNode = this.find(item);

	if (!(currentNode.next === null)) {
		currentNode.previous.next = currentNode.next;
		currentNode.next.previous = currentNode.previous;
		currentNode.previous = null;
		currentNode.next = null;
	}
}

function findLast() {
	let currentNode = this.head;

	while (!(currentNode.next === null) && !(currentNode.next.element == 'head')) {
		currentNode = currentNode.next;
	}

	return currentNode;
}

function advance(byNth) {
	let i = byNth;

	while (!(i <= 0)) {
		this.currentNode = this.currentNode.next;
		i--;
	}

	return this.currentNode;
}

function back(byNth) {
	let i = byNth;

	while (!(i <= 0)) {
		this.currentNode = this.currentNode.previous;
		i--;
	}

	return this.currentNode;
}

function show(print) {
	print('The current node is: ' + this.currentNode.element);
}

function display(print) {
	let currentNode = this.head;

	while (!(currentNode.next === null) && !(currentNode.next.element == 'head')) {
		print(currentNode.next.element);
		currentNode = currentNode.next;
	}
}

function displayReverse(print) {
	let currentNode = this.findLast();

	while (!(currentNode.element == 'head')) {
		print(currentNode.element);
		currentNode = currentNode.previous;
	}
}

