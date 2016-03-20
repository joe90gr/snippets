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
import { graphAlgorithm } from '../common/algorithms/algorithms.js';
import { factory } from '../common/patterns/factory.js';
import { examples, example1, example2, example3, example4 } from '../common/reactExamples/examples.js';

var contents = {
	'index': [ examples ],
	'examples': [ examples, example1, example2, example3, example4 ],
	'iterators': [ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ],
	'lists': [ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ],
	'promises': [ promises, promisesOne, promisesTwo ],
	'classes': [ classInheritance ],
	'stack': [ pushToStack, palinDromes ],
	'hashmap': [ hashMaps, hashMapIntegers ],
	'queue': [ queues, dancers, radixSort, priorityQueue ],
	'algorithms': [ graphAlgorithm ],
	'linked-lists': [ linkedLists, circularLinkedList ],
	'format-messages': [ formatMessages ],
	'factory': [ factory ]
};

export default (url) => contents[url];
