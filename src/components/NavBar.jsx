import React from "react";
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
    <nav className="fixed left-0 flex flex-col h-screen border-r-4 border-redquote">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="flex flex-col items-center justify-around m-2">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-[1.18vh] border-20 py-7 px-3 hover:font-bold hover:text-redquote border-t-redquote border-t-2 text-justify [writing-mode:vertical-rl] [text-orientation:upright]"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
