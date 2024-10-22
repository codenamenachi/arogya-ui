import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

const Form = () => {
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    alert("signup");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event);
    navigate("/health");
  };
  return (
    <>
      <form className="form-login" onSubmit={handleLogin}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            {" "}
            <FormInput label="Username" type="text" />
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <FormInput label="Password" type="password" />
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            {" "}
            <button
              type="button"
              onClick={handleSignUp}
              className="btn btn-secondary m-2"
            >
              Signup
            </button>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="col-3"></div>
        </div>
      </form>
    </>
  );
};

export default Form;
