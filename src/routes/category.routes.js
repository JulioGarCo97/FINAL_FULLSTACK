const router = require("express").Router();

const categoryCTRL = require("../controllers/category.controller");

const { isAuth } = require("../middlewares/authentication");

// Path: src/routes/customers.js
/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/", categoryCTRL.getCategories);
router.get("/:categoryId", categoryCTRL.getCategory);
router.post("/", categoryCTRL.createCategory);
router.put("/:categoryId", isAuth, categoryCTRL.updateCategory);
router.delete("/:categoryId", isAuth, categoryCTRL.deleteCategory);

module.exports = router;
