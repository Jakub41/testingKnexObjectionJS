import * as Model from '../database/Models/index.js';

class TestDAO {
  selectAll() {
    return Model.TestModel.query();
  }
}

export default function testDAO() {
  return new TestDAO();
}
