var express = require('express');
var router = express.Router();
import { hashMaps, hashMapIntegers } from '../common/dataStructures/hashMaps.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Hashmaps', model: [ hashMaps, hashMapIntegers ] });
});

module.exports = router;
