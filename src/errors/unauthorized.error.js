const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class Unauthorized extends BaseError {
  constructor(methodName, details = {}) {
    super(
      "Unauthorized",
      StatusCodes.UNAUTHORIZED,
      `Invalid Credential : You are not allowed to ${methodName}`,
      details
    );
  }
}

module.exports = Unauthorized;
