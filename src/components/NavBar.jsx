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
    <nav className="flex fixed left-0 flex-col content-around mr-5 ml-2 pr-4 border-r-4 border-redquote">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="flex flex-col pt-10">
        {links.map((link, index) => (
          <li
            key={index}
            className="flex p-5 m-1 text-nav border-20 hover:font-bold hover:text-redquote  border-t-black border-t-2 text-justify [writing-mode:vertical-rl] [text-orientation:upright]"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
