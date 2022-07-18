const Router = require("express").Router;
const Product = require("../models").product;
const Category = require("../models").category;

const router = new Router();

//get one category with all products
//http :4000/categories/3
router.get("/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const categoryId = req.params.id;
    // 2. findByPk => id
    const theCategory = await Category.findByPk(categoryId, {
      include: { model: Product },
    });
    res.send(theCategory);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
