const express = require("express");
const app = express();
const _8ballRouter = require("./router");
const path = require("path");

const parser = require("body-parser");

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", _8ballRouter);

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
