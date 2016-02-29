import React from 'react';
import events from '../utils/events';
import PrintConsole from './components/PrintConsole';
import RoutingStore from '../stores/RoutingStore';

export default React.createClass({
	displayName: 'PrimaryContent',

	propTypes: {
		title: React.PropTypes.string,
		model: React.PropTypes.array
	},

	getInitialState: function () {
		return { data: this.props.model || [] };
	},

	componentDidMount: function () {
		RoutingStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		RoutingStore.removeChangeListener(this._onChange);
	},

	_executeBlock: function (itemText, index) {
		var arr = [];

		var returnedFromFunction = itemText(function (result) {
			//events.emit('example' + index, result);
			arr.push(<p>{result}</p>);
		});

		return {
			returnedFromFunction: returnedFromFunction,
			arr: arr
		};
	},

	_createItem: function (itemText, index) {
		var result = this._executeBlock(itemText, index);

		return (
			<pre id={'example-' + (index + 1)} className={'example'} key={'r' + (index + 1)}>
				<div>
					<h2>{itemText.name}</h2>
					<div className="example">
						{itemText + ''}
					</div>
					<div className="example">
						{result.returnedFromFunction}
					</div>
					{result.arr.map((item) => item)}
					<PrintConsole context={'example' + index} />
				</div>
			</pre>
		);
	},

	render: function () {
		return (
			<div>
				<h1 className="main-title"> {this.props.title} </h1>
				{this.state.data.map(this._createItem)}
			</div>
		);
	},

	_onChange: function () {
		this.setState({ data: this._getMapState() });
	},

	_getMapState: function () {
		return RoutingStore.getData();
	}

});

