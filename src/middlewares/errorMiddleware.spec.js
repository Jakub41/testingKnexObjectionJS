import { errorHandler, notFound } from './errorMiddleware.js';

import server from '../server.js';
import supertest from 'supertest';

describe('GET negative flow', () => {
  test('unknown endpoint should respond with a not-found error message', async () => {
    const response = await supertest(server)
      .get('/unknownAPI')
      .expect('Content-Type', /json/)
      .expect(404);

    expect(response.body.message).toEqual('Not Found - /unknownAPI');
    expect(response.body.stack).not.toBeNull();
  });
});
