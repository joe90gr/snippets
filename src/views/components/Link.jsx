import React from 'react';

import InjectActions from 'views/viewControllers/InjectActions';

import NavigateAction from 'actions/NavigateActionCreator';

export class Link extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={ this.props.to } onClick={ this.clickFunction.bind(this) }>{ this.props.children }</a>
		);
	}

	clickFunction(e) {
		const { navigateTo } = this.props.NavigateAction;

		if (!this.props.external) {
			e.preventDefault();
			navigateTo(e.target.getAttribute('href'));
		}
	}
}

Link.displayName = 'Link';

Link.propTypes = {
	children: React.PropTypes.string,
	to: React.PropTypes.string,
	external: React.PropTypes.bool,
	NavigateAction: React.PropTypes.object
};

export default InjectActions(Link, { NavigateAction });
