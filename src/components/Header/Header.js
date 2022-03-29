import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

//header component
const Header = () => {
  return (
    <div className="shadow">
      <nav className="navbar navbar-expand-lg p-4 ">
        <div className="container">
          <Link to="/home">
            <h1 className="mx-4">Educare</h1>
          </Link>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item ">
                <Link to="/home" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link active">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/instructor" className="nav-link active">
                  Instructors
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <input
                className="form-control "
                type="text"
                placeholder="Search"
              />
            </span>
            <span className="navbar-text">
              <Link to="/signup">
                <button className="btn btn-primary ms-4">Sign Up</button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
