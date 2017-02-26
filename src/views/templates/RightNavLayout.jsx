import React from 'react';

import linkList from 'configuration/main-navigation';

import Navigation from 'views/components/Navigation';
import LoginForm from 'views/LoginForm';
import ContentTypes from '../contentTypes/ContentTypes';

function RightNav({ route, routes, user, errors, page: { title, content, contentType }, layoutClass }) {
	return (
		<div id={ route.id }>
			<LoginForm user={ user } errors={ errors } />
			<div className={ `content ${layoutClass}`}>
				{ React.createElement(ContentTypes[contentType], {
					title,
					model: content
				}) }
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
