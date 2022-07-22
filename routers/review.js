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

// Create new review only with text
// http POST :4000/reviews text="bla" reviewerName=Gunnar productId=5
router.post("/", async (req, res, next) => {
  try {
    const text = req.body.text;
    const reviewerName = req.body.reviewerName;
    if (!text || text === " ") {
      res.status(400).send("Must provide an text address");
    } else {
      const review = await Review.create(req.body);
      res.json(review);
    }
  } catch (e) {
    next(e);
  }
});

//delete review
//http DELETE :4000/reviews/5
router.delete("/:id", async (req, res, next) => {
  try {
    //1.get the id from the params
    const { id } = req.params;
    //2. find what you want to delete
    const reviewToDelete = await Review.findByPk(id);
    //3. delete
    await reviewToDelete.destroy();
    //4. send a response
    res.send("Review teminated");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

// Adding-new-review-table
