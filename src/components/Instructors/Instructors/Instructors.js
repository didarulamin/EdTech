import React, { useEffect, useState } from "react";
import "./instructors.css";
import Instructor from "../../Instructor/Instructor";

//Instructor page component
const Instructors = () => {
  //instructor state hook
  const [instructor, setInstructor] = useState([]);

  //side effects function and loading instructor api data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/didarulamin/demodata/main/MOCK_DATA_instructor.json"
    )
      .then((data) => data.json())
      .then((data) => setInstructor(data));
  }, []);

  return (
    <div className="my-4 p-2">
      <div>
        <h1>
          Our Most
          <br />
          Popular Teachers
        </h1>
        <p>
          You don't have to struggle alone, you've got our assistance and help.
        </p>
      </div>
      <div className="instructor-grid">
        {/* looping instructor elements and printing  */}
        {instructor.map((item) => (
          <Instructor key={item.id} item={item}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
