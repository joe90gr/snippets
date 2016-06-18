import storeRepository from 'utils/StoreRepository';

var MockStoreWithDependantStores = class Test1 {
	constructor() {
		this.use = [ 'test4', 'test2' ];
	}
	_onDispatch() {}
};

var MockStore2 = class Test2 {_onDispatch() {}};
var MockStore3 = class Test3 {_onDispatch() {}};

var DependantMockStore = class Test4 {_onDispatch() {}};

describe('Given the StoreRepository', () => {
	before(() => {
		storeRepository
			.register(MockStoreWithDependantStores)
			.register(MockStore2)
			.register(MockStore3)
			.register(DependantMockStore)
			.bindStoreUsages();
	});

	after(() => {
		storeRepository.stores = {};
	});

	describe('when registering multiple stores', () => {
		var storeMock;

		before(() => {
			storeMock = storeRepository.getRegisteredStores().test1;
		});

		it('should able to retrieve a particular store using a decapitalized class name indentifier', () => {
			var unCapitalizedStoreName = unCapitalise(MockStore2.name);
			expect(storeRepository.getStore(unCapitalizedStoreName)).to.be.an.instanceOf(MockStore2);
		});

		it('should able to retrieve all stores.', () => {
			expect(storeRepository.getRegisteredStores()).to.have.all.keys('test1', 'test2', 'test3', 'test4');
		});

		it('should contain a dispatcher callback method.', () => {
			expect(storeMock.dispatcher).to.exist;
		});

		it('should contain a dispatchToken', () => {
			expect(storeMock.dispatchToken).to.exist;
		});

		describe('when an action is triggered', () => {
			it('should trigger the _onDispatch callback', () => {
				var spy = sinon.spy(storeMock, '_onDispatch');

				storeMock.dispatcher.dispatch({});

				expect(spy).to.be.calledOnce;
			});
		});

		describe('and the store uses another store', function () {
			it('should contain that store as a property of the class', () => {
				expect(storeMock[unCapitalise(DependantMockStore.name)]).to.exist;
				expect(storeMock[unCapitalise(MockStore2.name)]).to.exist;
			});
		});
	});
});

function unCapitalise(name) {
	return `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
}
