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

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
