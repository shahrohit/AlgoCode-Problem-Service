const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFound extends BaseError {
  constructor(resource, detail = {}) {
    super(
      "Not Found",
      StatusCodes.NOT_FOUND,
      `The requested resource ${resource} is not found`,
      detail
    );
  }
}

module.exports = NotFound;
