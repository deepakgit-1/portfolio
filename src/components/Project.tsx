import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDatabase, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Summary.scss';

// Tech stacks
const skinApp = ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"];

const libraryApp = ["HTML", "CSS", "JavaScript", "PHP", "SQL", "XAMPP"];

const atmApp = ["Arduino", "C++", "Biometrics"];

function Projects() {
    return (
    <div className="container" id="projects">
        <div className="skills-container">
            <h1>Projects</h1>

            <div className="skills-grid">

                {/* Project 1 */}
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Skin Disease Prediction App</h3>
                    <p>
                        Developed a deep learning-based skin disease classification system using CNN.
                        Built a web interface for real-time prediction from uploaded images.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {skinApp.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Project 2 */}
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Library Management System</h3>
                    <p>
                        Built a database-driven web application for efficient book management.
                        Designed a responsive and user-friendly interface.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {libraryApp.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Project 3 */}
                <div className="skill">
                    <FontAwesomeIcon icon={faFingerprint} size="3x"/>
                    <h3>Fingerprint Based Intelligent ATM</h3>
                    <p>
                        Developed a biometric authentication system for secure ATM transactions.
                        Implemented real-time user verification for fraud prevention.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {atmApp.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Projects;