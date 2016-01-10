var React = require('react');

var PrimaryContent = React.createClass({
	render: function () {
		return (
			<div className="content">
				<h1 className="main-title"> {this.props.title} </h1>
				<h1 className="welcome-title"> Welcome to {this.props.name}</h1>
				<pre id="example-1" className="example"></pre>
				<pre id="example-2" className="example"></pre>
				<pre id="example-3" className="example"></pre>
				<pre id="example-4" className="example"></pre>
				<pre id="example-5" className="example"></pre>
				<pre id="example-6" className="example"></pre>
				<pre id="example-7" className="example"></pre>
				<pre id="example-8" className="example"></pre>
				<pre id="example-9" className="example"></pre>
				<pre id="example-10" className="example"></pre>
				<pre id="example-11" className="example"></pre>
				<pre id="example-12" className="example"></pre>
				<pre id="example-13" className="example"></pre>
				<pre id="example-14" className="example"></pre>
			</div>
		);
	}
});

module.exports = PrimaryContent;
