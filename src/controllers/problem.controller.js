const { NotImplementedError } = require("../errors/index.error");
function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

function addProblem(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("Add Problem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("Get Problem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("Get Problems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("Delete Problem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("Get Problem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
