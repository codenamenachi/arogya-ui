import React, { useEffect, useState } from "react";
import { CurrentDateTimeWish } from "./DateTime";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function LandingHeader() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const getUserDetails = async (accessToken) => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
    );
    const data = await response.json();
    setUserDetails(data);
  };

  useEffect(() => {
    const accessToken = Cookies.get("access_token");

    if (!accessToken) {
      navigate("/");
    }

    getUserDetails(accessToken);
  }, [navigate]);

  return (
    <div>
      <div className="landing-header">
        <span className="landing-header-logo">A</span>
        <nav>
          <p className="landing-header-welcome">
            Welcome, Dr {userDetails ? userDetails.name : ""}
          </p>
        </nav>
        <CurrentDateTimeWish />
      </div>
    </div>
  );
}
