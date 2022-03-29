import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./services.css";
//services page component
const Services = () => {
  //courses state hook
  const [courses, setCourses] = useState([]);

  //side effects function and loading demo data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/didarulamin/demodata/main/MOCK_DATA.json"
    )
      .then((data) => data.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="my-4 p-4 border-bottom">
        <h1>Training Services</h1>
      </div>
      <div className="service-cards my-4 p-4 ">
        {/* looping courses elements and printing*/}
        {courses.map((item) => (
          <Service key={item.id} item={item}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
