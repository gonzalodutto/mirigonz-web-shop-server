const express = require("express");
const app = express();
const PORT = 4000;
const productsRouter = require("./routers/product");
const categoriesRouter = require("./routers/category");

app.use(express.json());

// Routers
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.listen(PORT, () =>
  console.log(`MiriGonz server started in port: ${PORT}. Hola! :)`)
);
