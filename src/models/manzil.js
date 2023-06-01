const { Schema, model } = require("mongoose");

const schema = new Schema({
  tel: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = model("manzil", schema);
