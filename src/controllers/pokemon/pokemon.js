import PokemonService from '../../services/pokemon.js';
import lodash from 'lodash';
import log from '../../utils/logger.js';
import { parseCsv } from '../../utils/parseCsv.js';

const service = PokemonService();

const { isEmpty } = lodash;
class PokemonController {
  async getPokemon(req, res, next) {
    try {
      log.info('Calling GET Pokemon controller');
      const { limit, order, direction } = req.query;
      const pokemon = await service.getPokemon(limit, order, direction);
      if (isEmpty(pokemon)) return res.json({ msg: 'Sorry no data! 🙈' });
      res.json(pokemon);
    } catch (error) {
      log.error('Fetching Pokemon Error! %s', error.message);
      next(error);
    }
  }

  async postCsvParse(req, res, next) {
    try {
      log.info('Calling POST parse controller');
      const { fileName } = req.params;
      const parsedCsv = await parseCsv(fileName);
      const result = await service.postPokemon(parsedCsv);
      res.json(result);
    } catch (error) {
      log.error('Parsing Error! %s', error.message);
      next(error);
    }
  }
}

export default function pokemonController() {
  return new PokemonController();
}
