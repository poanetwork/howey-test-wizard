import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PointsStore from '../stores/PointsStore';

export class Intro extends Component {
  render() {
    PointsStore.initializePoints();
    return (
      <section className="table container">
        <div className="table-cell">
          <div className="intro">
            <h1 className="title">Howey test wizard</h1>
            <p className="description">
              {"Howey test for blockchain tokens and crypto projects. Based of Coindesk's "}
              <a href="https://docs.google.com/spreadsheets/d/1QxOV2dgxO3C_TyVE0-41ZwLlzPmB-EE1NNshJGuedCU/htmlview#gid=0">spreadsheet</a>
              <br/>
              The Howey test has not yet been directly applied by the courts to any digital currency or blockchain token. The Howey test as applied by the courts does not involve any points-based calculation. The points system is intended as a guide - to highlight the characteristics of a token which are relevant to the securities law analysis. 
              <br/><b>THIS IS NOT A LEGAL ADVICE</b>
            </p>
            <form action="" className="intro-form">
              <div className="intro-form-i">
                <label htmlFor="project-name" className="label">
                  Project name
                  <span className="tooltips-container">
                    <span className="tooltips">
                      <span className="tooltips-text">
                        Name of a project. E.g. Oracles Network. Optional field.
                      </span>
                    </span>
                  </span>
                </label>
                <input type="text" className="input" id="project-name"/>
              </div>
              <div className="intro-form-i">
                <label htmlFor="email" className="label">
                  Email
                  <span className="tooltips-container">
                    <span className="tooltips">
                      <span className="tooltips-text">
                        Email of the project. E.g. hello@oracles.org. Optional field.
                      </span>
                    </span>
                  </span>
                </label>
                <input type="text" className="input" id="email"/>
              </div>
              <div className="intro-form-i">
                <label htmlFor="project-url" className="label">
                  Project URL
                  <span className="tooltips-container">
                    <span className="tooltips">
                      <span className="tooltips-text">
                      URL of the project. E.g. https://oracles.org. Optional field.
                      </span>
                    </span>
                  </span>
                </label>
                <input type="text" className="input" id="project-url"/>
              </div>
            </form>
            <Link className="button button_continue" to='/questions/1'>Start test</Link>
          </div>
        </div>
      </section>
    );
  }
}
