import React from 'react';

import contentRepository from 'common/content/contentRepository';
import linkList from 'platform/configuration/main-navigation';
import Navigation from 'common/components/Navigation';
import LoginForm from 'common/components/LoginForm';

import LazilyLoad, { importLazy, LazilyLoadFactory } from 'platform/views/viewControllers/LazilyLoad';

function RightNav({ route, routes, user, errors, page: { key }, layoutClass }) {
	return (
		<div id={ route.id }>
			<LoginForm user={ user } errors={ errors } />
			<LazilyLoad modules={{ Test: () => importLazy( import('common/components/async/Test')) }}>
				{
					({ Test }) => (
						<Test/>
					)
				}
			</LazilyLoad>
			<div className={ `content ${layoutClass}`}>
				{ contentRepository[key] }
			</div>
			<Navigation linkList= { linkList } routes={ routes } />
		</div>
	);
}

RightNav.displayName = 'RightNav';
RightNav.propTypes = {
	route: React.PropTypes.object,
	routes: React.PropTypes.object,
	user: React.PropTypes.object,
	errors: React.PropTypes.string,
	page: React.PropTypes.object,
	layoutClass: React.PropTypes.string
};

export default RightNav;
