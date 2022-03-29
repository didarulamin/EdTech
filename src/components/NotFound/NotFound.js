import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/error.png";
import "./NotFound.css";

//error message for 404 page
const NotFound = () => {
  return (
    <div className="my-4 p-4">
      <img src={error} alt="error" srcset="" />
      <div>
        <h3>Page Not Found!</h3>
        <p>Please try searching for some other page.</p>
        <Link className="btn btn-primary" to="/home">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
