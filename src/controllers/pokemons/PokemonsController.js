import PokemonsService from '../../services/pokemons.js';
import log from '../../utils/logger.js';

class PokemonsController {
  async getPokemons(req, res, next) {
    try {
      const pokemons = await PokemonsService().getPokemons();
      if (pokemons) res.json(pokemons);
      res.json({
        msg: 'Pokedex is empty!!!',
      });
    } catch (error) {
      log.error('Error! %s', error.message);
      next(error);
    }
  }
}

export default function pokemonsController() {
  return new PokemonsController();
}
