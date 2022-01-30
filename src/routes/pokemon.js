import * as Ctrl from '../controllers/index.js';

import express from 'express';

const router = express.Router();

const pokemon = '/pokemon';

router.get(pokemon, Ctrl.PokemonController().getPokemon);
router.post(pokemon + '/:fileName', Ctrl.PokemonController().postCsvParse);

export default router;
