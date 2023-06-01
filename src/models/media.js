const { Schema, model } = require("mongoose");

const schema = new Schema({
  telegram: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
});

module.exports = model("media", schema);
