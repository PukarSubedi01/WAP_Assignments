const express = require("express");
const app = express();
const path = require("path");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", productRouter);
app.use("/cart", cartRouter);

app.listen(3000, () => {
  console.log("The server is running in port 3000");
});
