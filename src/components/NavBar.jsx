import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Home from "./Home";

const links = [
  // {
  //   path: "/",
  //   name: "",
  // },
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
    <nav>
      <Logo />
      <Link to="/" element={<Home />} />
      <ul className="">
        {links.map((link, index) => (
          <li
            key={index}
            className="flex w-auto p-5 m-1 border-20 text-justify [writing-mode:vertical-rl] [text-orientation:upright]"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
