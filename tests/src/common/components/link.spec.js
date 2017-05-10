import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'common/components/Link.jsx';

const TO = '/route1';
const TITLE = 'My Link Title';
const INBOUND_LINK = false;
const OUTBOUND_LINK = true;

describe('Given a Link component', () => {
	const actions = {
		NavigateAction: {
			navigateTo: sinon.spy()
		}
	};

	const eventMock = {
		preventDefault: sinon.spy(),
		target: {
			getAttribute: sinon.stub().returns('/hello')
		}
	};

	let link;

	function resetAll() {
		actions.NavigateAction.navigateTo.reset();
		eventMock.preventDefault.reset();
	}

	describe('when rendered', function () {
		before(() => link = shallow(<Link to={ TO } external={ INBOUND_LINK } { ...actions }>{ TITLE }</Link>));

		it('should have one anchor tag', () => {
			expect(link.find('a')).to.have.length(1);
		});

		it('should have a href set', () => {
			expect(link.find('a').props().href).to.equal(TO);
		});

		it('should render the link title', () => {
			expect(link.find('a').text()).to.equal(TITLE);
		});

		describe('and the link is internal', () => {
			describe('when the user clicks the link', () => {
				before(() => link.find('a').simulate('click', eventMock));

				it('should call the preventDefault', () => {
					assert(eventMock.preventDefault.calledOnce);
				});

				it('should call the navigateTo Action only once', () => {
					assert(actions.NavigateAction.navigateTo.calledOnce);
				});

				it('should call the navigateTo Action with the correct URI', () => {
					assert(actions.NavigateAction.navigateTo.calledWith('/hello'));
				});
			});
		});

		describe('and the link is external', () => {
			before(() => {
				resetAll();
				link = shallow(<Link to={ TO } external={ OUTBOUND_LINK } { ...actions }>{ TITLE }</Link>);
			});

			describe('when the user clicks the link', () => {
				before(() => link.find('a').simulate('click', eventMock));

				it('should NOT call the preventDefault', () => {
					assert(eventMock.preventDefault.notCalled);
				});

				it('should NOT call the navigateTo Action', () => {
					assert(actions.NavigateAction.navigateTo.notCalled);
				});
			});
		});
	});
});
