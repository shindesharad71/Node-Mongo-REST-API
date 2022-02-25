const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const recordCtrl = require('./record.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/records - Get list of records */
  .get(recordCtrl.get)

module.exports = router;
