import React from 'react';

export default React.createClass({
	displayName: 'PrintLine',

	render: function () {
		var createItem = function (line, index) {
			return React.createElement('p', { className: 'line' + index }, line);
		};

		return <div>{this.props.items.map(createItem)}</div>;
	}
});