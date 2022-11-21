const request = require('supertest');
const app = require('./index');
const http = require('http');

describe('Create new user', () => {
  const email = `${Date.now()}@gmail.com`;
  it('Should allow user to be created', (done) => {
    request(app).post('/api/signup').expect(200, done);
  });
});
