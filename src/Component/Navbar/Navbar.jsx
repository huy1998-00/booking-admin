import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShop,
  faArrowRightFromBracket,
  faTruck,
  faBox,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="nav_container">
      <h1>Admin Page</h1>
      <div className="nav_items">
        <h4>MAIN</h4>
        <Link to="/admin">
          <FontAwesomeIcon
            icon={faTableColumns}
            className="fa-1x"
          ></FontAwesomeIcon>
          <span>Dashboard</span>
        </Link>
      </div>

      <div className="nav_items">
        <h4>LIST</h4>
        <Link>
          <FontAwesomeIcon icon={faUser} className="fa-1x"></FontAwesomeIcon>
          <span>User</span>
        </Link>
        <Link to="/admin/hotels">
          <FontAwesomeIcon icon={faShop} className="fa-1x"></FontAwesomeIcon>
          <span>Hotels</span>
        </Link>

        <Link to="/admin/rooms">
          <FontAwesomeIcon icon={faBox} className="fa-1x"></FontAwesomeIcon>
          <span>Rooms</span>
        </Link>

        <Link to="/admin/trans">
          <FontAwesomeIcon icon={faTruck} className="fa-1x"></FontAwesomeIcon>
          <span>Transactions</span>
        </Link>
      </div>
      <div className="nav_items">
        <h4>NEW</h4>
        <Link to="/admin/newhotel">
          <FontAwesomeIcon icon={faShop} className="fa-1x"></FontAwesomeIcon>
          <span>New Hotel</span>
        </Link>
        <Link to="/admin/newroom">
          <FontAwesomeIcon icon={faBox} className="fa-1x"></FontAwesomeIcon>
          <span>New Room</span>
        </Link>
      </div>
      <div className="nav_items">
        <h4>USER</h4>
        <div onClick={handleLogout}>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="fa-1x"
          ></FontAwesomeIcon>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
