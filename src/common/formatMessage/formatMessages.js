import localizedTranslations from './translations.js';
import formatMessage from 'format-message';

export function formatMessages(printHTML) {
	var message, message1;

	formatMessage.setup({
		locale: 'en-US',
		translations:  localizedTranslations,
		generateId: '',//require('format-message-generate-id/underscored_crc32'), // function to generate a missing id from the default message 
		missingReplacement: '!!NOT TRANSLATED!!',
		missingTranslation: 'ignore',
		formats: {
			number: {
				EUR: { style: 'currency', currency: 'EUR' },
				USD: { style: 'currency', currency: 'USD' }
			},
			date: {
				weekday: { weekday: 'long' }
			}
		}
	});

	message = formatMessage('app.lobby', {
		name: formatMessage('app.lobby.name'),
		n: 400,
		d: new Date()
	});

	message1 = formatMessage('app.lobby', {
		name: formatMessage('app.lobby.name', {}, 'es-ES'),
		n: 400,
		d: new Date()
	}, 'es-ES');

	printHTML(message);
	printHTML(message1);

	return message;
}
