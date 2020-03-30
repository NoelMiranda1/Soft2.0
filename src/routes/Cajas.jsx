import React from "react";
import { Router } from "@reach/router";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import White from "../pages/caja-blanca/Blanca";
import Black from "../pages/caja-negra/Negra";
import Objet from "../pages/pruebas-orien-objetos/Objets";
import Estructure from "../pages/estructura-de-control/Estructure";
import { Result } from "antd";
import { Link } from "@reach/router";
import Ruta from "../pages/ruta-basica/Ruta";

const NotFound = () => {
  return (
    <div className="l-404">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/" type="primary">
            Back Home
          </Link>
        }
      />
    </div>
  );
};

const Cajas = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <White path="/white" />
        <Black path="/black" />
        <Objet path="/objet" />
        <Estructure path="/estructure" />
        <Ruta path="/ruta" />
        <NotFound default />
      </Router>
    </>
  );
};

export default Cajas;
