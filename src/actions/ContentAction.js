import Dispatcher from 'utils/Dispatcher';
import ContentConstants from 'constants/ContentConstants';

export default {
	createPage: function (data) {
		Dispatcher.dispatch({
			actionType: ContentConstants.CREATE_PAGE,
			data: data
		});
	}
};
