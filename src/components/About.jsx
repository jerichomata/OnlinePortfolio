import React, { useState } from "react";

const About = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box dark-img-box">
            <img src="img/logo/about.png" alt="pciture" />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box about-me">
            <h3>Jericho Mata</h3>
            <h5>
              <span className="color-theme">Software Engineer</span> based
              in <span className="color-theme">San Jose, CA</span>
            </h5>
            <p>
              I'm a UC Davis graduate with a reputation for constantly tackling new challenges and 
              having strong interpersonal skills from working with different teams.
              <br></br><br></br> 
              My passion for development started as a young elementary student
              as I was helping my mom organize our bills. We've always used pen and paper 
              but constantly lost track of our expenses so I learned Excel where I started using the basic 
              code editor. 
              <br></br><br></br> 
              From there my interests in application development grew especially in creating
              tools teaching financial literacy.
            </p>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="#contact" onClick={handleClick}>
                Let's Chat
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
