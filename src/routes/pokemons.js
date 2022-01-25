import { PokemonsController } from '../controllers/index.js';
import express from 'express';
import log from '../../src/utils/logger.js';

const router = express.Router();

const pokemonCtrl = PokemonsController();

router.use('/pokemons', pokemonCtrl.getPokemons);

export default router;
