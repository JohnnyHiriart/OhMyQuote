import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const links = [
  {
    path: "/category",
    name: " CATEGORY ",
  },
  {
    path: "/quote-me",
    name: " QUOTE ME ",
  },
  {
    path: "/top-quotes",
    name: " TOP QUOTES ",
  },
  {
    path: "/the-crew",
    name: " THE CREW ",
  },
];

const NavBar = () => {
  return (
    <nav className="fixed left-0 flex flex-col content-around h-screen border-r-4 border-redquote">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="flex-col items-center justify-around m-2 md:flex">
        {links.map((link, index) => (
          <Link to={link.path}>
            <li
              key={index}
              className="text-[1.15vh] py-[4vh] px-[2.5vh] hover:cursor-pointer hover:font-bold hover:text-redquote border-t-redquote border-t-2 text-justify [writing-mode:vertical-rl] [text-orientation:upright]"
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
