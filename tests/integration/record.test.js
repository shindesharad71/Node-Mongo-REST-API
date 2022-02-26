const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Record routes', () => {
  describe('GET /records', () => {
    test('should return 400 without query params', async () => {
      const res = await request(app).get('/records').send().expect(httpStatus.BAD_REQUEST);
    });
  });

  describe('GET /records?startDate=2016-01-26&endDate=2018-02-02&minCount=2700&maxCount=3000', () => {
    test('should return 200 with query params', async () => {
      const res = await request(app)
        .get('/records?startDate=2016-01-26&endDate=2018-02-02&minCount=2700&maxCount=3000')
        .send()
        .expect(httpStatus.OK);
      expect(res.body.records).toHaveLength(63);
    });
  });
});
