import React from 'react';
import Snippets from 'common/components/Snippets';

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
import Pong from 'common/html5CanvasEngines/Pong';

export default {
	'testing-url': <h1>NATIVE COMPONENT</h1>,
	'pong-game': <Pong/>,
	'examples': <Snippets title={ 'Examples' } model={ [ arraysOne ] } />,
	'iterators': <Snippets title={ 'Iterators' } model={ [ iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce ] } />,
	'lists': <Snippets title={ 'Lists' } model={ [ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ] } />,
	'hashmap': <Snippets title={ 'Hash Tables' } model={ [ hashMaps, hashMapIntegers ] } />,
	'queue': <Snippets title={ 'Queues' } model={ [ queues, dancers, radixSort, priorityQueue ] } />,
	'linked-lists': <Snippets title={ 'Linked Lists' } model={ [ linkedLists, circularLinkedList ] } />,
	'stack': <Snippets title={ 'Stack' } model={ [ pushToStack, palinDromes ] } />,
	'promises': <Snippets title={ 'Promises' } model={ [ promises, promisesOne, promisesTwo ] } />,
	'classes': <Snippets title={ 'Classes' } model={ [ classInheritance ] } />,
	'format-messages': <Snippets title={ 'Format Messages' } model={ [ formatMessages ] } />,
	'algorithms': <Snippets title={ 'Algorithms' } model={ [ testBedAlgorithm, bubbleSort, graphAlgorithm ] } />,
	'factory': <Snippets title={ 'Factory Pattern' } model={ [ factory ] } />,
	'more-examples': <Snippets title={ 'More Examples' } model={ [ examples, example1, example2, example3, example4 ] } />
};
