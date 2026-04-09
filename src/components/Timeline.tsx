import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education History</h1>
        <VerticalTimeline>

          {/* B.Tech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023 - 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              B.Tech - Computer Science and Business Systems
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              KPR Institute of Engineering and Technology, Coimbatore, TN, India
            </h4>
            <p>
              CGPA: 7.65 / 10
            </p>
          </VerticalTimelineElement>

          {/* Diploma */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Diploma in Computer Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Muthayammal Polytechnic Institution, Rasipuram, TN, India
            </h4>
            <p>
              Percentage: 87% (First Class with Distinction)
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;