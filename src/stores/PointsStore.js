const PointsStore = {
  answers: [],
  totalPoints: {
    investment_of_money: 0,
    common_enterprise: 0,
    expectation_of_profit: 0
  },

  initializePoints() {
    this.totalPoints = {
      investment_of_money: 0,
      common_enterprise: 0,
      expectation_of_profit: 0
    }
  },

  calculatePoints(group, points) {
    this.totalPoints[group] += parseInt(points, 10);
  },

  setAnswers(index, question, answer) {
    this.answers[index] = `${question}: ${answer}`;
  },

  pointsToResult(points) {
    if (points <= 0) {
      return "very-unlikely";
    }

    if (points >= 1 && points <= 33) {
      return "unlikely";
    }

    if (points >= 34 && points <= 66) {
      return "equally";
    }

    if (points >= 67 && points <= 99) {
      return "likely";
    }

    if (points >= 100) {
      return "very-likely";
    }
  },

  totalResult() {
    return Math.min(this.totalPoints.investment_of_money,
                    this.totalPoints.common_enterprise,
                    this.totalPoints.expectation_of_profit);
  }
}

export default PointsStore;
