const Router = require("express").Router;
const Review = require("../models").review;

const router = new Router();

//get all reviews
//http :4000/reviews
router.get("/", async (request, response, next) => {
  try {
    const reviews = await Review.findAll();
    response.send(reviews);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get one product by :id with params
//http :4000/reviews/3
router.get("/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const reviewId = req.params.id;
    // 2. findByPk => id
    const theReview = await Review.findByPk(reviewId);
    res.send(theReview);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

// Adding-new-review-table
