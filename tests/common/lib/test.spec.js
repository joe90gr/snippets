var React = require('react');
var ReactDom = require('react-dom');

describe('Component', () => {
	it('should work', () => {
		expect(true).to.be.true;
	});

	it('should not work', () => {
		var { test } = { a: true, test: false };
		var test = <h1>Hello, world!</h1>;
		expect(test).not.to.be.true;
	});
});
