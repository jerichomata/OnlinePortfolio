import React from "react";
import {
  FaLinkedinIn,
  FaAngellist,
  FaGithub
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/jerichomata/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/jerichomata/" },
  { Social: <FaAngellist />, link: "https://angel.co/u/jericho-mata" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center text-center text-md-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
