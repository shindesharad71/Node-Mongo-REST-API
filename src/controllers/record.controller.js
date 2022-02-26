const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { recordService } = require('../services');

const getRecords = catchAsync(async (req, res) => {
  const options = pick(req.query, ['startDate', 'endDate', 'minCount', 'maxCount']);
  const result = await recordService.queryRecords(options);
  res.send(result);
});

module.exports = {
  getRecords
};
