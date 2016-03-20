import React from 'react';
import Link from './Link';

export default React.createClass({
	displayName: 'Navigation',

	render: function () {
		return (
			<ul className="links">
				<li><Link name="Examples" location="" /></li>
				<li><Link name="Iterators" location="iterators" /></li>
				<li><Link name="Lists" location="lists" /></li>
				<li><Link name="Linked Lists" location="linked-lists" /></li>
				<li><Link name="Hashmap" location="hashmap" /></li>
				<li><Link name="Stack" location="stack" /></li>
				<li><Link name="Promises" location="promises" /></li>
				<li><Link name="Classes" location="classes" /></li>
				<li><Link name="Queue" location="queue" /></li>
				<li><Link name="Format Fessages" location="format-messages" /></li>
				<li><Link name="Algorithms" location="algorithms" /></li>
				<li><Link name="Factory" location="factory" /></li>
			</ul>
		);
	}
});
