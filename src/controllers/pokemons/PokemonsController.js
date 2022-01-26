import { Pokemons } from '../../database/Models/pokemons.js';
// import PokemonsService from '../../services/pokemons.js';
import log from '../../utils/logger.js';

class PokemonsController {
  async getPokemons(req, res, next) {
    try {
      // const scrappy = await Pokemons.transaction(async (trx) => {
      //   const jennifer = await Pokemons.query(trx);
      //   return jennifer;
      // });
      const r = await Pokemons.query();
      // const pokemons = await PokemonsService().getPokemons();
      // const pokemons = await Pokemons.query();
      // if (pokemons) res.json(pokemons);
      console.log('scrappy', r);
      res.json({
        msg: 'Pokedex is empty!!!',
      });
    } catch (error) {
      log.error('Error! %s', error.message);
      next(error);
    }
  }
}

export default PokemonsController;
