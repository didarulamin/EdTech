import React from "react";
import "./enrollment.css";
import useAuth from "./../../hooks/useAuth";

const Enrollment = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="enroll">
      <h1>Enrollment Success</h1>
    </div>
  );
};

export default Enrollment;
