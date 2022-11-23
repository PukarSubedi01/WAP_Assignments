const { data } = require("../mocks/data");

exports.addToCart = (req, res) => {
  const { id } = req.body;
  const item = [...data.filter((d) => d.id == id)];
  req.session.cart = addItemToCart(item[0], req.session.cart);
  res.redirect("/");
};

exports.getCart = (req, res) => {
  res.render("./cart", { title: "carts", cartItems: req.session.cart });
};

function addItemToCart(item, cart) {
  const itemInCart = cart.filter((i) => i.id === item.id);
  if (itemInCart.length === 0) return [...cart, { ...item, quantity: 1 }];
  return cart.map((c) => {
    if (c.id === itemInCart[0].id)
      return {
        ...itemInCart[0],
        quantity: c.quantity + 1,
      };
    return c;
  });
}
