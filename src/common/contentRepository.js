import React from 'react';

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

import LoginForm from 'views/LoginForm';

export default {
	Snippets: {
		'examples': [ arraysOne ],
		'iterators': [ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ],
		'lists': [ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ],
		'hashmap': [ hashMaps, hashMapIntegers ],
		'queue': [ queues, dancers, radixSort, priorityQueue ],
		'linked-lists': [ linkedLists, circularLinkedList ],
		'stack': [ pushToStack, palinDromes ],
		'promises': [ promises, promisesOne, promisesTwo ],
		'classes': [ classInheritance ],
		'format-messages': [ formatMessages ],
		'algorithms': [ testBedAlgorithm, bubbleSort, graphAlgorithm ],
		'factory': [ factory ],
		'more-examples': [ examples, example1, example2, example3, example4 ]
	},
	ExternalContent: {
		'/testing-url': <LoginForm user={ { name: '' } }/>
	}
};
