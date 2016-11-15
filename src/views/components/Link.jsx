import React from 'react';
import NavigateAction from 'actions/NavigateActionCreator';

class Link extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={ this.props.location } onClick={ this.clickFunction }> { this.props.name } </a>
		);
	}

	clickFunction(e) {
		e.preventDefault();
		NavigateAction.navigateTo(e.target.getAttribute('href'));
	}
}

Link.displayName = 'Link';

Link.propTypes = {
	name: React.PropTypes.string,
	location: React.PropTypes.string
};

export default Link;
