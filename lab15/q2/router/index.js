const express = require("express");
const router = express.Router();

const listData = [
  "It is Certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];
router.get("/8ball", (req, res) => {
  const randomIndex = Math.floor(Math.random() * listData.length);
  res.status(200).send({ data: listData[randomIndex] });
});

router.get("/", (req, res) => {
  res.render("./");
});
module.exports = router;
