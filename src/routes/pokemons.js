import * as Ctrl from '../controllers/index.js';

import express from 'express';

const router = express.Router();

const pokemons = '/pokemons';

router.get(pokemons, Ctrl.PokemonsController().getPokemons);
router.post(pokemons + '/:fileName', Ctrl.PokemonsController().postCsvParse);

export default router;
