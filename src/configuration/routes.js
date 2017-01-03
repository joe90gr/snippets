export default {
	'/': {
		id: 'examples',
		external: false,
		title: 'Examples',
		layout: 'LeftNavLayout',
		content: [ 'examples' ],
		contentType: 'Snippets'
	},
	'/examples': {
		id: 'more-examples',
		external: false,
		title: 'More Examples',
		layout: 'LeftNavLayout',
		content: [ 'examples', 'example1', 'example2', 'example3', 'example4' ],
		contentType: 'Snippets'
	},
	'/iterators': {
		id: 'iterators',
		external: false,
		title: 'Iterators',
		layout: 'LeftNavLayout',
		content: [ 'iteratorForEach', 'iteratorEvery', 'iteratorSome', 'iteratorReduce' ],
		contentType: 'Snippets'
	},
	'/lists': {
		id: 'lists',
		external: false,
		title: 'Lists',
		layout: 'LeftNavLayout',
		content: [ 'adtListAppendRemove', 'adtListNextPrevious', 'adtListIterateFoward', 'adtListIterateBackward' ],
		contentType: 'Snippets'
	},
	'/hashmap': {
		id: 'hashmap',
		external: false,
		title: 'Hash Tables',
		layout: 'LeftNavLayout',
		content: [ 'hashMaps', 'hashMapIntegers' ],
		contentType: 'Snippets'
	},
	'/stack': {
		id: 'stack',
		external: false,
		title: 'Stack',
		layout: 'LeftNavLayout',
		content: [ 'pushToStack', 'palinDromes' ],
		contentType: 'Snippets'
	},
	'/queue': {
		id: 'queue',
		external: false,
		title: 'Queues',
		layout: 'LeftNavLayout',
		content: [ 'queues', 'dancers', 'radixSort', 'priorityQueue' ],
		contentType: 'Snippets'
	},
	'/linked-lists': {
		id: 'linked-lists',
		external: false,
		title: 'Linked Lists',
		layout: 'LeftNavLayout',
		content: [ 'linkedLists', 'circularLinkedList' ],
		contentType: 'Snippets'
	},
	'/algorithms': {
		id: 'algorithms',
		external: false,
		title: 'Algorithms',
		layout: 'LeftNavLayout',
		content: [ 'testBedAlgorithm', 'bubbleSort', 'graphAlgorithm' ],
		contentType: 'Snippets'
	},
	'/promises': {
		id: 'promises',
		external: false,
		title: 'Promises',
		layout: 'LeftNavLayout',
		content: [ 'promises', 'promisesOne', 'promisesTwo' ],
		contentType: 'Snippets'
	},
	'/classes': {
		id: 'classes',
		external: false,
		title: 'Classes',
		layout: 'LeftNavLayout',
		content: [ 'classInheritance' ],
		contentType: 'Snippets'
	},
	'/format-messages': {
		id: 'format-messages',
		external: false,
		title: 'Format Messages',
		layout: 'LeftNavLayout',
		content: [ 'formatMessages' ],
		contentType: 'Snippets'
	},
	'/factory': {
		id: 'factory',
		external: false,
		title: 'Factory Pattern',
		layout: 'LeftNavLayout',
		content: [ 'factory' ],
		contentType: 'Snippets'
	},
	'/test': {
		id: 'testing',
		external: false,
		title: 'Testing',
		layout: 'RightNavLayout',
		content: [ '/testing-url' ],
		contentType: 'ExternalContent'
	}
};
