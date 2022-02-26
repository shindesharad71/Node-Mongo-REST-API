const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Record routes', () => {
  describe('GET /records', () => {
    test('should return 400 without query params', async () => {
      const res = await request(app).get('/records').send().expect(httpStatus.BAD_REQUEST);
      expect(res.body.results).toHaveLength(2);
    });
  });
});
