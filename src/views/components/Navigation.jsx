import React from 'react';
import Link from './Link';

function Navigation({ linkList = {} }) {
	return (
		<ul className="links">
			{Object.keys(linkList).map((route, index) => {
				const { title, external } = linkList[route];

				return (
					<li key={`link-${index + 1}`}><Link to={ route } external={ external }>{ title }</Link></li>
				);
			})}
		</ul>
	);
}

Navigation.displayName = 'Navigation';
Navigation.propTypes = {
	linkList: React.PropTypes.object
};

export default Navigation;
