require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const cookeiParse = require("cookie-parser");
const app = express();

const { env } = require("../config");
const PORT = env.PORT || 4000;

const routes = require("./routes");

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(cookeiParse());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(PORT);
});

module.exports = app;
