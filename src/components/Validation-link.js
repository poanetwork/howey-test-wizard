import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ValidationLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: false
    }
  }

  handleClick(e) {
    if (!this.props.isValid) {
      e.preventDefault();
      this.setState({
        animation: true
      });
    }

    this.interval = setTimeout(() => {
      this.setState({
        animation: false
      });
    }, 800);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = false;
  }

  render() {
    const animation = this.state.animation;

    return (
      <Link
        className={`${this.props.className} ${animation ? "shake" : ""}`}
        to={this.props.to}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.children}
      </Link>
    );
  }
}
