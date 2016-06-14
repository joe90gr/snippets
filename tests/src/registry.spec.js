import serviceRepository from 'utils/ServiceRepository';
import storeRepository from 'utils/StoreRepository';
import { useService, useStore, serialize } from 'src/registry';

describe('Given the ..', () => {
	var MockServiceClassConstructor = sinon.spy();
	var MockStoreClassConstructor = sinon.spy();
	var MockSerialize = sinon.spy();

	var MOCK_SERIALIZED_OBJECT1 = { test1: 'test MockStoreClass1' };
	var MOCK_SERIALIZED_OBJECT2 = { test2: 'test MockStoreClass2' };

	var MockService1 = class mockService1 {
		constructor() {
			MockServiceClassConstructor();
		}
	};
	var MockService2 = class mockService2 {};

	var MockStoreClass1 = class MockStoreClass1 {
		constructor() {
			MockStoreClassConstructor();
		}
		serialize() {
			MockSerialize();
			return MOCK_SERIALIZED_OBJECT1;
		}
	};
	var MockStoreClass2 = class MockStoreClass2 {
		serialize() {
			return MOCK_SERIALIZED_OBJECT2;
		}
	};
	var MockStoreClass3 = class MockStoreClass3 {};

	serviceRepository
		.register(MockService1)
		.register(MockService2);

	storeRepository
		.register(MockStoreClass1)
		.register(MockStoreClass2)
		.register(MockStoreClass3)
		.bindStoreUsages();

	describe('given a set of registered services', () => {
		describe('when a service is instantiated', () => {
			it('should call the constructor only once', () => {
				assert(MockServiceClassConstructor.calledOnce);
			});
		});
		describe('when accessing the service', () => {
			it('should return the specified service method.', () => {
				expect(useService('mockService1')).to.be.an.instanceof(MockService1);
				expect(useService('mockService2')).to.be.an.instanceof(MockService2);
			});

			describe('and a store is specified', () => {
				it('should not return anything.', () => {
					expect(useService('mockStoreClass1')).to.be.equal(undefined);
				});
			});
		});
	});

	describe('given a set of registered stores', () => {
		describe('when a store is instantiated', () => {
			it('should call the constructor only once', () => {
				assert(MockStoreClassConstructor.calledOnce);
			});
		});

		describe('when accessing the store', () => {
			it('should return the specified store instance.', () => {
				expect(useStore('mockStoreClass1')).to.be.an.instanceof(MockStoreClass1);
				expect(useStore('mockStoreClass2')).to.be.an.instanceof(MockStoreClass2);
				expect(useStore('mockStoreClass3')).to.be.an.instanceof(MockStoreClass3);
			});

			describe('and a service is specified', () => {
				it('should not return anything.', () => {
					expect(useStore('mockService1')).to.be.equal(undefined);
				});
			});
		});

		describe('when serialized is called', () => {
			it('should return the serialized objects only from stores that implement serialize method', () => {
				expect(serialize()).to.eql({
					mockStoreClass1: MOCK_SERIALIZED_OBJECT1,
					mockStoreClass2: MOCK_SERIALIZED_OBJECT2
				});
			});

			it('should be called only once per store', () => {
				assert(MockSerialize.calledOnce);
			});
		});
	});
});
