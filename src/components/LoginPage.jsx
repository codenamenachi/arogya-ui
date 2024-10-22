import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { CiUser } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPassword } from "react-icons/tb";

const LoginPage = () => {
  const [action, setAction] = useState("Login");
  const navigate = useNavigate();

  function saveNewUser(e) {
    e.preventDefault();
    alert("Sign up successful");
  }

  function handleSignUp(e) {
    e.preventDefault();
    if (action === "Sign Up") saveNewUser(e);

    if (action === "Login") setAction("Sign Up");
  }

  function handleLogin(e) {
    e.preventDefault();
    // action === "Login" ? navigate("/health") : setAction("Login");
    window.location.href = "http://localhost:8080";
  }

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
