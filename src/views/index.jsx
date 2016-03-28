import React from 'react';
import Head from './components/Head';
import Body from './components/Body';

export default React.createClass({
	displayName: 'Index',

	propTypes: {
		title: React.PropTypes.string,
		model: React.PropTypes.array
	},

	render: function () {
		return (
			<html>
				<Head />
				<Body title={this.props.title} model={this.props.model}/>
			</html>
		);
	}
});
