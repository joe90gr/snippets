// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

export function examples() {
}

export function example1() {
	var reactElementP = React.createElement('p', { className: 'p-el', key: 'p' }, 'hi p tag');
	//ReactDOM.render(reactElementP, example1);

}

export function example2() {
	//var container = React.createElement('section', null, [ reactElementH1, reactElementP ]);
	//ReactDOM.render(container, example2);
}

export function example3() {
	var TodoList = React.createClass({
		render: function () {
			var createItem = function (itemText, index) {
				return <li>{index + 1} : {itemText} </li>;
			};

			return <ul>{this.props.joe.map(createItem)}</ul>;
		}
	});

	//ReactDOM.render(<TodoList joe={ [ 'Joe', 'Bharathy', 'Simon', 'Murali', 'Sai', 'Leila', 'Emanuele', 'Chris' ] } />, example3);
}

export function example4() {
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

	//var tt = React.createElement(Clock, null);
}

