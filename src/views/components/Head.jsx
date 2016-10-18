import React from 'react';
import SubscribeToStores from 'utils/SubscribeToStores';

const storeManifest = {
	documentMetaDataStore: [ 'pageTitle', 'styleSheetPath', 'serialisedScripts' ]
};

export default SubscribeToStores(React.createClass({
	displayName: 'Head',

	propTypes: {
		title: React.PropTypes.string,
		documentMetaDataStore: React.PropTypes.object
	},

	render: function () {
		return (
			<head>
				<title></title>
				<link rel="stylesheet" href={ this.props.documentMetaDataStore.styleSheetPath } />
				<script data-embedded id="serialised" dangerouslySetInnerHTML={ this.getSerializedScript() }/>
			</head>
		);
	},

	getMetaTitle: function () {
		return this.props.documentMetaDataStore.pageTitle;
	},

	getSerializedScript: function () {
		return { __html: `window.SERIALIZED_STORE_CACHE = ${this.props.documentMetaDataStore.serialisedScripts}` };
	}
}), storeManifest);
