const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const getRecords = catchAsync(async (req, res) => {
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const filter = pick(req.query, ['name', 'role']);
  // const result = await userService.queryUsers(filter, options);
  // res.send(result);
  res.json(req.query);
});

module.exports = {
  getRecords
};
