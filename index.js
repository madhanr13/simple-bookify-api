const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const { logReqResponseOnConsole } = require("./middlewares/loggers");
const bookRouter = require("./routes/book");
const path = require("path");

app.listen(port, function (req, res) {
  console.log(`Server started at PORT ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//Middlewares
app.use(express.static(path.resolve("./public")));
app.use(bodyParser.json());
app.use(logReqResponseOnConsole);
app.use("/", bookRouter);
