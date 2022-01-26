import express from 'express';
import log from '../utils/logger.js';

const router = express.Router();

router.get('/api', (req, res) => {
  log.info('Calling API welcome');
  res.json({
    message: 'welcome at the Pokemon API 🖖🏼👋🏿🔥',
  });
});

export default router;
