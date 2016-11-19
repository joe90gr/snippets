import React from 'react';
import Link from './Link';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="links">
				<li><Link to="/">Home</Link></li>
				<li><Link to="examples">Examples</Link></li>
				<li><Link to="iterators">Iterators</Link></li>
				<li><Link to="lists">Lists</Link></li>
				<li><Link to="linked-lists">Linked Lists</Link></li>
				<li><Link to="hashmap">Hashmap</Link></li>
				<li><Link to="stack">Stack</Link></li>
				<li><Link to="promises">Promises</Link></li>
				<li><Link to="classes">Classes</Link></li>
				<li><Link to="queue">Queue</Link></li>
				<li><Link to="format-messages">Format Messages</Link></li>
				<li><Link to="algorithms">Algorithms</Link></li>
				<li><Link to="factory">Factory</Link></li>
			</ul>
		);
	}
}

Navigation.displayName = 'Navigation';

export default Navigation;
