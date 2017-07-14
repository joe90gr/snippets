import React from 'react';
import { string, object, bool } from 'prop-types';

import contentRepository from 'common/content/contentRepository';
import Navigation from 'common/components/Navigation';
import LoginForm from 'common/components/LoginForm';

function LeftNav({ route, user, errors, isAuthenticated, page: { key }, layoutClass, config: { mainNavigation, routes } }) {
	return (
		<div id={ route.id }>
			<LoginForm user={ user } errors={ errors } isAuthenticated={ isAuthenticated } />
			<Navigation linkList= { mainNavigation } routes={ routes } />
			<div className={ `content ${layoutClass}`}>
				{ contentRepository[key] }
			</div>
		</div>
	);
}

LeftNav.displayName = 'LeftNav';
LeftNav.propTypes = {
	route: object,
	user: object,
	errors: string,
	isAuthenticated: bool,
	page: object,
	layoutClass: string,
	config: object
};

export default LeftNav;
