import React from 'react';
import { string, object } from 'prop-types';

import contentRepository from 'common/content/contentRepository';
import linkList from 'platform/configuration/main-navigation';
import Navigation from 'common/components/Navigation';
import LoginForm from 'common/components/LoginForm';

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
	route: object,
	routes: object,
	user: object,
	errors: string,
	page: object,
	layoutClass: string
};

export default LeftNav;
