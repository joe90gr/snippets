import React from 'react';
import { shallow } from 'enzyme';

import Navigation from 'common/components/Navigation.jsx';

const LINKS = {
	'/': {
		title: 'Link Lists',
		external: false
	},
	'/route1': {
		title: 'Link Lists',
		external: false
	},
	'/route3': {
		title: 'Link Lists',
		external: true
	}
};

describe('given a Navigation component', () => {
	let navigation;

	describe('when it NOT provided with a set of URI`s', () => {
		before(() => navigation = shallow(<Navigation linkList={ {} } />));

		it('should NOT render any links', () => {
			assert(navigation.find('li').isEmpty());
		});
	});

	describe('when it is provided with a set of URI`s', () => {
		before(() => navigation = shallow(<Navigation linkList={ LINKS } />));

		it('should render the correct number of links', () => {
			expect(navigation.find('li')).to.have.length(Object.keys(LINKS).length);
		});

		it('should contain the correct route for each link', () => {
			navigation.find('InjectActions').forEach((node, index) => {
				expect(node.props().to).to.equal(Object.keys(LINKS)[index]);
			});
		});

		it('should render the correct title for each link', () => {
			navigation.find('InjectActions').forEach((node) => {
				expect(node.children().text()).to.equal(LINKS[node.props().to].title);
			});
		});

		it('should contain the correct external setting for each link', () => {
			navigation.find('InjectActions').forEach((node) => {
				expect(node.props().external).to.equal(LINKS[node.props().to].external);
			});
		});
	});

});
