import { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

class App extends Component {
  state = {};
  render() {
    return (
      <GoogleOAuthProvider clientId="571781050100-a53aask28iskelq9b8ob2ra5geipm0ht.apps.googleusercontent.com">
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/health" element={<LandingPage />} /> */}
            </Routes>
          </div>
        </Router>
      </GoogleOAuthProvider>
    );
  }
}

export default App;
