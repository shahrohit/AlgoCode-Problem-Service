const epxress = require("express");
const v1Router = require("./v1/index.route");

const apiRouter = epxress.Router();

apiRouter.use("/v1", v1Router);

module.exports = apiRouter;
