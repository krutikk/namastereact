import React, { use, useState } from "react";
import { LOGO_URL } from "../utils/Constant";
const Header = () => {
  const [btnLogin, setButtonLogin] = useState("Login");
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
