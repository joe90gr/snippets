import { useStore } from 'src/storeRegistry';

export function use(storeName, onChangeHandler) {
	return {
		getInitialState: function () {
			this[storeName] = useStore(storeName);

			return {};
		},

		componentDidMount: function () {
			this[storeName].addChangeListener(this[onChangeHandler]);
		},

		componentWillUnmount: function () {
			this[storeName].removeChangeListener(this[onChangeHandler]);
			delete this[storeName];
		}
	};
}
