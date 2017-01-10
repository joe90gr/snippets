export default {
	'/': {
		id: 'examples',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Examples',
			layout: 'LeftNavLayout',
			content: [ 'examples' ]
		}
	},
	'/examples': {
		id: 'more-examples',
		external: false,
		page: {
			type: 'Snippets',
			title: 'More Examples',
			layout: 'LeftNavLayout',
			content: [ 'examples', 'example1', 'example2', 'example3', 'example4' ]
		}
	},
	'/iterators': {
		id: 'iterators',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Iterators',
			layout: 'LeftNavLayout',
			content: [ 'iteratorForEach', 'iteratorEvery', 'iteratorSome', 'iteratorReduce' ]
		}
	},
	'/lists': {
		id: 'lists',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Lists',
			layout: 'LeftNavLayout',
			content: [ 'adtListAppendRemove', 'adtListNextPrevious', 'adtListIterateFoward', 'adtListIterateBackward' ]
		}
	},
	'/hashmap': {
		id: 'hashmap',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Hash Tables',
			layout: 'LeftNavLayout',
			content: [ 'hashMaps', 'hashMapIntegers' ]
		}
	},
	'/stack': {
		id: 'stack',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Stack',
			layout: 'LeftNavLayout',
			content: [ 'pushToStack', 'palinDromes' ]
		}
	},
	'/queue': {
		id: 'queue',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Queues',
			layout: 'LeftNavLayout',
			content: [ 'queues', 'dancers', 'radixSort', 'priorityQueue' ]
		}
	},
	'/linked-lists': {
		id: 'linked-lists',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Linked Lists',
			layout: 'LeftNavLayout',
			content: [ 'linkedLists', 'circularLinkedList' ]
		}
	},
	'/algorithms': {
		id: 'algorithms',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Algorithms',
			layout: 'LeftNavLayout',
			content: [ 'testBedAlgorithm', 'bubbleSort', 'graphAlgorithm' ]
		}
	},
	'/promises': {
		id: 'promises',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Promises',
			layout: 'LeftNavLayout',
			content: [ 'promises', 'promisesOne', 'promisesTwo' ]
		}
	},
	'/classes': {
		id: 'classes',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Classes',
			layout: 'LeftNavLayout',
			content: [ 'classInheritance' ]
		}
	},
	'/format-messages': {
		id: 'format-messages',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Format Messages',
			layout: 'LeftNavLayout',
			content: [ 'formatMessages' ]
		}
	},
	'/factory': {
		id: 'factory',
		external: false,
		page: {
			type: 'Snippets',
			title: 'Factory Pattern',
			layout: 'LeftNavLayout',
			content: [ 'factory' ]
		}
	},
	'/test': {
		id: 'testing',
		external: false,
		page: {
			type: 'ExternalContent',
			title: 'Testing',
			layout: 'RightNavLayout',
			content: [ '/testing-url' ]
		}
	}
};
