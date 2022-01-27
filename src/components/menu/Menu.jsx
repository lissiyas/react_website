import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a>
            <Link to={"/"}> Home </Link>
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#edu">Education</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a>
            {" "}
            <Link to={"/projects"}> Projects</Link>
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a>
            {" "}
            <Link to={"/contact"}>Contact </Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
