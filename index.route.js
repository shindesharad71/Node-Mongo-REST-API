const express = require('express');
const recordRoutes = require('./server/record/record.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user records at /records
router.use('/records', recordRoutes);

module.exports = router;
