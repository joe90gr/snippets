import React from 'react';

export function examples() {
	var reactElementP = React.createElement('p', { className: 'p-el', key: 'p' }, 'hi p tag');
	return reactElementP;
}

export function example1() {
	function TodoList({ joe }) {
		const createItem = function (itemText, index) {
			return <li key={'list-' + index}>{index + 1} : {itemText} </li>;
		};

		return <ul>{joe.map(createItem)}</ul>;
	}

	TodoList.displayName = 'TodoList';

	return <TodoList joe={ [ 'Joe', 'Bharathy', 'Simon', 'Murali', 'Sai', 'Leila', 'Emanuele', 'Chris' ] } />;
}

export function example2() {
	class Clock extends React.Component {
		constructor(props) {
			super(props);
			this.tickContext = this.tick.bind(this);
			this.state = { time: this._getTime() };
		}

		tick() {
			this.setState({ time: this._getTime() });
		}

		componentDidMount() {
			this.interval = setInterval(this.tickContext, 1000);
		}

		componentWillUnmount() {
			clearInterval(this.interval);
		}

		render() {
			return (
				<div>Time is: {this.state.time}</div>
			);
		}

		_getTime() {
			var date = new Date();
			return date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds();
		}
	}

	Clock.displayName = 'Clock';

	return React.createElement(Clock, null);
}

export function example3() {}

export function example4() {}

