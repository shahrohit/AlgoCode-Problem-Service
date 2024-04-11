const { markdownSanitizer } = require("../utils/index.utils");

class ProblemService {
  constructor(ProblemRepository) {
    this.ProblemRepository = ProblemRepository;
  }

  async createProblem(problemData) {
    problemData.description = markdownSanitizer(problemData.description);
    const problem = await this.ProblemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = this.ProblemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemId) {
    const problem = await this.ProblemRepository.getProblem(problemId);
    return problem;
  }
  async deleteProblem(problemId) {
    const problem = await this.ProblemRepository.deleteProblem(problemId);
    return problem;
  }
  async updateProblem(problemId, problemData) {
    const problem = await this.ProblemRepository.updateProblem(
      problemId,
      problemData
    );
    return problem;
  }
}

module.exports = ProblemService;
