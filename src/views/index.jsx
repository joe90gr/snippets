import React from 'react';
import Head from './components/Head';
import Body from './components/Body';

export default React.createClass({
	displayName: 'Index',

	render: function () {
		return (
			<html>
				<Head />
				<Body />
			</html>
		);
	}
});
