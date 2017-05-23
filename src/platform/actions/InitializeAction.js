import Dispatcher from 'utils/Dispatcher';

import { useService } from 'utils/registry';

export default {
	loadConfig: function () {
		const configService = useService('configService');

		Dispatcher.dispatch({
			actionType: 'LOAD_CONFIG',
			data: configService.fetchConfigs()
		});
	}
};
