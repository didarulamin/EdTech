import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
//Home page component
const Home = () => {
  //useState hooks for managing state of training data
  const [courses, setCourses] = useState([]);

  //side effects function and load api data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/didarulamin/demodata/main/MOCK_DATA.json"
    )
      .then((data) => data.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div className=" hero-section ">
        <div className="overly d-flex justify-content-start align-items-center">
          <div className="m-4 hero-text ">
            <h1>
              Access Quality Training services Online and Offline From Top
              Instructor.
            </h1>
            <p>
              Meet university,and cultural institutions, who'll share their
              experience.
            </p>

            <Link to="/services">
              <button className="btn btn-primary">view all services</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Explore courses section */}
      <div className="explore-courses">
        <h1 className="text-center my-4 p-4">
          Explore
          <br />
          Training Services
        </h1>

        <div className="popular-courses ">
          <div className="popular-course shadow p-3 m-2  rounded">
            <small className="fs-5 fw-bold">Data Science</small>
            <br />
            <small>Data is Everything</small>
          </div>
          <div className="popular-course shadow p-3 m-2  rounded">
            <small className="fs-5 fw-bold">Business</small> <br />
            <small>Improve your business</small>
          </div>
          <div className="popular-course shadow p-3 m-2  rounded">
            <small className="fs-5 fw-bold">Art & Design</small> <br />
            <small>Fun & Challenging</small>
          </div>
          <div className="popular-course shadow p-3 m-2  rounded">
            <small className="fs-5 fw-bold">LifeStyle</small>
            <br />
            <small>New Skill,New You</small>
          </div>
          <div className="popular-course shadow p-3 m-2  rounded">
            <small className="fs-5 fw-bold">Marketing</small> <br />
            <small>Improve your sell</small>
          </div>
          <div className="popular-course shadow p-3 m-2  rounded">
            <small className="fs-5 fw-bold">Finance</small> <br />
            <small>Fun & Challenging</small>
          </div>
          <div className="popular-course shadow p-3 m-2  rounded">
            <small className="fs-5 fw-bold">Health & Fitness</small>
            <br />
            <small>Invest to Your Body</small>
          </div>
          <div className="popular-course shadow p-3 m-2 rounded">
            <small className="fs-5 fw-bold">Music</small> <br />
            <small>Major or Minor</small>
          </div>
          <div className="popular-course shadow p-3 m-2 rounded">
            <small className="fs-5 fw-bold">Academics</small> <br />
            <small>High Education Level</small>
          </div>
        </div>
      </div>

      {/* Popular courses section */}
      <div>
        <h1 className="text-center my-4 p-4">
          Our Popular Training <br />
          Services
        </h1>

        <div className="service-card my-4">
          {courses.slice(0, 4).map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
