import * as Ctrl from '../controllers/index.js';

import express from 'express';

const router = express.Router();

router.get('/dummy', Ctrl.TestController().getTestData);

export default router;
