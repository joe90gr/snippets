import React from 'react';

import Navigation from './components/Navigation';
import PrimaryContent from './PrimaryContent';
import router from 'services/routingService';
import { use } from 'mixins/use';

export default React.createClass({
	displayName: 'reactWrapper',

	mixins: [ use('contentStore') ],

	componentDidMount: function () {
		router.init();
	},

	getInitialState: function () {
		var { title, content } = this.contentStore.getPageContent();

		return {
			title: title,
			data: content
		};
	},

	render: function () {
		return (
			<div className="react-wrapper">
				<Navigation />
				<div className="content">
					<PrimaryContent title={this.state.title} model= {this.state.data} />
				</div>
			</div>
		);
	},

	_onContentStoreChange: function () {
		var { title, content } = this.contentStore.getPageContent();
		console.log('WHAT IS TITLE FROM ONCHANGE', title);

		this.setState({ title: title, data: content });
	}
});
