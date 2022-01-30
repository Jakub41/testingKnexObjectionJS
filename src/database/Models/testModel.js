import { Model } from 'objection';
import tableNames from '../../constants/tableNames.js';

export class TestModel extends Model {
  static get tableName() {
    return tableNames.testTable;
  }
}
