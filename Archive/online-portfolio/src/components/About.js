import React from "react";
import AboutImg from "../assets/img/AboutImg.png";
export const About = () => {
    return (
        <section className="about section" id="about">
            
            {/* <span className="section__subtitle">My Introduction</span> */}
            
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">

                <h2 className="section__title">About Me</h2>
                <p className="about__description"> 
                Hello! My name is Jericho and I'm a UC Davis graduate with a 
                reputation for constantly tackling new challenges and having strong interpersonal 
                skills from working with different teams. 
                <br></br><br></br> My passion for development started as a young elementary student
                as I was helping my mom opganize our bills. We've always used pen and paper 
                but constantly lost track of our expenses so I learned excel where I started using the basic 
                code editor.  
                <br></br><br></br> 
                Today, I've been involved in several full-stack web development and ML 
                projects, and my most recent accomplishment was in CWRU's 2022 
                Hackathon where my team won 1st place under the FinTech track.
                <br></br><br></br> 
                Some technologies I've been working with recently:
                <br></br><br></br> 
                <ul className="about__technologies">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>

                    <li>Python</li>
                    <li>Flask</li>
                    <li>C++</li>
                </ul>
                </p>
                
            </div>
        </div>
        </section>
    )
}