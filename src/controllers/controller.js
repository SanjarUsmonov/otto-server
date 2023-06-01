const mongoDB = require("../app");
mongoDB();
const Manzils = require("../models/manzil");
const Medias = require("../models/media");
//POST
const Manzil = (req, res) => {
  const { tel, email, location, link } = req.body;
  Manzils.create({ tel, email, location, link });
};
//POST
const Media = (req, res) => {
  const { telegram, instagram, facebook, twitter } = req.body;
  Medias.create({ telegram, instagram, facebook, twitter });
};

//GET
const get = (req, res) => {
  res.status(200).end();
};
//PUT
const put = (req, res) => {
  const {} = req.body;
  const {} = req.params;
};
//DELETE
const del = (req, res) => {
  const {} = req.params;
};
//EXPORT CONTROLLERS
module.exports = { Manzil, Media, get, put, del };
