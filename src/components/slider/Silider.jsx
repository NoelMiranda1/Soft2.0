import React from "react";
import Title from "../title/Title";

const Slider = () => {
  return (
    <div className="l-slider">
      <div className="slider">
        <div className="slider-content">
          <div className="slider-flex">
            <div className="top" />
            <Title className="title" title="Caja Negra" />
            <p className="parafo">
              En teoria de sistemas y fisica, se denomina caja negra a aquel
              elemento que es estudiado desde el punto de vista de las entrada
              que recibe y las salidas o respuesta que produce, sin tener en
              cuenta su funcionamiento interno
            </p>
          </div>
          <div className="slider-flex">
            <Title className="title" title="Caja Blanca" />
            <p className="parafo">
              En programacion se denomina cajas blancas a un tipo de pruebas de
              software que se realizan sobre las funciones internas de un
              modulo. Asi como las pruebas de caja negra ejercitan los
              requisitos funcionales desde el exterior del modulo, las de caja
              blanca estan dirigidas a funciones internas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
