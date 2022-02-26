const express = require('express');
const validate = require('../../middlewares/validate');
const recordController = require('../../controllers/record.controller');
const recordValidation = require('../../validations/record.validation');

const router = express.Router();

router.get('/', validate(recordValidation.getRecords), recordController.getRecords)

module.exports = router;