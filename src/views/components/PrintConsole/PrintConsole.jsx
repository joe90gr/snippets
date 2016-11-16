import React from 'react';
import events from 'utils/events';
import PrintLine from './PrintLine';

class PrintConsole extends React.Component {
	constructor(props) {
		super(props);

		this.state = { items: [] };
	}

	componentDidMount() {
		events.on(this.props.context, this._onChange);
	}

	componentWillUnmount() {
		events.off(this.props.context, this._onChange);
	}

	render() {
		return <PrintLine items={this.state.items}/>;
	}

	_onChange(result) {
		var nextItems = this.state.items.concat([ result ]);

		this.setState({ items: nextItems });
	}
}

PrintConsole.displayName = 'PrintConsole';

PrintConsole.propTypes = {
	context: React.PropTypes.string
};

export default PrintConsole;
