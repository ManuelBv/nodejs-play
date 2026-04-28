import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});

describe('POST /api/data', () => {
  it('should accept JSON and return success response', async () => {
    const response = await request(app)
      .post('/api/data')
      .send({ name: 'John', message: 'Hello' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.received.name).toBe('John');
    expect(response.body.received.message).toBe('Hello');
    expect(response.body.timestamp).toBeDefined();
  });

  it('should return 400 if name or message is missing', async () => {
    const response = await request(app)
      .post('/api/data')
      .send({ name: 'John' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('name and message are required');
  });
});
