const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  res.render("./form", {
    css: hour >= 6 && hour < 18 ? "css/day.css" : "css/night.css",
  });
});

router.get("/output", (req, res) => {
  const { name, age } = req.session.data;
  res.render("./result", { name, age });
});

router.post("/result", (req, res) => {
  const { name, age } = req.body;
  req.session.data = {
    name,
    age,
  };
  res.redirect(`/output`);
});
module.exports = router;
