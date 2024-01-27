import React from "react";
import logo from "../assets/logo.PNG";
import './navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light shadow-sm">
        <div className="container-fluid">
          < NavLink className="navbar-brand ms-5" to="/">
            <img src={logo} alt="logo" height="45px"/>
          </NavLink>
          <form className="d-flex me-md-5" role="search">
            <input
              className="searchbox form-control me-2 text-muted"
              type="search"
              placeholder="Search"
            />
             <a className="nav-link text-dark" href="#"><i class="fa-solid fa-house text-dark fs-5"></i></a>
             <a className="nav-link text-dark searchIcon" href="#"><i class="fa-solid fa-magnifying-glass fs-5"></i></a>
             <a className="nav-link text-dark" href="#"><i class="fa-regular fa-heart text-dark fs-5"></i></a>
             <NavLink className="nav-link text-dark " to="/myprofile"><i class="fa-solid fa-circle text-dark fs-5 mt-0 ms-0"></i></NavLink>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
