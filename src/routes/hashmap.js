import express from 'express';
import { hashMaps, hashMapIntegers } from '../common/dataStructures/hashMaps.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Hashmaps', model: [ hashMaps, hashMapIntegers ] });
});

module.exports = router;
