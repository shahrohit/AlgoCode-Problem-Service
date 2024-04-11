const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes/index.route");
const { errorHandler } = require("./utils/index.utils");
const connectToDB = require("./config/db.config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res, next) => {
  return res.json({ message: "Problem service is alive" });
});

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`server is listening at port ${PORT}`);
  await connectToDB();
  console.log("Successfully connected to DB");
});
