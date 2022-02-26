const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { recordService } = require('../services');

const getRecords = catchAsync(async (req, res) => {
  const options = pick(req.query, ['startDate', 'endDate', 'minCount', 'maxCount']);
  const result = await recordService.queryRecords(options);
  response = {
    code: 0,
    msg: "Success",
    records: result
  }
  res.send(response);
});

module.exports = {
  getRecords
};
