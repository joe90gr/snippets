import React from 'react';

export function examples() {
	var reactElementP = React.createElement('p', { className: 'p-el', key: 'p' }, 'hi p tag');
	return reactElementP;
}

export function example1() {
	var TodoList = React.createClass({
		render: function () {
			var createItem = function (itemText, index) {
				return <li>{index + 1} : {itemText} </li>;
			};

			return <ul>{this.props.joe.map(createItem)}</ul>;
		}
	});

	return <TodoList joe={ [ 'Joe', 'Bharathy', 'Simon', 'Murali', 'Sai', 'Leila', 'Emanuele', 'Chris' ] } />;
}

export function example2() {
	var Clock = React.createClass({
		getInitialState: function () {
			return { time: this._getTime() };
		},
		tick: function () {
			this.setState({ time: this._getTime() });
		},
		componentDidMount: function () {
			this.interval = setInterval(this.tick, 1000);
		},
		componentWillUnmount: function () {
			clearInterval(this.interval);
		},
		render: function () {
			return (
				<div>Time is: {this.state.time}</div>
			);
		},
		_getTime() {
			var date = new Date();
			return date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds();
		}
	});

	return React.createElement(Clock, null);
}

export function example3() {}

export function example4() {}

