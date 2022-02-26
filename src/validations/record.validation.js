const Joi = require('joi');

const getRecords = {
  query: Joi.object().keys({
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    minCount: Joi.number().required(),
    maxCount: Joi.number().required()
  }),
};

module.exports = {
  getRecords
};
