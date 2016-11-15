import React from 'react';

class PrintLine extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var createItem = function (line, index) {
			return React.createElement('p', { className: 'line' + index, key: 'pl' + (index + 1) }, line);
		};

		return <div>{this.props.items.map(createItem)}</div>;
	}
}

PrintLine.displayName = 'PrintLine';

PrintLine.propTypes = {
	items: React.PropTypes.array
};

export default PrintLine;
