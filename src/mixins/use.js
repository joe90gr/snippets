import { useStore } from 'src/registry';

export function use(storeName) {

	function capitalise(storeName) {
		var _storeName = `${storeName.charAt(0).toUpperCase()}${storeName.slice(1)}`;

		return `_on${_storeName}Change`;
	}

	return {
		getInitialState: function () {
			this[storeName] = useStore(storeName);

			return {};
		},

		componentDidMount: function () {
			this[storeName].addChangeListener(this[capitalise(storeName)]);
		},

		componentWillUnmount: function () {
			this[storeName].removeChangeListener(this[capitalise(storeName)]);
			delete this[storeName];
		}
	};
}
