const { Record } = require('../models');

/**
 * Query for records
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
const queryRecords = async (options) => {
  const { startDate, endDate, minCount, maxCount } = options;
  const timeRange = {
    $match: {
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      }
    }
  };

  const projection = {
    $project: {
      key: '$key',
      createdAt: '$createdAt',
      totalCount: { $sum: '$counts' },
    }
  };

  const countRange = {
    $match: {
      totalCount: {
        $gte: Number(minCount),
        $lte: Number(maxCount),
      },
    }
  };

  const pipeline = [timeRange, projection, countRange];
  const records = await Record.aggregate(pipeline).exec();
  return records;
};

module.exports = {
  queryRecords
};
