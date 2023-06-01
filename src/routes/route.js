const { Router } = require("express");
const router = Router();

//Controller
const { post, get, put, del } = require("../controllers/controller");
//MiddleWare
const { middleware } = require("../middlewares/middleware");

router.get("/get", get);
router.post("/post", post);
router.put("/put/:id", put);
router.delete("/del/:id", del);

module.exports = router;
