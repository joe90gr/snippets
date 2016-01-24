import express from 'express';
import { formatMessages } from '../common/formatMessage/formatMessages.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'FormatMessages', model: [ formatMessages ] });
});

module.exports = router;
