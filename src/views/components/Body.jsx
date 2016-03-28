import React from 'react';
import ReactWrapper from '../ReactWrapper';

export default React.createClass({
	displayName: 'Body',

	propTypes: {
		title: React.PropTypes.string,
		model: React.PropTypes.array
	},

	render: function () {
		return (
			<body>
				<ReactWrapper title={this.props.title} model={this.props.model}/>
				<script type="text/javascript" src="/js/main.js" />
			</body>
		);
	}
});
