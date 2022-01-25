import { Model } from 'objection';
import tableNames from '../../constants/tableNames.js';

class Pokemons extends Model {
  static get tableName() {
    return tableNames.pokemons;
  }
}

export default Pokemons;
