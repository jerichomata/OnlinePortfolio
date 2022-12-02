import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <div className="sm-title">
            <h4 className="font">Where I've Worked</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              
              <h6>Full-Stack Web Developer Intern @Freestand</h6>
              <span className="theme-bg">May 2021 - Sep 2021</span>
              <p> &#x2022; Integrated Cloud Firebase storage, allowing users to directly upload .jpg, .png, or.mp4 files
                </p>
              <p> &#x2022; Designed & implemented full stack CRUD web application using React and Node.js
                </p>
              {/* <p> &#x2022; Communicated with developers and product design team on a weekly basis
                </p> */}
            </li>
            <li>
              <h6>Game Developer Intern @Green Science Games</h6>
              <span className="theme-bg">Feb 2020 - Apr 2020</span>
              <p> &#x2022; Created 2D game based on Plants vs. Zombies using Unity and C# 
                </p>
              <p> &#x2022; Automated customer reporting system in handling issues related to live-image captures
                </p>
              {/* <p> &#x2022; Collaborated with a team of students to create interactive interface
                </p> */}
            </li>
            <li>
              <h6>Website Designer (UI/UX) @Finesse</h6>
              <span className="theme-bg">Oct 2018 - Jun 2019</span>
              <p> &#x2022; Created brand and took on multiple roles including logo design, and web developer
                </p>
              <p> &#x2022; Oversaw team of 4 developers, acting as project manager for platform transition
                </p>
              {/* <p> &#x2022; Built and shipped a marketing website and e-commerce platform
                </p> */}
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

      </div>
    </>
  );
};

export default Skills;
