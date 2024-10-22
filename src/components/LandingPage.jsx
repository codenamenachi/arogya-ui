import React, { Component, useState } from "react";
import LandingHeader from "./LandingHeader";
import { SearchPage } from "./SearchPage";
import { SavePage } from "./SavePage";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import "../App.css";
import NewSave from "./NewSave";
import OldSave from "./OldSave";
import PidSearch from "./PidSearch";
import MnSearch from "./MnSearch";
import DoConSearch from "./DoConSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NcdSearch from "./NcdSearch";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div
          className="landing-page"
          style={{ height: "100vh", width: "100vw" }}
        >
          <LandingHeader />
          <NavigationBar />
        </div>
      </>
    );
  }
}
