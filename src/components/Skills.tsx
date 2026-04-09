import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Summary.scss';

// Skill Categories
const programming = ["Python"];

const ml = ["Scikit-learn", "TensorFlow", "Keras", "PyTorch"];

const data = ["NumPy", "Pandas", "OpenCV", "Seaborn", "Matplotlib"];

const bi = ["Power BI", "Tableau"];

const database = ["MySQL", "PostgreSQL"];

const tools = ["Git", "GitHub"];

const web = ["HTML5", "CSS", "React.js", "Figma"];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>

            <div className="skills-grid">

                {/* Programming */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Programming</h3>
                    <p>Strong foundation in programming with focus on problem solving and application development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {programming.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Machine Learning */}
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning & Deep Learning</h3>
                    <p>Experience in building ML/DL models for prediction, classification, and real-world AI applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {ml.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Data Analysis */}
                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Data Analysis & Visualization</h3>
                    <p>Skilled in data processing, visualization, and extracting insights using modern data tools.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {data.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* BI Tools */}
                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>BI Tools</h3>
                    <p>Experience in building dashboards and reports for business insights and decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {bi.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Database */}
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database Systems</h3>
                    <p>Knowledge of relational databases and data storage with efficient querying.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {database.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Version Control */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Version Control</h3>
                    <p>Experience in code management, collaboration, and version tracking using Git.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {tools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Web */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Web Technologies</h3>
                    <p>Building responsive and modern web applications using frontend technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {web.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Skills;