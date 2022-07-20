const User = require("../models").user;
const { toData } = require("./jwt");

const authMiddleware = async (req, res, next) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");

  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      const user = await User.findByPk(data.userId);

      if (!user) {
        res.status(404).send({ message: "No user found!" });
      } else {
        req.user = user;
        next();
      }
    } catch (e) {
      res.status(400).send({ message: "Error" });
    }
  } else {
    res.status(401).send({ message: "Please supply some valid credentials" });
  }
};

module.exports = authMiddleware;
