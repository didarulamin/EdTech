import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

//footer component
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section-one">
        <div className="brand text-start">
          <p className="text-white fs-4 text-start">Educare</p>
          <p>
            Great lesson ideas and lesson plans for ESL teachers! Educators can
            customize lesson plans to best.
          </p>
          <div>
            <FontAwesomeIcon
              icon={faTwitter}
              color="white"
              size="2x"
              className="m-1"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              color="white"
              size="2x"
              className="m-1"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              color="white"
              size="2x"
              className="m-1"
            />
          </div>
        </div>
        <div>
          <p className="text-white fs-4 text-start">Company</p>
          <div className="company">
            <Link to="#">About</Link>
            <Link to="#">Services</Link>
            <Link to="#">Instructor</Link>
            <Link to="#">Become a Teacher</Link>
            <Link to="#">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-white fs-4 text-start">Information</p>
          <div className="company">
            <Link to="#">Resources</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">How it Works</Link>
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">Payments</Link>
          </div>
        </div>
        <div className="subscribe d-flex flex-column justify-content-start">
          <p className="text-white fs-4 text-start">Subscribe</p>
          <input type="text" placeholder="Your email address" />
          <p className="w-75 text-start">
            Get the latest news and updates right at your inbox.
          </p>
        </div>
      </div>
      <br />
      <div className=" copyright">
        <span> © 2022 Educare, All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
