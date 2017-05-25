import Dispatcher from 'utils/Dispatcher';
import configConstants from 'platform/constants/ConfigConstants';

import { useService } from 'utils/registry';

export default {
	loadConfig: function () {
		const configService = useService('configService');

		Dispatcher.dispatch({
			actionType: configConstants.LOAD_CONFIG,
			data: configService.fetchConfigs()
		});
	}
};
