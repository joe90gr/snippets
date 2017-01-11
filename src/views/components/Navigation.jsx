import React from 'react';
import Link from './Link';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="links">
				{this.props.linkList.map((route, index) => this._createLink(route, index))}
			</ul>
		);
	}

	_createLink(route, index) {
		const { external, page: { title } } = this.props.routes[route];

		return (
			<li key={`link-${index + 1}`}><Link to={ route } external={ external }>{ title }</Link></li>
		);
	}
}

Navigation.displayName = 'Navigation';

Navigation.defaultProps = {
	linkList: [],
	routes: {
		'': {
			title: '', external: false
		}
	}
};

Navigation.propTypes = {
	linkList: React.PropTypes.array,
	routes: React.PropTypes.object
};

export default Navigation;
