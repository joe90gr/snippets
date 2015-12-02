// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

export default function examples() {
	var example1 = document.getElementById('example-1');
	var example2 = document.getElementById('example-2');
	var example3 = document.getElementById('example-3');
	var example4 = document.getElementById('example-4');

	var reactElementH1 = React.createElement('h1', { className: 'h1-c', key: 'header' }, 'Hello World');
	var reactElementP = React.createElement('p', { className: 'p-el', key: 'p' }, 'hi p tag');

	var container = React.createElement('section', null, [ reactElementH1, reactElementP ]);

	var TodoList = React.createClass({
		render: function () {
			var createItem = function (itemText, index) {
				return <li>{index + 1} : {itemText} </li>;
			};

			return <ul>{this.props.joe.map(createItem)}</ul>;
		}
	});

	var ReactClass = React.createClass({
		render: function () {
		//return <p>test - {this.props.myprop}</p>;
			return React.createElement('p', { className: this.props.myprop, key: 'p' }, this.props.myprop);
		}
	});

	var el = React.createElement(ReactClass, { myprop: 'dddd' });

	ReactDOM.render(reactElementP, example1);

	ReactDOM.render(container, example2);

	ReactDOM.render(<TodoList joe={ [ 'Joe', 'Bharathy', 'Simon', 'Murali', 'Sai', 'Leila', 'Emanuele', 'Chris' ] } />, example3);

	ReactDOM.render(el, example4);
}
