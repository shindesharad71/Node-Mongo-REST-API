const { Record } = require('../models');

/**
 * Query for records
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryRecords = async (filter, options) => {
  // const records = await Record.paginate(filter, options);
  const records = await Record.find({}).limit(4);
  return records;
};

module.exports = {
  queryRecords
};
