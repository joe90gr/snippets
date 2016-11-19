import React from 'react';
import NavigateAction from 'actions/NavigateActionCreator';

class Link extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={ this.props.to } onClick={ this.clickFunction }> { this.props.children } </a>
		);
	}

	clickFunction(e) {
		e.preventDefault();
		NavigateAction.navigateTo(e.target.getAttribute('href'));
	}
}

Link.displayName = 'Link';

Link.propTypes = {
	children: React.PropTypes.string,
	to: React.PropTypes.string
};

export default Link;
