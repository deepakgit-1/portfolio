import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        
        <div className="content">
          
          <h1>DEEPAKKUMAR G</h1>
          <p>B.Tech CS&BS Undergraduate</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/-deepak-kumar-g/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;