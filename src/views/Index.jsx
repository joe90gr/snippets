import React from 'react';
import Head from './components/Head';
import Body from './components/Body';

function Index() {
	return (
		<html>
			<Head />
			<Body />
		</html>
	);
}

Index.displayName = 'Index';

export default Index;
