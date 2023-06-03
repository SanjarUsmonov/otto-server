const { Router } = require("express");
const router = Router();

//Controller
const { Manzil, Media, get, put, del } = require("../controllers/controller");
const { Category } = require("../controllers/category");
//MiddleWare
const { middleware } = require("../middlewares/middleware");

router.post("/manzil", Manzil);
router.get("/manzil", Manzil);
router.post("/media", Media);
router.get("/media", Media);
router.post("/category", Category);
router.get("/category", Category);

router.put("/put/:id", put);
router.delete("/del/:id", del);

module.exports = router;
