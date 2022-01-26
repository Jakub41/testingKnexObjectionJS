import express from 'express';
import log from '../utils/logger.js';
import pokemons from './pokemons.js';
import welcome from './welcome.js';

const router = express.Router();

router.use(pokemons);
router.use(welcome);

export default router;
