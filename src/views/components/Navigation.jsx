import React from 'react';
import Link from './Link';

class Navigation extends React.Component {
	render() {
		return (
			<ul className="links">
				<li><Link name="Home" location="/" /></li>
				<li><Link name="Examples" location="examples" /></li>
				<li><Link name="Iterators" location="iterators" /></li>
				<li><Link name="Lists" location="lists" /></li>
				<li><Link name="Linked Lists" location="linked-lists" /></li>
				<li><Link name="Hashmap" location="hashmap" /></li>
				<li><Link name="Stack" location="stack" /></li>
				<li><Link name="Promises" location="promises" /></li>
				<li><Link name="Classes" location="classes" /></li>
				<li><Link name="Queue" location="queue" /></li>
				<li><Link name="Format Messages" location="format-messages" /></li>
				<li><Link name="Algorithms" location="algorithms" /></li>
				<li><Link name="Factory" location="factory" /></li>
			</ul>
		);
	}
}

Navigation.displayName = 'Navigation';

export default Navigation;
