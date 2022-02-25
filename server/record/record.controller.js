const Record = require('./record.model');

/**
 * Get Records
 * @returns {Record}
 */
function get(req, res) {
  return res.json(req.user);
}

module.exports = { get };
