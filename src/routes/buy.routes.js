const router = require("express").Router();

const buyCTRL = require("../controllers/buy.controller");

const { isAuth } = require("../middlewares/authentication");

router.get("/", buyCTRL.getShopping);
router.get("/:id", buyCTRL.getShoppingById);
router.post("/", isAuth, buyCTRL.createBuy);
//router.put("/:productId", isAuth, buyCTRL.updateProduct);
//router.delete("/:productId", isAuth, buyCTRL.deleteProduct);

module.exports = router;
