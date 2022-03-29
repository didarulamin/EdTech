import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./servicedetails.css";
import { Link, useHistory } from "react-router-dom";

//service details component and dynamic routing
const ServiceDetails = () => {
  //react router history hooks
  let history = useHistory();
  //hooks for catching parameter for address
  const { id } = useParams();
  //state hook for course
  const [course, setCourse] = useState([]);
  const { course_name, course_overview, banner_2 } = course;

  //side effects function and loading data and finding clicked data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/didarulamin/demodata/main/MOCK_DATA.json"
    )
      .then((data) => data.json())
      .then((data) => {
        const item = data.find((item) => item.id === id);
        setCourse(item);
      });
  }, [id]);

  //handler function
  const serviceBtnHandler = () => {
    history.push("/services/");
  };

  return (
    <div className="d-flex justify-content-center m-4 p-4 rounded ">
      <div className="service-details-card shadow p-4">
        <p className="fs-2">{course_name}</p>
        <img src={banner_2} alt="banner" />
        <h3>Course Overview</h3>
        <p className="fw-bold">{course_overview}</p>
        <button onClick={serviceBtnHandler} className="btn btn-primary">
          Go to Services
        </button>
        <br />
        <Link to="/enroll">
          <button className="btn btn-primary">Enroll Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
