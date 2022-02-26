const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const recordSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    counts: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'createdAt' },
  }
);

// add plugin that converts mongoose to json
recordSchema.plugin(toJSON);
recordSchema.plugin(paginate);

/**
 * @typedef Record
 */
const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
