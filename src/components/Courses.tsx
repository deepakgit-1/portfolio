import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Cources.scss";

function Courses() {
  return (
    <div className="courses-container" id="courses">
      <div className="courses-content">

        <h1>Courses</h1>

        <div className="course-card">
          
          <div className="course-details">
            <h2>Nano Degree in Artificial Intelligence</h2>
            <h4>Navigate Labs - KPR Institute of Engineering and Technology</h4>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default Courses;