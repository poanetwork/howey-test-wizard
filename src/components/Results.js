import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import questions from '../questions';
import { Progress } from './Progress';
import PointsStore from '../stores/PointsStore';
import UserStore from '../stores/UserStore';
import 'whatwg-fetch';

const serialize = require('serialize-javascript');

export class Results extends Component {
  constructor(props) {
    super(props);
    this.questions = questions.questions;

    fetch("complete", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "hello=world&form-name=completed"});
  }

  render() {
    return (
      <div>
        <Progress questionsLength={this.questions.length}  currentQuestionId={this.questions.length + 1}/>
        <section className="table results container">
          <div className="table-cell">
            <h1 className="title">
              {UserStore.user.projectName}
              <span className="results-value">
                <span className={`indicator ${PointsStore.pointsToResult(PointsStore.totalResult())}`}></span>
                <strong>{PointsStore.totalResult()}</strong>
                {PointsStore.pointsToResult(PointsStore.totalResult()).split("-").join(" ")}
              </span>
            </h1>
            <p className="description">
              A token will only be a security if it satisfies all three elements. The higher the point score for each element, the more likely the element is to be satisfied.
              <br/>
              For many blockchain tokens, the first two elements of the Howey test are likely to be met. The third element has the most variables and the most different outcomes depending on the characteristics of the particular token.
            </p>
            <div className="results-by-groups">
              <div className="results-by-groups-i">
                <p className="results-by-groups-title">Investment of Money</p>
                <span className={`indicator ${PointsStore.pointsToResult(PointsStore.totalPoints.investment_of_money)}`}></span>
                <span className="results-by-groups-value">{PointsStore.totalPoints.investment_of_money}</span>
              </div>
              <div className="results-by-groups-i">
                <p className="results-by-groups-title">Common Enterprise</p>
                <span className={`indicator ${PointsStore.pointsToResult(PointsStore.totalPoints.common_enterprise)}`}></span>
                <span className="results-by-groups-value">{PointsStore.totalPoints.common_enterprise}</span>
              </div>
              <div className="results-by-groups-i">
                <p className="results-by-groups-title">Expectation of Profit</p>
                <span className={`indicator ${PointsStore.pointsToResult(PointsStore.totalPoints.expectation_of_profit)}`}></span>
                <span className="results-by-groups-value">{PointsStore.totalPoints.expectation_of_profit}</span>
              </div>
            </div>
            <Link className="button button_continue" to="/">Try again</Link>
          </div>
          <div className="table-cell scale">
            <div className="scale-i">
              <span className="scale-i-value very-unlikely">0 or less</span>
              Very unlikely
            </div>
            <div className="scale-i">
              <span className="scale-i-value unlikely">1 - 33</span>
              Unlikely
            </div>
            <div className="scale-i">
              <span className="scale-i-value equally">34 - 66</span>
              Equally likely and unlikely
            </div>
            <div className="scale-i">
              <span className="scale-i-value likely">67 - 99</span>
              Likely
            </div>
            <div className="scale-i">
              <span className="scale-i-value very-likely">100 or more</span>
              Very likely
            </div>
          </div>
        </section>
      </div>
    );
  }
}
