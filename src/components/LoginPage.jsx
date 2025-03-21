import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const [action, setAction] = useState("Login");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();

  function saveNewUser(e) {
    e.preventDefault();
    alert("Sign up successful");
  }

  // function handleLogin(e) {
  //   e.preventDefault();
  //   // action === "Login" ? navigate("/health") : setAction("Login");
  // window.location.href = "http://localhost:8080";
  // }

  const handleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      Cookies.set("access_token", tokenResponse.access_token);
      navigate("/health");
    },
    onError: (err) => console.log("err ", JSON.stringify(err)),
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <div className="App-header">
            <span className="App-logo" alt="logo">
              Arogya
            </span>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-4 login-signup">
          <div className="submit-container">
            <div className="submit" onClick={handleLogin}>
              Login with Google
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default LoginPage;
