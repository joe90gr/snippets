import React from 'react';
import events from '../utils/events';
import PrintConsole from './components/PrintConsole';
import RoutingStore from '../stores/RoutingStore';

function getMapState() {
	return RoutingStore.getData();
}

export default React.createClass({
	displayName: 'PrimaryContent',

	propTypes: {
		title: React.PropTypes.string,
		model: React.PropTypes.array
	},

	getInitialState: function () {
		return { data: this.props.model };
	},

	componentDidMount: function () {
		RoutingStore.addChangeListener(this._onChange);
	},

	componentWillMount: function () {
		RoutingStore.removeChangeListener(this._onChange);
	},

	render: function () {
		var executeBlock = function (itemText, index, arr) {
			return itemText(function (result) {
				console.log('test: ', result);
				// events.emit('example' + index, result);
				arr.push(React.createElement('p', {}, result));
			});
		};

		var createItem = function (itemText, index) {
			var arr = [];
			var h2 = React.createElement('h2', {}, itemText.name);
			var divExample = React.createElement('div', { className: 'example' }, itemText + '');
			var returnedResult = executeBlock(itemText, index, arr);

			var divExampleResult = React.createElement('div', { className: 'example' }, returnedResult);
			var section = React.createElement('div', {}, [ h2, divExample, divExampleResult, React.createElement(PrintConsole, { context: 'example' + index }) ].concat(arr));

			return React.createElement('pre', { id: 'example-' + (index + 1), className: 'example', key: 'r' + (index + 1) }, section);
		};

		return (
			<div>
				<h1 className="main-title"> {this.props.title} </h1>
				{this.state.data.map(createItem)}
			</div>
		);
	},

	_onChange: function () {
		this.setState({ data: getMapState() });
	}
});

