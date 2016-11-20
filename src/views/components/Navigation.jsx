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
		const { title, external } = this.props.registeredRoutes[itemText];

		return (
			<li key={`link-${index + 1}`}><Link to={ itemText } external={ external }>{ title }</Link></li>
		);
	}
}

Navigation.displayName = 'Navigation';

Navigation.propTypes = {
	registeredRoutes: React.PropTypes.object,
	linkList: React.PropTypes.array
};

export default Navigation;
