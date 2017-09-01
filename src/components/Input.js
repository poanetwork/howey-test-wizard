import React from 'react';
import Formsy from 'formsy-react';

const Input = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget['value']);
  },

  render() {
    const className = `${(this.props.className || '')} ${(this.showRequired() ? 'required' : this.showError() ? 'error' : '')}`;
    const errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <label className="label" htmlFor={this.props.name}>
          {this.props.title}
          {this.props.children}
        </label>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          onChange={this.changeValue}
          value={this.getValue()}
          className="input"
        />
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }
});

export default Input;
