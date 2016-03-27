import React from 'react';
import Navigation from './components/Navigation';
import PrimaryContent from './PrimaryContent';
import contentStore from '../stores/ContentStore';
import router from '../services/routingService';

export default React.createClass({
	displayName: 'reactWrapper',

	propTypes: {
		title: React.PropTypes.string,
		model: React.PropTypes.array
	},

	getDefaultProps: function () {
		return {
			title: '',
			model: []
		};
	},

	getInitialState: function () {
		return {
			title: this.props.title,
			data: this.props.model
		};
	},

	componentDidMount: function () {
		router.init();
		contentStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		contentStore.removeChangeListener(this._onChange);
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
		var { title, content } = contentStore.getData();

		this.setState({ title: title, data: content });
	}
});
