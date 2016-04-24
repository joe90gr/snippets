import React from 'react';

import Navigation from './components/Navigation';
import PrimaryContent from './PrimaryContent';
import router from 'services/routingService';
import { use } from 'mixins/use';

export default React.createClass({
	displayName: 'reactWrapper',

	propTypes: {
		title: React.PropTypes.string,
		model: React.PropTypes.array
	},

	mixins: [ use('ContentStore', '_onChange') ],

	getDefaultProps: function () {
		return {
			title: '',
			model: []
		};
	},

	componentDidMount: function () {
		router.init();
	},

	getInitialState: function () {
		return {
			title: this.props.title,
			data: this.props.model
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

	_onChange: function () {
		var { title, content } = this.ContentStore.getPageContent();

		this.setState({ title: title, data: content });
	}
});
