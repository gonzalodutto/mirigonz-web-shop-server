const Router = require("express").Router;
const Product = require("../models").product;

const router = new Router();

//get all products
//http :4000/products
router.get("/", async (request, response, next) => {
  try {
    const products = await Product.findAll();
    response.send(products);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get one product by :id with params
//http :4000/products/3
router.get("/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const productId = req.params.id;
    // 2. findByPk => id
    const theProduct = await Product.findByPk(productId);
    res.send(theProduct);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
