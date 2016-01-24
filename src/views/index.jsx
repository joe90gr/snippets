import React from 'react';
import DefaultLayout from './layouts/default';

export default React.createClass({
	render: function () {
		return (
			<DefaultLayout title={this.props.title} model={this.props.model}/>
		);
	}
});
