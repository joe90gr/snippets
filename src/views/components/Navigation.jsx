import React from 'react';
import Link from './Link';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="links">
				{this.props.linkList.map((itemText, index) => this._createItem(itemText, index))}
			</ul>
		);
	}

	_createItem(itemText, index) {
		const { external, page: { title } } = this.props.routes[itemText];

		return (
			<li key={`link-${index + 1}`}><Link to={ itemText } external={ external }>{ title }</Link></li>
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
