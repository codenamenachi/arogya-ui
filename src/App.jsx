import { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SearchPage } from "./components/SearchPage";
import { SavePage } from "./components/SavePage";
import NewSave from "./components/NewSave";
import NcdSearch from "./components/NcdSearch";
import OldSave from "./components/OldSave";
import PidSearch from "./components/PidSearch";
import MnSearch from "./components/MnSearch";
import DoConSearch from "./components/DoConSearch";
import Home from "./components/Home";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/health" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
