var express = require('express');
var router = express.Router();
import { formatMessages } from '../common/formatMessage/formatMessages.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'FormatMessages', model: [ formatMessages ] });
});

module.exports = router;
