const express = require("express");
const router = express.Router();

const { addToCart, getCart } = require("../controller/cart");

router.post("/addToCart", addToCart);
router.get("/", getCart);
module.exports = router;
