import React from 'react';
import { use } from 'mixins/use';

export default React.createClass({
	displayName: 'Head',

	propTypes: {
		title: React.PropTypes.string
	},

	mixins: [ use('documentMetaDataStore') ],

	render: function () {
		return (
			<head>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href={ this.getStyleSheetPath() } />
				<script data-embedded id="serialised" dangerouslySetInnerHTML={ this.getSerializedScript() }/>
			</head>
		);
	},

	getMetaTitle: function () {
		return this.documentMetaDataStore.getTitle();
	},

	getStyleSheetPath: function () {
		return this.documentMetaDataStore.getStyleSheetPath();
	},

	getSerializedScript: function () {
		return { __html: `window.SERIALIZED_STORE_CACHE = ${this.documentMetaDataStore.getSerialisedScripts()}` };
	}
});
