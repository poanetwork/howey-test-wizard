import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import questions from '../questions';
import { Progress } from './Progress';

export class Questions extends Component {
  constructor(props) {
    super(props);
    this.questions = questions.questions;
    this.state = {
      currentQuestionId: props.match.params.questionId
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentQuestionId: nextProps.match.params.questionId
    });
  }

  render() {
    const question = this.questions[this.state.currentQuestionId - 1];
    const nextQuestionId = parseInt(this.state.currentQuestionId, 10) + 1;
    const continueLink = this.questions.length == this.state.currentQuestionId ? '/results' : `/questions/${nextQuestionId}`;
    const answersList = question.answers.map((answer, index) => (
      <label className="radio" key={index}>
        <input type="radio" name="contract-type"/>
        <span className="radio-title">{answer.title}</span>
        <span className="radio-description">{answer.description}</span>
      </label>
    ));

    return (
      <div>
        <Progress questionsLength={this.questions.length}  currentQuestionId={this.state.currentQuestionId}/>
        <section className="container tests">
          <h1 className="tests-title">{question.title}</h1>
          <div className="tests-list">{answersList}</div>
        </section>
        <div className="center">
          <Link className="button button_continue" to={continueLink}>Continue</Link>
        </div>
      </div>
    );
  }
}
