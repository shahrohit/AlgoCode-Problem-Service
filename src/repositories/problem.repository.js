const { NotFoundError } = require("../errors/index.error");
const { Problem } = require("../models/index.model");
class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(problemId) {
    try {
      const problem = await Problem.findById(problemId);
      if (!problem) throw new NotFoundError("problems", problemId);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const problem = await Problem.findByIdAndDelete(problemId);
      if (!problem) throw new NotFoundError("problems", problemId);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async updateProblem(problemId, problemData) {
    try {
      const problem = await Problem.findByIdAndUpdate(problemId, problemData, {
        new: true,
      });
      if (!problem) throw new NotFoundError("problems", problemId);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = ProblemRepository;
