import { Model } from 'objection';
import tableNames from '../../constants/tableNames.js';

export class Pokemon extends Model {
  static get tableName() {
    return tableNames.restoredPokeDex;
  }

  static get idColumn() {
    return 'id';
  }
}
