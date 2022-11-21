const express = require("express");
const path = require("path");
const session = require("express-session");
const homeRouter = require("./routes/homeRouter");
const app = express();

app.use(
  session({
    secret: "signature",
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (!req.session.data) req.session.data = {};
  next();
});

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", homeRouter);
app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
