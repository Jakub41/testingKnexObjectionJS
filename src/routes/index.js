import dummy from './dummy.js';
import express from 'express';
import pokemon from './pokemon.js';
import pokemons from './pokemons.js';
import welcome from './welcome.js';

const router = express.Router();

router.use(pokemons);
router.use(pokemon);
router.use(welcome);
router.use(dummy);

export default router;
