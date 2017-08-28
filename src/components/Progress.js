import React, { Component } from 'react';

export class Progress extends Component {
  render() {
    const progressList = [...Array(this.props.questionsLength + 1).keys()].map((index) => {
      const activeClass = index < this.props.currentQuestionId ? "progress-i_active" : "";
      const dataStepContent = this.props.questionsLength == index ? '\u2713' : index + 1

      return (
        <div className={`progress-i ${activeClass}`} key={index}>
          <div className="progress-step" data-step={dataStepContent}></div>
        </div>
      );
    })

    return (
      <section className="progress">
        <div className="container">
          {progressList}
        </div>
      </section>
    );
  }
}
