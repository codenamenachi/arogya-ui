import React, { Component } from "react";

class FormInput extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="form-group">
          <label>{this.props.label}</label>
          <input
            id={this.props.id}
            name={this.props.id}
            className="form-input m-2"
            type={this.props.type}
            required={this.props.required}
            disabled={this.props.disabled}
            onChange={this.props.onChange}
            value={this.props.value}
            style={{ width: "auto" }}
          />
        </div>
      </>
    );
  }
}

export default FormInput;
