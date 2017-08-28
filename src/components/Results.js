import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import questions from '../questions';
import { Progress } from './Progress';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.questions = questions.questions;
  }

  render() {
    return (
      <div>
        <Progress questionsLength={this.questions.length}  currentQuestionId={this.questions.length + 1}/>
        <section className="table container">
          <div className="table-cell">
            <div className="outro">
              <h1 className="outro-title">LOREM IPSUM DOLOR</h1>
              <p className="outro-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                commodo consequat.
              </p>
              <Link className="button button_continue" to="/">Try again</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
