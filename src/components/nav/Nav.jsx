import React from "react";
import { Link } from 'react-router-dom'

const Nav = props => {
  const { active } = props;
  
  return (
    <ul className={`navbar-content ${active ? "navbar-show" : ""}`}>
      <li className="navbar-item to">
        <Link className="navbar-link" to="/">
          Inicio
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          className="navbar-link"
          to="/white"
        >
          Blanca
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          className="navbar-link"
          to="/black"
        >
          Negra
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          className="navbar-link"
          to="/estructure"
        >
          Estructura
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          className="navbar-link"
          to="/objet"
        >
          Orientada a Obj
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          className="navbar-link"
          to="/ruta"
        >
          Ruta Basica
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
