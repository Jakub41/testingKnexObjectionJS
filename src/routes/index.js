import express from 'express';
import log from '../utils/logger.js';
import pokemons from './pokemons.js';

const router = express.Router();

router.get('/api', (req, res) => {
  log.info('Calling API root');
  res.json({
    message: 'welcome at the Pokemon API',
  });
});

router.use(pokemons);
// router.use('/pokemon', pokemon);

export default router;
