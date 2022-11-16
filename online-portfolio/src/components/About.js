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
                Hello! My name is Jericho and I'm a UC Davis grad with a 
                reputation for constantly tackling new challenges, persevering 
                through difficult obstacles, and having strong interpersonal 
                skills from working with different teams. 
                <br></br><br></br> My passion for development started in 2010 when my family 
                and I moved from the Philippines and my mom bought me 
                my first laptop. I disected the laptop's hardware and learned 
                how to edit basic HTML and CSS pages using Internet Explorer. 
                <br></br><br></br> 
                Today, I've been involved in several ML, full-stack web development 
                projects, and my most recent accomplishment in CWRU's 2022 
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