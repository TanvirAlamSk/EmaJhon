import React from "react";
import logo from "../../images/Logo.svg";
import "./Navber.css";
const Navber = () => {
  return (
    <div className="navber">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="navber-items">
          <li className="navber-item">
            <a href="#">Order</a>
          </li>
          <li>
            <a href="#">Order Review</a>
          </li>
          <li>
            <a href="#">Manage Inventory</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
