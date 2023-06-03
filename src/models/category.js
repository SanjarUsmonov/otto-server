const { Schema, model } = require("mongoose");

const schema = new Schema({
  category_eng: {
    type: String,
    required: true,
  },
  category_rus: {
    type: String,
    required: true,
  },
  category_uzb: {
    type: String,
    required: true,
  },
  category_craeted_at: {
    category_created_at: String,
  },
});

module.exports = model("categorie", schema);
