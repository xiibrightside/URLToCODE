import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row justify-center items-center w-full p-5">
      <div className="header-container flex flex-row justify-between items-center w-3/5">
        <h1 className="header-title text-6xl font-bold">shrinkLINK</h1>
        <ul className="socials flex flex-row w-1/5 justify-between">
          <li>
            <a
              href="https://github.com/xiibrightside"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-xl fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/xiibrightside?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-xl fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#0" target="_blank" rel="noreferrer">
              <i className="fa-xl fa-brands fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
