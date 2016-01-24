import React from 'react';

export default React.createClass({
	displayName: 'Navigation',

	render: function () {
		return (
			<ul className="links">
				<li><a href="/" className="home"> Home </a></li>
				<li><a href="/examples" className="examples"> React Examples</a></li>
				<li><a href="/iterators" className="iterators"> Iterators</a></li>
				<li><a href="/lists" className="lists"> Lists</a></li>
				<li><a href="/linked-lists" className="linked-list"> Linked List</a></li>
				<li><a href="/hashmap" className="hashmap"> Hashmap</a></li>
				<li><a href="/stack" className="stack"> Stack</a></li>
				<li><a href="/promises" className="promises"> Promises</a></li>
				<li><a href="/queue" className="queues"> Queues</a></li>
				<li><a href="/format-messages" className="format-messages"> Format Messages</a></li>
				<li><a href="/algorithms" className="algorithms"> Algorithms</a></li>
			</ul>
		);
	}
});
