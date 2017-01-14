import React from 'react';

import linkList from 'configuration/main-navigation';

import Navigation from 'views/components/Navigation';
import LoginForm from 'views/LoginForm';
import ContentTypes from '../contentTypes/ContentTypes';

function LeftNav({ routes, user, errors, page, layoutClass }) {
	return (
		<div>
			<LoginForm user={ user } errors={ errors } />
			<Navigation linkList= { linkList } routes={ routes } />
			<div className={ `content ${layoutClass }`}>
				{ React.createElement(ContentTypes[page.type], {
					title: page.title,
					model: page.content
				}) }
			</div>
		</div>
	);
}

LeftNav.displayName = 'LeftNav';
LeftNav.propTypes = {
	routes: React.PropTypes.object,
	user: React.PropTypes.object,
	errors: React.PropTypes.string,
	page: React.PropTypes.object,
	layoutClass: React.PropTypes.string
};

export default LeftNav;
