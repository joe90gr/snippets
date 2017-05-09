import React from 'react';

import InjectActions from 'views/viewControllers/InjectActions';

import NavigateAction from 'actions/NavigateActionCreator';

export function Link({ NavigateAction: { navigateTo }, to, external, children }) {
	function clickFunction(e) {
		if (!external) {
			e.preventDefault();
			navigateTo(e.target.getAttribute('href'));
		}
	}

	return (
		<a href={ to } onClick={ clickFunction }>{ children }</a>
	);
}

Link.displayName = 'Link';
Link.propTypes = {
	children: React.PropTypes.string,
	to: React.PropTypes.string,
	external: React.PropTypes.bool,
	NavigateAction: React.PropTypes.object
};

export default InjectActions(Link, { NavigateAction });
