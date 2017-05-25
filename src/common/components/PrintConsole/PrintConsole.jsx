import React from 'react';
import { string } from 'prop-types';

import events from 'utils/events';
import PrintLine from './PrintLine';

class PrintConsole extends React.Component {
	constructor(props) {
		super(props);

		this.state = { items: [] };
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.items !== this.state.items;
	}

	componentDidMount() {
		events.on(this.props.context, this._onChange.bind(this));
	}

	componentWillUnmount() {
		events.off(this.props.context, this._onChange.bind(this));
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
PrintConsole.propTypes = { context: string };

export default PrintConsole;
