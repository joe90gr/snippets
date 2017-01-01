import React from 'react';
import SubscribeToStores from 'views/viewControllers/SubscribeToStores';

class Head extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<head>
				<title></title>
				<link rel="stylesheet" href={ this.props.styleSheetPath } />
				<script data-embedded id="serialised" dangerouslySetInnerHTML={ this.getSerializedScript() }/>
			</head>
		);
	}

	getMetaTitle() {
		return this.props.pageTitle;
	}

	getSerializedScript() {
		return { __html: `window.SERIALIZED_STORE_CACHE = ${this.props.serialisedScripts}` };
	}
}

Head.displayName = 'Head';

Head.propTypes = {
	title: React.PropTypes.string,
	pageTitle: React.PropTypes.string,
	styleSheetPath: React.PropTypes.string,
	serialisedScripts: React.PropTypes.string

};

export default SubscribeToStores(Head, {
	documentMetaDataStore: [ 'pageTitle', 'styleSheetPath', 'serialisedScripts' ]
});
