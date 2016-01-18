var express = require('express');
var router = express.Router();
import { adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward } from '../common/dataStructures/lists.js';

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Lists', model: [ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ] });
});

module.exports = router;
