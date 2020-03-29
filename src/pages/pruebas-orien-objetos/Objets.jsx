import React from "react";
import Title from "../../components/title/Title";
import Footer from "../../components/footer/Footer";

const Objets = () => {
  return (
    <div className="l-objets">
      <div className="objets">
        <Title title="Orientadas a objetos" className="title" />
        <p className="objetstext">
          Consiste en pruebas o testeos basados en tecnicas que permiten valorar
          la calidad del software,Se realiza inicando por la unidad minima que
          es la clase y se avanza hasta la integracion y el objetivo es
          encontrar la moyor cantidad de errores cometidos sin darse cuenta y
          buscamos conocer si un objeto a cambiado su estado o coportamiento.
        </p>
        <div>
          <div className="ti">
            <Title title="Niveles" className="title" />
          </div>
          <div class="containerOBJ">
            <div class="containerOBJ-clases">
              <Title title="Clases" className="title" />
              <p className="parrafoS">
                Interaccion entre metodos y variables de instancia
              </p>
            </div>
            <div class="containerOBJ-clases">
              <Title title="Clusters" className="title" />
              <p className="parrafoS">Interaccion entre grupos de clases</p>
            </div>
            <div class="containerOBJ-clases">
              <Title title="Sistemas" className="title" />
              <p className="parrafoS">Probar todas las clases</p>
            </div>
          </div>
        </div>
        <div className="containerOBJ">
          <div>
            <Title title="Ventajas" className="title" />
            <p className="parrafoS">
              La identificación de objetos y definición de clases <br />
              La organizacion jerarjica de las clases <br />
              La prueba de modulos por clases individuales <br />
            </p>
          </div>
          <div>
            <Title title="Desventajas" className="title" />
            <p className="parrafoS">
              La identificación de objetos y definición de clases <br />
              La organizacion jerarjica de las clases <br />
              La prueba de modulos por clases individuales <br />
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Objets;
