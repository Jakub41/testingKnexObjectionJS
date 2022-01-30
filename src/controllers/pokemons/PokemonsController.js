import PokemonsService from '../../services/pokemons.js';
import lodash from 'lodash';
import log from '../../utils/logger.js';
import { parseCsv } from '../../utils/parseCsv.js';

const service = PokemonsService();

const { isEmpty } = lodash;
class PokemonsController {
  async getPokemons(req, res, next) {
    try {
      log.info('Calling GET Pokemons controller');
      const { limit, order, direction } = req.query;
      const pokemons = await service.getPokemons(limit, order, direction);
      if (isEmpty(pokemons)) return res.json({ msg: 'Sorry no data! 🙈' });
      res.json(pokemons);
    } catch (error) {
      log.error('Fetching Pokemons Error! %s', error.message);
      next(error);
    }
  }

  async postCsvParse(req, res, next) {
    try {
      log.info('Calling POST parse controller');
      const { fileName } = req.params;
      const parsedCsv = await parseCsv(fileName);
      await service.postPokemons(parsedCsv);
      res.json(parsedCsv);
    } catch (error) {
      log.error('Parsing Error! %s', error.message);
      next(error);
    }
  }
}

export default function pokemonsController() {
  return new PokemonsController();
}
