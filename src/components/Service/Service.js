import React from "react";
import "./service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faBookReader,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

//Service component
const Service = ({ item }) => {

  //destructuring item object
  const {
    banner_01,
    category,
    lesson_count,
    rating,
    rating_count,
    course_name,
    instructor,
    price,
    id,
  } = item;
  return (
    <div className="col service-hover-effects">
      <div className="card m-2 card-overflow">
        <div className="course">
          <img src={banner_01} className="card-img-top" alt="..." />
          <div className="course-tag">
            <p className="btn btn-primary">{category}</p>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <p>
                <FontAwesomeIcon icon={faBookReader} color="black" />
                <span> {lesson_count} Lesson</span>
              </p>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faStar} color="gold" />
                {rating_count}({rating})
              </span>
            </div>
          </div>
          <Link to={`/serviceDetails/${id}`}>
            <p className="card-title text-start btn btn-details fs-5">
              {course_name}
            </p>
          </Link>
          <p title="Instructor" className="card-text text-start fs-5">
            <FontAwesomeIcon icon={faUser} color="black" />
            <span className="p-2 btn-details"> {instructor}</span>
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="text-primary fs-4">{price}</p>
          <Link to={`/serviceDetails/${id}`} className="btn-details fs-5 btn">
            <span> Know Details</span>
            <span className="ms-2">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
