import React from 'react';
import { string } from 'prop-types';
import SubscribeToStores from 'platform/views/viewControllers/SubscribeToStores';

function Head({ pageTitle, styleSheetPath, serialisedScripts }) {
	function getSerializedScript(serialisedScripts) {
		return { __html: `window.SERIALIZED_STORE_CACHE = ${serialisedScripts}` };
	}

	return (
		<head>
			<title>{ pageTitle }</title>
			<link rel="stylesheet" href={ styleSheetPath } />
			<script src="/js/three.min.js"></script>
			<script data-embedded id="serialised" dangerouslySetInnerHTML={ getSerializedScript(serialisedScripts) }/>
		</head>
	);
}

Head.displayName = 'Head';
Head.propTypes = {
	pageTitle: string,
	styleSheetPath: string,
	serialisedScripts: string
};

export default SubscribeToStores(Head, {
	documentMetaDataStore: [ 'pageTitle', 'styleSheetPath', 'serialisedScripts' ]
});
