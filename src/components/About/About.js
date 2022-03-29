import React from "react";
import "./about.css";
import why from "../../assets/why.png";
import hero from "../../assets/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
//about page component
const About = () => {
  return (
    <div className="my-4 p-4">
      \{/* goal section */}
      <div className="d-flex justify-content-center align-items-center my-4">
        <div className="achieve-goal-two">
          <img src={why} alt="why" />
        </div>
        <div className=" choose-me-one text-start">
          <h1>
            Achieve Your <br />
            Goals With Educare
          </h1>
          <small>
            Lost the plot bobby such a fibber bleeding bits and bobs don't get
            shirty with me bugger all mate chinwag super pukka william barney,
            horse play buggered.
          </small>
          <br />
          <div>
            <ul className="my-2">
              <li>
                <FontAwesomeIcon icon={faCheck} color="green" /> Up skill your
                organization.
              </li>

              <li>
                <FontAwesomeIcon icon={faCheck} color="green" /> Access more
                then 100K online courses
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color="green" /> Learn the
                latest skills
              </li>
            </ul>
          </div>
          <button className="btn btn-primary p-2 my-4 ">Apply now</button>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center my-4">
        {/* chose us section */}
        <div className=" choose-me-one text-start">
          <p className="text-primary">Why Choses Us</p>
          <h1>Tools For Teachers And Learners</h1>
          <small>
            Oxford chimney pot Eaton faff about blower blatant brilliant, bubble
            and squeak he legged it Charles bonnet arse at public school
            bamboozled.
          </small>
          <br />
          <button className="btn btn-primary p-2 my-4">Join for free</button>
        </div>
        <div className="choose-me-two  ms-4">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default About;
