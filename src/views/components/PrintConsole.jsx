import React from 'react';
import events from 'utils/events';
import PrintLine from './PrintLine';

export default React.createClass({
	displayName: 'PrintConsole',

	propTypes: {
		context: React.PropTypes.string
	},

	getInitialState: function () {
		return { items: [] };
	},

	componentDidMount: function () {
		events.on(this.props.context, this._onChange);
	},

	componentWillUnmount: function () {
		events.off(this.props.context, this._onChange);
	},

	render: function () {
		return <PrintLine items={this.state.items}/>;
	},

	_onChange: function (result) {
		var nextItems = this.state.items.concat([ result ]);
		this.setState({ items: nextItems });
	}
});
