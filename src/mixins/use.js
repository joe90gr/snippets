import { useStore } from 'src/storeRegistry';

export function use(storeName) {
	return {
		getInitialState: function () {
			var _storeName = `${storeName.charAt(0).toUpperCase()}${storeName.slice(1)}`;

			this[storeName] = useStore(storeName);
			this.onChangeHandler = `_on${_storeName}Change`;

			return {};
		},

		componentDidMount: function () {
			this[storeName].addChangeListener(this[this.onChangeHandler]);
		},

		componentWillUnmount: function () {
			this[storeName].removeChangeListener(this[this.onChangeHandler]);
			delete this[storeName];
		}
	};
}
