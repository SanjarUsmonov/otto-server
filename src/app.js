require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const mongoose = require("mongoose");
const cookeiParse = require("cookie-parser");
const app = express();

const { env } = require("../config");
const PORT = env.PORT || 4000;

module.exports = mongoDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/otto");
};
mongoDB();

const routes = require("./routes");

app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookeiParse());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(PORT);
});

