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

var contents = {
	'arraysOne': arraysOne,
	'iteratorForEach': iteratorForEach,
	'iteratorEvery': iteratorEvery,
	'iteratorSome': iteratorSome,
	'iteratorReduce': iteratorReduce,
	'adtListAppendRemove': adtListAppendRemove,
	'adtListNextPrevious': adtListNextPrevious,
	'adtListIterateFoward': adtListIterateFoward,
	'adtListIterateBackward': adtListIterateBackward,
	'hashMaps': hashMaps,
	'hashMapIntegers': hashMapIntegers,
	'queues': queues,
	'dancers': dancers,
	'radixSort': radixSort,
	'priorityQueue': priorityQueue,
	'linkedLists': linkedLists,
	'circularLinkedList': circularLinkedList,
	'pushToStack': pushToStack,
	'palinDromes': palinDromes,
	'promises': promises,
	'promisesOne': promisesOne,
	'promisesTwo': promisesTwo,
	'classInheritance': classInheritance,
	'formatMessages': formatMessages,
	'testBedAlgorithm': testBedAlgorithm,
	'bubbleSort': bubbleSort,
	'graphAlgorithm': graphAlgorithm,
	'factory': factory,
	'examples': examples,
	'example1': example1,
	'example2': example2,
	'example3': example3,
	'example4': example4
};

export default contents;
