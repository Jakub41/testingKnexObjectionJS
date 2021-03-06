import { Model } from 'objection';
import tableNames from '../../constants/tableNames.js';

export class Pokemons extends Model {
  static get tableName() {
    return tableNames.pokemons;
  }

  static get idColumn() {
    return 'id';
  }
}
