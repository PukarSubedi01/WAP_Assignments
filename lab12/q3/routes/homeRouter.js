const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();

  res.render("./form", {
    css: hour >= 6 && hour < 18 ? "css/day.css" : "css/night.css",
  });
});

router.post("/result", (req, res) => {
  const { name, age } = req.body;
  // res.send(`Name: ${name} Age: ${age}`);
  res.render("./result", { name, age });
});
module.exports = router;
