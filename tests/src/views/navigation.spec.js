import React from 'react';
import { shallow } from 'enzyme';

import Navigation from 'views/components/Navigation.jsx';

const LINKS = [ '/', '/route1', '/route3' ];
const ROUTINGDATA = {
	'/': {
		external: false,
		title: 'Home'
	},
	'/route1': {
		external: false,
		title: 'Contact'
	},
	'/route2': {
		external: false,
		title: 'About'
	},
	'/route3': {
		external: true,
		title: 'Info'
	},
	'/route4': {
		external: false,
		title: 'More info'
	}
};

describe('given a Navigation component', () => {
	describe('when it is provided with a set of routes', () => {
		let navigation;

		before(() => {
			navigation = shallow(<Navigation linkList={ LINKS } routes={ ROUTINGDATA } />);
		});

		it('should render the correct number of links', () => {
			expect(navigation.find('li')).to.have.length(LINKS.length);
		});

		it('should contain the correct route for each link', () => {
			navigation.find('Link').forEach((node, index) => {
				expect(node.props().to).to.equal(LINKS[index]);
			});
		});

		it('should correctly render the title for each link', () => {
			navigation.find('Link').forEach((node, index) => {
				expect(node.children().text()).to.equal(ROUTINGDATA[LINKS[index]].title);
			});
		});

		it('should contain the correct external setting for each link', () => {
			navigation.find('Link').forEach((node, index) => {
				expect(node.props().external).to.equal(ROUTINGDATA[LINKS[index]].external);
			});
		});
	});

});
