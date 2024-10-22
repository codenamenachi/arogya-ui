import React, { Component, useEffect, useState } from "react";
import { SearchPage } from "./SearchPage";
import { SavePage } from "./SavePage";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState("");

  function handleLogout(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light link-panel text-white"
          style={{
            fontSize: "20px",
          }}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand text-white col-xs-1"
              style={{
                fontStyle: "italic",
                marginLeft: "10px",
                fontSize: "23px",
              }}
              href="/health"
            >
              Arogya
            </a>
            <div className="pe-lg-3">||</div>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link navbar-label text-light active"
                    aria-current="page"
                    // href="/save"
                    onClick={() => {
                      setButtonClicked("save");
                    }}
                  >
                    Save
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link navbar-label text-light active"
                    // href="/search"
                    onClick={() => {
                      setButtonClicked("search");
                    }}
                  >
                    Search
                  </a>
                </li>
                {/* <li className="nav-item">
                  
                </li> */}
              </ul>
              <div
                className="logout-link"
                style={{
                  marginRight: "20px",
                  marginLeft: "auto",
                  fontWeight: "bold",
                }}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Logout"
              >
                <a className="nav-link text-light ps-1" onClick={handleLogout}>
                  <FaPowerOff />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="content">
          {buttonClicked === "save" ? (
            <SavePage />
          ) : buttonClicked === "search" ? (
            <SearchPage />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
