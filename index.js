const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
require("./middlewares/conection");
//All routes starting with /api verify that they receive a valid token in the header.
//app.use("/api", authentication, require("./routes"));

//Routes without /api does not require a token.
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
