import * as DAO from '../dao/index.js';

class TestService {
  getData() {
    return DAO.TestDAO().selectAll();
  }
}

export default function testService() {
  return new TestService();
}
