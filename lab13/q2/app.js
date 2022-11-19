const express = require("express");
const app = express();

const homeRouter = require("./routes/homeRouter");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", homeRouter);
app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
