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
    <nav className="fixed left-0 flex flex-col content-around border-r-4 mr-autoauto ml- pr-7 border-redquote">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li
            key={index}
            className="flex p-8 m-auto mt-auto text-nav border-20 hover:font-bold hover:text-redquote  border-t-black border-t-2 text-justify [writing-mode:vertical-rl] [text-orientation:upright]"

          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
