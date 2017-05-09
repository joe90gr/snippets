import React from 'react';
import Snippets from 'common/components/Snippets';

import { arraysOne } from 'common/content/dataStructures/arrays.js';
import { iteratorForEach, iteratorEvery, iteratorSome, iteratorReduce } from 'common/content/dataStructures/iterators.js';
import { adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward } from 'common/content/dataStructures/lists.js';
import { hashMaps, hashMapIntegers } from 'common/content/dataStructures/hashMaps.js';
import { queues, dancers, radixSort, priorityQueue } from 'common/content/dataStructures/queues.js';
import { linkedLists, circularLinkedList } from 'common/content/dataStructures/linkedLists.js';
import { pushToStack, palinDromes } from 'common/content/dataStructures/stacks.js';
import { promises, promisesOne, promisesTwo } from 'common/content/esSixFeatures/promises.js';
import { generators } from 'common/content/esSixFeatures/generators.js';
import { classInheritance } from 'common/content/esSixFeatures/classes.js';
import { formatMessages } from 'common/content/formatMessage/formatMessages.js';
import { testBedAlgorithm, bubbleSort, graphAlgorithm } from 'common/content/algorithms/algorithms.js';
import { factory } from 'common/content/patterns/factory.js';
import { examples, example1, example2, example3, example4 } from 'common/content/reactExamples/examples.js';
import Pong from 'common/content/html5CanvasEngines/Pong';

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
	'generators': <Snippets title={ 'generators' } model={ [ generators ] } />,
	'classes': <Snippets title={ 'Classes' } model={ [ classInheritance ] } />,
	'format-messages': <Snippets title={ 'Format Messages' } model={ [ formatMessages ] } />,
	'algorithms': <Snippets title={ 'Algorithms' } model={ [ testBedAlgorithm, bubbleSort, graphAlgorithm ] } />,
	'factory': <Snippets title={ 'Factory Pattern' } model={ [ factory ] } />,
	'more-examples': <Snippets title={ 'More Examples' } model={ [ examples, example1, example2, example3, example4 ] } />
};
