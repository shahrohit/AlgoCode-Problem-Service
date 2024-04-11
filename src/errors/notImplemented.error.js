const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotImplemented extends BaseError {
  constructor(methodName) {
    super(
      "Not Implemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} is Not Implemented`,
      {}
    );
  }
}

module.exports = NotImplemented;
