import React from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import White from "../pages/caja-blanca/Blanca";
import Black from "../pages/caja-negra/Negra";
import Objet from "../pages/pruebas-orien-objetos/Objets";
import Estructure from "../pages/estructura-de-control/Estructure";
import Ruta from "../pages/ruta-basica/Ruta";

const Cajas = () => {
  return (
      <Router>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/white" component={White}/>
        <Route path="/black" component={Black} />
        <Route path="/objet" component={Objet} />
        <Route path="/estructure" component={Estructure} />
        <Route path="/ruta" component={Ruta} />
      </Router>
  );
};

export default Cajas;
