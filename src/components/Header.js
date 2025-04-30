import React, { use, useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router";
const Header = () => {
  const [btnLogin, setButtonLogin] = useState("Login");
  const loadAboutPage = () => {
    window.location.href = "/about";
  };

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              if (btnLogin === "Login") {
                setButtonLogin("Logout");
              } else {
                setButtonLogin("Login");
              }
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
