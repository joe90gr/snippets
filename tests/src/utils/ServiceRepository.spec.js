import serviceRepository from 'utils/ServiceRepository';

var MockService1 = class Test1 {};
var MockService2 = class Test2 {};

describe('Given the ServiceRepository', () => {
	before(() => {
		serviceRepository
			.register(MockService1)
			.register(MockService2);
	});

	after(() => {
		serviceRepository.services = {};
	});

	describe('when registering multiple services', () => {
		it('should have the services', () => {
			expect(serviceRepository.getService('test1')).to.be.an.instanceOf(MockService1);
			expect(serviceRepository.getService('test2')).to.be.an.instanceOf(MockService2);
		});

		it('should able to retrieve all services.', () => {
			expect(serviceRepository.getRegisteredServices()).to.be.eql({
				test1: {},
				test2: {}
			});
		});
	});
});
