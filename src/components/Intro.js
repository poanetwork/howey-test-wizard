import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PointsStore from '../stores/PointsStore';
import Formsy from 'formsy-react';
import Input from './Input';
import { ValidationLink } from './Validation-link';
import { Tooltip } from './Tooltip';

export class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false
    }
  }

  validForm() {
    this.setState({formValid: true})
  }

  invalidForm() {
    this.setState({formValid: false})
  }

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
              <br/><strong>THIS IS NOT A LEGAL ADVICE</strong>
            </p>
            <Formsy.Form
              className="intro-form"
              onValid={this.validForm.bind(this)}
              onInvalid={this.invalidForm.bind(this)}
            >
              <Input
                className="intro-form-i"
                name="project-name"
                title="Project name"
                value=""
                required
              >
                <Tooltip title="Name of a project. E.g. Oracles Network. Optional field."/>
              </Input>
              <Input
                className="intro-form-i"
                name="email"
                title="Email"
                validations="isEmail"
                value=""
                required
              >
                <Tooltip title="Email of the project. E.g. hello@oracles.org. Optional field."/>
              </Input>
              <Input
                className="intro-form-i"
                name="project-url"
                title="Project URL"
                value=""
                required
              >
                <Tooltip title="URL of the project. E.g. https://oracles.org. Optional field."/>
              </Input>
            </Formsy.Form>
            <ValidationLink
              className="button button_continue"
              to="/questions/1"
              isValid={this.state.formValid}
            >
              Start test
            </ValidationLink>
            <Link className="button button_skip" to="/questions/1">
              Skip this step
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
