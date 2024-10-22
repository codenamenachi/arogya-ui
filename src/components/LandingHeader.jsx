import React, { Component } from "react";
import { CurrentDateTimeWish } from "./DateTime";

export default class LandingHeader extends Component {
  render() {
    return (
      <div>
        <div className="landing-header">
          <span className="landing-header-logo">A</span>
          <nav>
            <p className="landing-header-welcome">Welcome, Doctor</p>
          </nav>
          <CurrentDateTimeWish />
        </div>
      </div>
    );
  }
}
