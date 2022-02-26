const { Record } = require('../models');

/**
 * Query for records
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
const queryRecords = async (options) => {
  const { startDate, endDate, minCount, maxCount } = options;
  const records = await Record.find({
    createdAt: {
      $gt: startDate,
      $lt: endDate
    }
  }).limit(2);
  return records;
};

module.exports = {
  queryRecords
};
