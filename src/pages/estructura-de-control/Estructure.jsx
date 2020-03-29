import React from "react";
import Title from "../../components/title/Title";
import Footer from "../../components/footer/Footer";

const Estructure = () => {
  return (
    <div className="l-estructure">
      <div className="estrcuture">
        <Title title="Pruebas de estructura" className="title" />
        <div className="contenedorEST">
          <h2 style={{ color: "white", marginBottom: "2rem" }}>
            Comprende las siguientes pruebas:
          </h2>
          <div>
            <p className="parrafoS">
              1. Prueba de condición Se centra en la prueba de cada una de las
              condiciones del programa y tiene como propósito detectar los
              errores en las condiciones de un programa y los errores del
              programa.
            </p>
          </div>
          <div>
            <p className="parrafoS">
              2. Prueba del flujo de datos Se centra en la selección de caminos
              de prueba de un programa de acuerdo con la ubicación de las
              definiciones y los usos de las variables del programa. Esta prueba
              es útil para seleccionar caminos de prueba de un programa que
              contenga sentencias if o bucles anidados.
            </p>
          </div>
          <div>
            <p className="parrafoS">
              3. Prueba de bucles Se centra en la validez de las construcciones
              de bucles. Se definen los siguientes tipos de bucles:
            </p>
          </div>
          <div>
            <img
              className="imgEst"
              src="https://ingenieriasoft.webcindario.com/images/tmpD4ED.png"
              alt="Bucles simples"
            />
          </div>
          <div>
            <img
              className="imgEst"
              src="https://ingenieriasoft.webcindario.com/images/tmp1468.png"
              alt="Bucles anidado"
            />
          </div>
          <div>
            <img
              className="imgEst"
              src="https://ingenieriasoft.webcindario.com/images/tmpBB77.png"
              alt="Bucles concatenados"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Estructure;
