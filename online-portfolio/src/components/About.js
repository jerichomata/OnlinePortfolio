import React from "react";
import AboutImg from "../assets/img/AboutImg.png";
export const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            {/* <span className="section__subtitle">My Introduction</span> */}
            
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">

                <p className="about__description"> 
                Hello! My name is Jericho and I'm a UC Davis grad with a 
                reputation for constantly tackling new challenges, persevering through 
                difficult obstacles, and having strong interpersonal skills 
                from working with different teams. My passion for development started in 2010
                when my family and I moved from the Philippines and my mom bought me my first 
                laptop. I was so interested and disected the laptop's hardware and learned how
                to edit basic HTML and CSS pages using Internet Explorer.{"\n"}
                Today I have been more involved in creating full-scale websites, applications, 
                and games. My most recent accomplishment was CWRU's 2022 Hackathon where my 
                team won 1st place under the FinTech track.
                </p>

            </div>
        </div>
        </section>
    )
}