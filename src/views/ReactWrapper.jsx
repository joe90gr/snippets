import React from 'react';

import Navigation from './components/Navigation';
import PrimaryContent from './PrimaryContent';
import router from 'services/routingService';
import snippets from 'common/snippets';

import { use } from 'mixins/use';

export default React.createClass({
	displayName: 'reactWrapper',

	mixins: [ use('contentStore') ],

	componentDidMount: function () {
		router.init();
	},

	getInitialState: function () {
		return this.extractPageContent();
	},

	extractPageContent: function () {
		var { title, content } = this.contentStore.getPageContent();
		var page = { title: title, content: [] };

		content.forEach((content, index) => {
			page.content[index] = snippets[content];
		});

		return page;
	},

	render: function () {
		return (
			<div className="react-wrapper">
				<Navigation />
				<div className="content">
					<PrimaryContent title={ this.state.title } model= { this.state.content } />
				</div>
			</div>
		);
	},

	_onContentStoreChange: function () {
		this.setState(this.extractPageContent());
	}
});
