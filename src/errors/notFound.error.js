const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFound extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "Not Found",
      StatusCodes.NOT_FOUND,
      `The requested resource ${resourceName} with value ${resourceValue} is not found`,
      {}
    );
  }
}

module.exports = NotFound;
