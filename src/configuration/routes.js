import snippetPages from 'configuration/snippet-routes';

export default {
	'/': {
		id: 'examples',
		page: {
			type: 'Snippets',
			title: 'Examples',
			layout: 'LeftNavLayout',
			content: [ 'examples' ]
		}
	},
	'/snippets': {
		id: 'snippets',
		page: {
			type: 'ExternalContent',
			title: 'Testing',
			layout: 'RightNavLayout',
			content: [ '/testing-url' ]
		}
	},
	'/snippets/:snippet': {
		id: 'snippets',
		pages: snippetPages
	}
};
