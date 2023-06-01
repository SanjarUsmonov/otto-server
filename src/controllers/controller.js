//POST
const post = (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({ message: "ok", user: { username, password } });
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
module.exports = { post, get, put, del };
