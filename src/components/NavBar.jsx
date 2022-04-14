import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    path: "/",
    name: "logo",
  },
  {
    path: "/category",
    name: "category",
  },
  {
    path: "/quote-me",
    name: "quote me",
  },
  {
    path: "/top-quotes",
    name: "top quotes",
  },
  {
    path: "/the-crew",
    name: "the crew",
  },
];

const NavBar = () => {
  return (
    <nav className="writing-mode: vertical-rl">
      <ul className="navbar">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
