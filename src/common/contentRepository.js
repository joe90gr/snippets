import { arraysOne } from 'common/dataStructures/arrays.js';
import { iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce } from 'common/dataStructures/iterators.js';
import { adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward } from 'common/dataStructures/lists.js';
import { hashMaps, hashMapIntegers } from 'common/dataStructures/hashMaps.js';
import { queues, dancers, radixSort, priorityQueue } from 'common/dataStructures/queues.js';
import { linkedLists, circularLinkedList } from 'common/dataStructures/linkedLists.js';
import { pushToStack, palinDromes } from 'common/dataStructures/stacks.js';
import { promises, promisesOne, promisesTwo } from 'common/esSixFeatures/promises.js';
import { classInheritance } from 'common/esSixFeatures/classes.js';
import { formatMessages } from 'common/formatMessage/formatMessages.js';
import { testBedAlgorithm, bubbleSort, graphAlgorithm } from 'common/algorithms/algorithms.js';
import { factory } from 'common/patterns/factory.js';
import { examples, example1, example2, example3, example4 } from 'common/reactExamples/examples.js';

export default {
	Snippets: {
		arraysOne,
		iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce,
		adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward,
		hashMaps, hashMapIntegers,
		queues, dancers, radixSort, priorityQueue,
		linkedLists, circularLinkedList,
		pushToStack, palinDromes,
		promises, promisesOne, promisesTwo,
		classInheritance,
		formatMessages,
		testBedAlgorithm, bubbleSort, graphAlgorithm,
		factory,
		examples, example1, example2, example3, example4
	},
	ExternalContent: {
		'/testing-url': 'hi from my content'
	}
};
