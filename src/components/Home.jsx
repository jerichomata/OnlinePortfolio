import React from "react";
import TextLoop from "react-text-loop";
import Social from "./Social";
// import resumePdf from "../assets/Resume.pdf"

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay "
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/banner/header-img.jpg"
          })`,
        }}
      >
        <div className="frame-layout__particles"></div>
        {/* End particle animation */}
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo ">
                  <h1 className="font">
                    <br />Jericho Mata.<br /> I love building{" "}
                    <TextLoop>
                      <span className="loop-text">Websites.</span>
                      <span className="loop-text">Applications.</span>
                      <span className="loop-text">Games.</span>
                    </TextLoop>{" "}
                  </h1>
                <div className="btn-bar mt-4">
                  <a className="px-btn px-btn-theme btn-md" href={
                      process.env.PUBLIC_URL + "pdf/Resume.pdf"
                      } without rel="noopener norefferer">
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>
        <Social />
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
