var React = require('react');
var events = require('../../public/js/utils/events');

var PrintLine = React.createClass({
	render: function () {
		var createItem = function (line, index) {
			return React.createElement('p', { className: 'line' + index }, line);
		};

		return <div>{this.props.items.map(createItem)}</div>;
	}
});

var PrintConsole = React.createClass({
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

var PrimaryContent = React.createClass({
	render: function () {
		var arr;

		var executeBlock = function (itemText, index) {
			return itemText(function (result) {
				console.log('test: ', result);
				events.emit('example' + index, result);
				arr.push(React.createElement('p', {}, result));
			});
		};

		var createItem = function (itemText, index) {
			arr = [];
			var h2 = React.createElement('h2', {}, 'subheading');
			var divExample = React.createElement('div', { className: 'example' }, itemText + '');
			var returnedResult = executeBlock(itemText, index);

			var divExampleResult = React.createElement('div', { className: 'example' }, returnedResult);
			var section = React.createElement('div', {}, [ h2, divExample, divExampleResult, React.createElement(PrintConsole, { context: 'example' + index }) ].concat(arr));

			return React.createElement('pre', { id: 'example-' + (index + 1), className: 'example', key: 'r' + (index + 1) }, section);
		};

		return (
			<div>
				<h1 className="main-title"> {this.props.title} </h1>
				{this.props.model.map(createItem)}
			</div>
		);
	}
});

module.exports = PrimaryContent;
