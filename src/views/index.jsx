import React from 'react';
import Root from './layouts/root';

export default React.createClass({
	displayName: 'Error',

	propTypes: {
		title: React.PropTypes.string,
		model: React.PropTypes.array
	},

	render: function () {
		return (
			<Root title={this.props.title} model={this.props.model}/>
		);
	}
});
