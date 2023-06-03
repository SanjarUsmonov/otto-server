const mongoDB = require("../app");
mongoDB();
const Categories = require("../models/category");
const Category = (req, res) => {
  const { file } = req.files;
  console.log(file);
  const { category1, category2, category3 } = req.body;
  Categories.create({
    category_eng: category1,
    category_rus: category2,
    category_uzb: category3,
    category_created_at: Date(),
  });
};

module.exports = { Category };
