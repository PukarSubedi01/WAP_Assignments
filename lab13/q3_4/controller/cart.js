const { data } = require("../mocks/data");

let cart = [];

exports.addToCart = (req, res) => {
  const { id } = req.body;
  cart = [...cart, ...data.filter((d) => d.id == id)];
  res.status(200);
};

exports.getCart = (req, res) => {
  res.render("./cart", { title: "carts", cartItems: cart });
};
