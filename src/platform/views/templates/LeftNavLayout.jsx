import React from 'react';

import contentRepository from 'common/contentRepository';
import linkList from 'configuration/main-navigation';
import Navigation from 'views/components/Navigation';
import LoginForm from 'views/LoginForm';

function LeftNav({ route, routes, user, errors, page: { key }, layoutClass }) {
	return (
		<div id={ route.id }>
			<LoginForm user={ user } errors={ errors } />
			<Navigation linkList= { linkList } routes={ routes } />
			<div className={ `content ${layoutClass}`}>
				{ contentRepository[key] }
			</div>
		</div>
	);
}

LeftNav.displayName = 'LeftNav';
LeftNav.propTypes = {
	route: React.PropTypes.object,
	routes: React.PropTypes.object,
	user: React.PropTypes.object,
	errors: React.PropTypes.string,
	page: React.PropTypes.object,
	layoutClass: React.PropTypes.string
};

export default LeftNav;
