var express = require('express');
var router = express.Router();
import { examples } from '../common/reactExamples/examples.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'REACT JS example', model: [ examples ] });
});

module.exports = router;
