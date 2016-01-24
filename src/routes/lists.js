import express from 'express';
import { adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward } from '../common/dataStructures/lists.js';

var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Lists', model: [ adtListAppendRemove, adtListNextPrevious, adtListIterateFoward, adtListIterateBackward ] });
});

module.exports = router;
