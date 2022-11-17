const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./form");
});

router.post("/result", (req, res) => {
  const { name, age } = req.body;
  // res.send(`Name: ${name} Age: ${age}`);
  res.render("./result", { name, age });
});
module.exports = router;
