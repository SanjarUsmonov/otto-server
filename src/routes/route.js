const { Router } = require("express");
const router = Router();

//Controller
const { Manzil, Media, get, put, del } = require("../controllers/controller");
//MiddleWare
const { middleware } = require("../middlewares/middleware");

router.get("/get", get);
router.post("/manzil", Manzil);
router.get("/manzil", Manzil);
router.post("/media", Media);
router.get("/media", Media);
router.put("/put/:id", put);
router.delete("/del/:id", del);

module.exports = router;
