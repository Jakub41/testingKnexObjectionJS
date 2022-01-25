import supertest from 'supertest';
import server from './server.js';
import message from './constants/message.js';

describe('Server GET /', () => {
  test('should respond with a message', async () => {
    const response = await supertest(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toEqual(message);
  });
});
