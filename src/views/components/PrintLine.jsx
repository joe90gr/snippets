import React from 'react';

export default React.createClass({
	displayName: 'PrintLine',

	propTypes: {
		items: React.PropTypes.array
	},

	render: function () {
		var createItem = function (line, index) {
			return React.createElement('p', { className: 'line' + index, key: 'pl' + (index + 1) }, line);
		};

		return <div>{this.props.items.map(createItem)}</div>;
	}
});
