const { Schema, model } = require("mongoose");

const schema = new Schema({
  select: {
    type: Array,
    required: true,
  },
  product_name: {
    type: Array,
    required: true,
  },
  product_color: {
    type: Array,
    required: true,
  },
});

module.exports = model("product", schema);
