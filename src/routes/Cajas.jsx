import React from "react";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import White from "../pages/caja-blanca/Blanca";
import Black from "../pages/caja-negra/Negra";
import Objet from "../pages/pruebas-orien-objetos/Objets";
import Estructure from "../pages/estructura-de-control/Estructure";
import { Result } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <Route to="/" component={Home} />
        <Route to="/white" component={White} />
        <Route to="/black" component={Black} />
        <Route to="/objet" component={Objet} />
        <Route to="/estructure" component={Estructure} />
        <NotFound default />
      </Router>
    </>
  );
};

export default Cajas;
