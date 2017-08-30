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
            <h1 className="title">LOREM IPSUM DOLOR</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <form action="" className="intro-form">
              <div className="intro-form-i">
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
              </div>
              <div className="intro-form-i">
                <label htmlFor="email" className="label">
                  Email
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
              </div>
              <div className="intro-form-i">
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
              </div>
            </form>
            <Link className="button button_continue" to='/questions/1'>Start test</Link>
          </div>
        </div>
      </section>
    );
  }
}
