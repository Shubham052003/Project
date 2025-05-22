import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/Navbar.css'
import Home from "./Home";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-light" to="/">Expense Tracker</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/history">View History</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/balance">Remaining Balance</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
