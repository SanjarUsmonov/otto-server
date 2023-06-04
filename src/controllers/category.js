const mongoDB = require("../app");
mongoDB();
// Category value 3 languages
const Categories = require("../models/category");
const Products = require("../models/categoryCreate");
const Category = async (req, res) => {
  const { category1, category2, category3 } = req.body;
  const data1 = await Categories.findOne({ category_eng: category1 });
  const data2 = await Categories.findOne({ category_rus: category2 });
  const data3 = await Categories.findOne({ category_uzb: category3 });
  if ((data1, data2, data3)) {
    res.status(403).json({ message: "Category already exist!" });
  } else {
    Categories.create({
      category_uzb: category1,
      category_rus: category2,
      category_eng: category3,
      category_created_at: new Date(),
    });
  }
};

const CategoryCreate = async (req, res) => {
  const { select, product_name, product_color } = req.query;
  const product = await Products.findOne({
    product_name: product_name,
    product_color: product_color,
  });
  if (product) {
    res.status(403).json({ message: "Meva bor" });
  } else {
    Products.create({
      product_name: product_name,
      product_color: product_color,
      product_category: select,
    });
  }
};

const CategoryGet =async(req, res)=>{
  const product = await Categories.find()
  res.status(200).json({data:product})
}

module.exports = { Category, CategoryCreate,CategoryGet };
