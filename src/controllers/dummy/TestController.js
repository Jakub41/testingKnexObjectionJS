import TestService from '../../services/testService.js';
import lodash from 'lodash';
import log from '../../utils/logger.js';

const { isEmpty } = lodash;
class TestController {
  async getTestData(req, res, next) {
    try {
      log.info('Calling test data controller');
      const data = await TestService().getData();
      if (isEmpty(data)) return res.json({ msg: 'Sorry no data! 🙈' });
      res.json(data);
    } catch (error) {
      log.error('Fetching Pokemons Error! %s', error.message);
      next(error);
    }
  }
}

export default function testController() {
  return new TestController();
}
