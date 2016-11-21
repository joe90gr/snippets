import express from 'express';

import UserAction from 'actions/UserAction';

var router = express.Router();

router.post('/login', UserAction.authenticateUser);
router.get('/logout', UserAction.invalidateUser);

export default router;
