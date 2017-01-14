import React from 'react';
import Link from './Link';

function Navigation({ linkList = [], routes = { '': { title: '', external: false } } }) {
	return (
		<ul className="links">
			{linkList.map((route, index) => {
				const { external, page: { title } } = routes[route];

				return (
					<li key={`link-${index + 1}`}><Link to={ route } external={ external }>{ title }</Link></li>
				);
			})}
		</ul>
	);
}

Navigation.displayName = 'Navigation';
Navigation.propTypes = {
	linkList: React.PropTypes.array,
	routes: React.PropTypes.object
};

export default Navigation;
