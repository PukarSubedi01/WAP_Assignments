const { data } = require("../mocks/data");

exports.getProducts = (req, res) => {
  res.render("./products", { title: "Products", products: data });
};
