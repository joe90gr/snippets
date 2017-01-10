export default {
	'/': {
		id: 'examples',
		external: false,
		title: 'Examples',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'examples' ]
		}
	},
	'/examples': {
		id: 'more-examples',
		external: false,
		title: 'More Examples',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'examples', 'example1', 'example2', 'example3', 'example4' ]
		}
	},
	'/iterators': {
		id: 'iterators',
		external: false,
		title: 'Iterators',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'iteratorForEach', 'iteratorEvery', 'iteratorSome', 'iteratorReduce' ]
		}
	},
	'/lists': {
		id: 'lists',
		external: false,
		title: 'Lists',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'adtListAppendRemove', 'adtListNextPrevious', 'adtListIterateFoward', 'adtListIterateBackward' ]
		}
	},
	'/hashmap': {
		id: 'hashmap',
		external: false,
		title: 'Hash Tables',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'hashMaps', 'hashMapIntegers' ]
		}
	},
	'/stack': {
		id: 'stack',
		external: false,
		title: 'Stack',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'pushToStack', 'palinDromes' ]
		}
	},
	'/queue': {
		id: 'queue',
		external: false,
		title: 'Queues',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'queues', 'dancers', 'radixSort', 'priorityQueue' ]
		}
	},
	'/linked-lists': {
		id: 'linked-lists',
		external: false,
		title: 'Linked Lists',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'linkedLists', 'circularLinkedList' ]
		}
	},
	'/algorithms': {
		id: 'algorithms',
		external: false,
		title: 'Algorithms',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'testBedAlgorithm', 'bubbleSort', 'graphAlgorithm' ]
		}
	},
	'/promises': {
		id: 'promises',
		external: false,
		title: 'Promises',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'promises', 'promisesOne', 'promisesTwo' ]
		}
	},
	'/classes': {
		id: 'classes',
		external: false,
		title: 'Classes',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'classInheritance' ]
		}
	},
	'/format-messages': {
		id: 'format-messages',
		external: false,
		title: 'Format Messages',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'formatMessages' ]
		}
	},
	'/factory': {
		id: 'factory',
		external: false,
		title: 'Factory Pattern',
		layout: 'LeftNavLayout',
		page: {
			type: 'Snippets',
			content: [ 'factory' ]
		}
	},
	'/test': {
		id: 'testing',
		external: false,
		title: 'Testing',
		layout: 'RightNavLayout',
		page: {
			type: 'ExternalContent',
			content: [ '/testing-url' ]
		}
	}
};
