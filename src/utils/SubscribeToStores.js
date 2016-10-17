import React from 'react';
import { useStore } from 'src/registry';

export default function SubscribeToStores(Component, storeManifest) {
	return React.createClass({
		displayName: 'SubscribeToStores',

		getInitialState() {
			return this.getStateFromStores(this.props);
		},

		componentDidMount() {
			Object.keys(storeManifest).forEach(store => useStore(store).addChangeListener(this.storeUpdateHandler));
		},

		componentWillUnmount() {
			Object.keys(storeManifest).forEach(store => useStore(store).removeChangeListener(this.storeUpdateHandler));
		},

		storeUpdateHandler() {
			if (this.isMounted()) {
				this.setState(this.getStateFromStores(this.props));
			}
		},

		getStateFromStores() {
			var storeStates = {};

			Object.keys(storeManifest).forEach(store => {
				storeStates[store] = {};
				storeManifest[store].forEach(storeProperty => {
					let storeInstance = useStore(store);

					if (storeInstance) {
						if (this._isFunction(storeInstance[storeProperty])) {
							storeStates[store][storeProperty] = storeInstance[storeProperty]();
						} else {
							storeStates[store][storeProperty] = storeInstance[storeProperty];
						}
					} else {
						throw new Error(`${store} does not exist in the repository`);
					}
				});
			});

			return storeStates;
		},

		_isFunction(item) {
			return typeof item === 'function';
		},

		render() {
			return <Component {...this.props} {...this.state} />;
		}
	});
}

