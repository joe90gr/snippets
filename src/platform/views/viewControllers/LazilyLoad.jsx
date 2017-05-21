import React from 'react';
import { object, func } from 'prop-types';

class LazilyLoad extends React.Component {
	constructor() {
		super(...arguments);
		this.state = { isLoaded: false };
	}

	componentDidMount() {
		this._isMounted = true;
		this.load();
	}

	componentDidUpdate(previous) {
		if (this.props.modules === previous.modules) {
			return null;
		}

		this.load();
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	load() {
		const { modules } = this.props;
		const keys = Object.keys(modules);

		this.setState({ isLoaded: false });

		Promise.all(keys.map((key) => modules[key]()))
			.then((values) => (keys.reduce((agg, key, index) => {
				agg[key] = values[index];
				return agg;
			}, {})))
			.then((result) => {
				if (!this._isMounted) {
					return null;
				}

				this.setState({ modules: result, isLoaded: true });
			});
	}

	render() {
		if (!this.state.isLoaded) {
			return null;
		}

		return React.Children.only(this.props.children(this.state.modules));
	}
}

LazilyLoad.displayName = 'LazilyLoad';
LazilyLoad.propTypes = {
	children: func.isRequired,
	modules: object
};

export const LazilyLoadFactory = (Component, modules) => {
	return (props) => (
		<LazilyLoad modules={modules}>
			{(mods) => <Component {...mods} {...props} />}
		</LazilyLoad>
	);
};

export const importLazy = (promise) => (
	promise.then((result) => result.default)
);

export default LazilyLoad;
