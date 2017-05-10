import React from 'react';
import SubscribeToStores from 'platform/views/viewControllers/SubscribeToStores';

function Head({ pageTitle, styleSheetPath, serialisedScripts }) {
	function getSerializedScript(serialisedScripts) {
		return { __html: `window.SERIALIZED_STORE_CACHE = ${serialisedScripts}` };
	}

	return (
		<head>
			<title>{ pageTitle }</title>
			<link rel="stylesheet" href={ styleSheetPath } />
			<script data-embedded id="serialised" dangerouslySetInnerHTML={ getSerializedScript(serialisedScripts) }/>
		</head>
	);
}

Head.displayName = 'Head';
Head.propTypes = {
	pageTitle: React.PropTypes.string,
	styleSheetPath: React.PropTypes.string,
	serialisedScripts: React.PropTypes.string

};

export default SubscribeToStores(Head, {
	documentMetaDataStore: [ 'pageTitle', 'styleSheetPath', 'serialisedScripts' ]
});
