import React from 'react';
import { useStore } from 'src/registry';

import deepEqual from 'deep-equal';

export default function SubscribeToStores(Component, storeManifest) {
	return class SubscribeToStores extends React.Component {
		constructor(props) {
			super(props);
			this.storeUpdateHandlerContext = this.storeUpdateHandler.bind(this);
			this.state = this._getStateFromStores(this.props);
		}

		componentDidMount() {
			Object.keys(storeManifest).forEach(store => useStore(store).addChangeListener(this.storeUpdateHandlerContext));
		}

		componentWillUnmount() {
			Object.keys(storeManifest).forEach(store => useStore(store).removeChangeListener(this.storeUpdateHandlerContext));
		}

		storeUpdateHandler() {
			const stateFromStores = this._getStateFromStores(this.props);
			const isEqual = deepEqual(this.state, stateFromStores);

			if (!isEqual) {
				this.setState(stateFromStores);
			}
		}

		_getStateFromStores() {
			var storeStates = {};

			Object.keys(storeManifest).forEach(store => {
				storeManifest[store].forEach(storeProperty => {
					let storeInstance = useStore(store);

					if (storeInstance) {
						const storeInstancePropState = storeInstance.getState()[storeProperty];

						if (this._isFunction(storeInstancePropState)) {
							storeStates[storeProperty] = storeInstancePropState();
						} else {
							storeStates[storeProperty] = storeInstancePropState;
						}
					} else {
						throw new Error(`${store} does not exist in the repository`);
					}
				});
			});

			return storeStates;
		}

		_isFunction(item) {
			return typeof item === 'function';
		}

		render() {
			return <Component {...this.props} {...this.state} />;
		}
	};
}
