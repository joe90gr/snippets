import React from 'react';
import DefaultLayout from './layouts/default';

export default React.createClass({
	displayName: 'Error',

	propTypes: {
		title: React.PropTypes.string,
		model: React.PropTypes.array
	},

	render: function () {
		return (
			<DefaultLayout title={this.props.title} model={this.props.model}/>
		);
	}
});
