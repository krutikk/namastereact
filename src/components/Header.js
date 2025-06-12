import React, { use, useState, useContext } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/useContext";


const Header = () => {
  const [btnLogin, setButtonLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const loadAboutPage = () => {
    window.location.href = "/about";
  };

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div>
        <img className="w-28" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex"></div>
      <div className="flex items-center flex-row justify-between">
        <ul className="flex p-4 m-4 flex-row justify-center items-center space-x-4">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>{loggedInUser}</li>
          <li>Cart</li>
        </ul>
        <div>
          <button
            className="login-button px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
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
          
        </div>
      </div>
    </div>
  );
};

export default Header;
