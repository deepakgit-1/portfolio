import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/About.scss";

function Summary() {
  return (
    <div className="summary-container" id="summary">
      <div className="summary-card">

        <FontAwesomeIcon icon={faUserGraduate} className="summary-icon" />

        <h1>About Me</h1>

        <p>
          Computer Science and Business Systems undergraduate with a Diploma in 
          Computer Engineering, actively building skills in software engineering 
          and Artificial Intelligence. Eager to develop intelligent solutions that combine technical expertise 
          with business understanding. Enthusiastic about using technology to solve 
          real-world challenges.
        </p>

      </div>
    </div>
  );
}

export default Summary;