const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "signature",
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/", productRouter);
app.use("/cart", cartRouter);

app.listen(3000, () => {
  console.log("The server is running in port 3000");
});
