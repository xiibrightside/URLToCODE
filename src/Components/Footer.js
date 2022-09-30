import React from "react";

const Footer = () => {
  return (
    <div className="footer-container w-full mt-20 p-5 flex justify-center items-center">
      <div className="footer-exec flex flex-row justify-around w-2/4">
        <p>
          <a href="https://shrtco.de/tos" target="_blank" rel="noreferrer">
            Terms of Service
          </a>
        </p>
        <p>|</p>
        <p>
          Coded by :-{" "}
          <a
            href="https://github.com/xiibrightside"
            target="_blank"
            rel="noreferrer"
          >
            xiibrightside
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
