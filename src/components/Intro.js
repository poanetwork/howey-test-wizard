import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Intro extends Component {
  render() {
    return (
      <section className="table container">
        <div className="table-cell">
          <div className="intro">
            <h1 className="intro-title">LOREM IPSUM DOLOR</h1>
            <p className="intro-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form action="">
              <label htmlFor="email" className="label">
                Project name
                <span className="tooltips-container">
                  <span className="tooltips">
                    <span className="tooltips-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut
                    </span>
                  </span>
                </span>
              </label>
              <input type="text" className="input" id="email"/>
              <label htmlFor="project-name" className="label">
                Project name
                <span className="tooltips-container">
                  <span className="tooltips">
                    <span className="tooltips-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut
                    </span>
                  </span>
                </span>
              </label>
              <input type="text" className="input" id="project-name"/>
              <label htmlFor="project-url" className="label">
                Project url
                <span className="tooltips-container">
                  <span className="tooltips">
                    <span className="tooltips-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut
                    </span>
                  </span>
                </span>
              </label>
              <input type="text" className="input" id="project-url"/>
              <Link className="button button_continue" to='/questions/1'>Start test</Link>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
