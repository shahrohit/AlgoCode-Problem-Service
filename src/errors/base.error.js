class BaseError extends Error {
  constructor(name, statusCode, description, detail) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    this.detail = detail;
  }
}

module.exports = BaseError;
