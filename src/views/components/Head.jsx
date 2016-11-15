import React from 'react';
import SubscribeToStores from 'utils/SubscribeToStores';

class Head extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<head>
				<title></title>
				<link rel="stylesheet" href={ this.props.documentMetaDataStore.styleSheetPath } />
				<script data-embedded id="serialised" dangerouslySetInnerHTML={ this.getSerializedScript() }/>
			</head>
		);
	}

	getMetaTitle() {
		return this.props.documentMetaDataStore.pageTitle;
	}

	getSerializedScript() {
		return { __html: `window.SERIALIZED_STORE_CACHE = ${this.props.documentMetaDataStore.serialisedScripts}` };
	}
}

Head.displayName = 'Head';

Head.propTypes = {
	title: React.PropTypes.string,
	documentMetaDataStore: React.PropTypes.object
};

export default SubscribeToStores(Head, {
	documentMetaDataStore: [ 'pageTitle', 'styleSheetPath', 'serialisedScripts' ]
});
