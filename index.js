const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const authRouter = require("./routers/auth");
const productsRouter = require("./routers/product");
const categoriesRouter = require("./routers/category");
const reviewsRouter = require("./routers/review");

app.use(express.json());
app.use(cors());

// Routers
app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/reviews", reviewsRouter);

app.listen(PORT, () =>
  console.log(`MiriGonz server started in port: ${PORT}. Hola amig@! :)`)
);
