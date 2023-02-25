import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
  return (
    <div className="main_container">
      <Navbar></Navbar>

      <div className="content_container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout;
