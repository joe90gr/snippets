import { arraysOne } from '../common/dataStructures/arrays.js';
import { iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce } from '../common/dataStructures/iterators.js';
import { adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward } from '../common/dataStructures/lists.js';
import { hashMaps, hashMapIntegers } from '../common/dataStructures/hashMaps.js';
import { queues, dancers, radixSort, priorityQueue } from '../common/dataStructures/queues.js';
import { linkedLists, circularLinkedList } from '../common/dataStructures/linkedLists.js';
import { pushToStack, palinDromes } from '../common/dataStructures/stacks.js';
import { promises, promisesOne, promisesTwo } from '../common/esSixFeatures/promises.js';
import { classInheritance } from '../common/esSixFeatures/classes.js';
import { formatMessages } from '../common/formatMessage/formatMessages.js';
import { testBedAlgorithm, bubbleSort, graphAlgorithm } from '../common/algorithms/algorithms.js';
import { factory } from '../common/patterns/factory.js';
import { examples, example1, example2, example3, example4 } from '../common/reactExamples/examples.js';

var contents = {
	'index': {
		title: 'Examples',
		content: [ examples ]
	},
	'examples': {
		title: 'More Examples',
		content: [ examples, example1, example2, example3, example4 ]
	},
	'iterators': {
		title: 'Iterators',
		content: [ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ]
	},
	'lists': {
		title: 'Lists',
		content: [ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ]
	},
	'promises': {
		title: 'Promises',
		content: [ promises, promisesOne, promisesTwo ]
	},
	'classes': {
		title: 'Classes',
		content: [ classInheritance ]
	},
	'stack': {
		title: 'Stack',
		content: [ pushToStack, palinDromes ]
	},
	'hashmap': {
		title: 'Hash Tables',
		content: [ hashMaps, hashMapIntegers ]
	},
	'queue': {
		title: 'Queues',
		content: [ queues, dancers, radixSort, priorityQueue ]
	},
	'algorithms': {
		title: 'Algorithms',
		content: [ testBedAlgorithm, bubbleSort, graphAlgorithm ]
	},
	'linked-lists': {
		title: 'Linked Lists',
		content: [ linkedLists, circularLinkedList ]
	},
	'format-messages': {
		title: 'Format Messages',
		content: [ formatMessages ]
	},
	'factory': {
		title: 'Factory Pattern',
		content: [ factory ]
	}
};

export default (url) => contents[url];
