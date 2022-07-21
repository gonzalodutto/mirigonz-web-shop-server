const Router = require("express").Router;
const User = require("../models").user;

const router = new Router();

const { toJWT } = require("../auth/jwt");
const bcrypt = require("bcrypt");

// GET all users
// http :4000/auth
router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// GET one user by id
// http :4000/auth/1
router.get("/:userId", async (req, res, next) => {
  const userId = parseInt(req.params.userId);
  try {
    const userById = await User.findByPk(userId);
    res.send(userById);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

////
// http POST :4000/auth/signup name="Gonzalo" email=g@g.com password=gonzalo
// http POST :4000/auth/signup name="Miriam" email=m@m.com password=miriam
router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password || password.length < 6) {
      res.status(400).send("Missing some parameters or password invalid.");
      res
        .status(400)
        .send({ message: "Missing some parameters or password invalid." });
    } else {
      const newUser = await User.create({
        name,
        email,
        password,
        password: bcrypt.hashSync(password, 10),
      });
      res.json(newUser);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
////

// http POST :4000/auth/login email=g@g.com password=gonzalo
// http POST :4000/auth/login email=m@m.com password=miriam
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please supply a valid email and password" });
    } else {
      const user = await User.findOne({
        where: { email: email },
      });
      if (!user) {
        res
          .status(400)
          .send({ message: "User with this email address doesn't exist." });
      } else if (bcrypt.compareSync(password, user.password)) {
        const jwt = toJWT({ userId: user.id });
        res.send({ jwt, user });
      }
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
