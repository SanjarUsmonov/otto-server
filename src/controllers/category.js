const mongoDB = require("../app");
mongoDB();
// Category value 3 languages
const Categories = require("../models/category");
const Category = async (req, res) => {
  const { category1, category2, category3 } = req.body;
  const data1 = await Categories.findOne({ category_eng: category1 });
  const data2 = await Categories.findOne({ category_rus: category2 });
  const data3 = await Categories.findOne({ category_uzb: category3 });
  if ((data1, data2, data3)) {
    res.status(403).json({ message: "Category already exist!" });
  } else {
    Categories.create({
      category_eng: category1,
      category_rus: category2,
      category_uzb: category3,
      category_created_at: new Date(),
    });
  }
};
// Category img
const CategoryImage = (req, res) => {};

module.exports = { Category };
