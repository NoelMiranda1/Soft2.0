import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = props => {
  const { active } = props;
  const [setActive] = useState(false);
  console.log(active);
  return (
    <Router>
      <ul className={`navbar-content ${active ? "navbar-show" : ""}`}>
        <li className="navbar-item to">
          <Link
            className="navbar-link"
            onClick={() => setActive(active)}
            to="/"
          >
            Inicio
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className="navbar-link"
            onClick={() => setActive(active)}
            to="/white"
          >
            Blanca
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className="navbar-link"
            onClick={() => setActive(active)}
            to="/black"
          >
            Negra
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className="navbar-link"
            onClick={() => setActive(active)}
            to="/estructure"
          >
            Estructura
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            className="navbar-link"
            onClick={() => setActive(active)}
            to="/objet"
          >
            Orientada a Obj
          </Link>
        </li>
      </ul>
    </Router>
  );
};

export default Nav;
