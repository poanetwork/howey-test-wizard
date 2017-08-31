import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Intro extends Component {
  render() {
    return (
      <section className="table container">
        <div className="table-cell">
          <div className="intro">
            <h1 className="title">Howey Wizard</h1>
            <p className="description">
              Howey test for blockchain tokens and crypto projects. Based of Coindesk's <a href="https://docs.google.com/spreadsheets/d/1QxOV2dgxO3C_TyVE0-41ZwLlzPmB-EE1NNshJGuedCU/htmlview#gid=0">spreadsheet</a>
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
