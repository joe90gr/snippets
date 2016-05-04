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
				<ReactWrapper />
				<script type="text/javascript" src="/js/main.js" />
			</body>
		);
	}
});
