import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import questions from '../questions';
import { Progress } from './Progress';
import PointsStore from '../stores/PointsStore';

export class Questions extends Component {
  constructor(props) {
    super(props);
    this.questionsLength = questions.questions.length;
    this.state = {
      currentQuestionId: props.match.params.questionId
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentQuestionId: nextProps.match.params.questionId
    });
  }

  componentDidUpdate() {
    this.answerPoints = 0;
    window.scrollTo(0, 0);
    console.log(PointsStore.totalPoints);
  }

  handleClick() {
    const groupTitle = this.question.groupTitle.toLowerCase().split(' ').join('_');
    PointsStore.calculatePoints(groupTitle, this.answerPoints);
  }

  handleChange(e) {
    this.answerPoints = e.target.value;
  }

  continueLink() {
    if (this.questionsLength == this.state.currentQuestionId) {
      return '/results';
    } else {
      return `/questions/${parseInt(this.state.currentQuestionId, 10) + 1}`;
    }
  }

  render() {
    this.question = questions.questions[this.state.currentQuestionId - 1];
    const answersList = this.question.answers.map((answer, index) => (
      <label className="radio" key={`${answer.title}-${index}`}>
        <input
          type="radio"
          name="answers"
          value={answer.points}
          onChange={this.handleChange.bind(this)}
        />
        <span className="radio-title">{answer.title}</span>
        <span className="radio-description">{answer.description}</span>
      </label>
    ));

    return (
      <div>
        <Progress questionsLength={this.questionsLength}  currentQuestionId={this.state.currentQuestionId}/>
        <div className="container">
          <h1 className="questions-group-title">{this.question.groupTitle}</h1>
        </div>
        <section className="container questions">
          <h1 className="questions-title">{this.question.title}</h1>
          <div className="questions-list">{answersList}</div>
        </section>
        <div className="center">
          <Link
            className="button button_continue"
            to={this.continueLink()}
            onClick={this.handleClick.bind(this)}
          >
            Continue
          </Link>
        </div>
      </div>
    );
  }
}
