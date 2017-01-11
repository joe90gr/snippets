import React from 'react';
import SubscribeToStores from 'views/viewControllers/SubscribeToStores';

class Head extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { pageTitle, styleSheetPath, serialisedScripts } = this.props;

		return (
			<head>
				<title>{ pageTitle }</title>
				<link rel="stylesheet" href={ styleSheetPath } />
				<script data-embedded id="serialised" dangerouslySetInnerHTML={ this.getSerializedScript(serialisedScripts) }/>
			</head>
		);
	}

	getMetaTitle() {
		return this.props.pageTitle;
	}

	getSerializedScript(serialisedScripts) {
		return { __html: `window.SERIALIZED_STORE_CACHE = ${serialisedScripts}` };
	}
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
