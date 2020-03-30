import React from "react";
import Title from "../../components/title/Title";

const Ruta = () => {
  return (
    <div className="l-ruta">
      <div>
        <div>
          <Title title="Ruta basica" className="title" />
          <p className="parrafoS">
            La prueba del camino básico es una técnica de prueba de la Caja
            Blanca propuesta por Tom McCabe. <br />
            Esta técnica permite obtener una medida de la complejidad lógica de
            un diseño y usar esta medida como guía para la definición de un
            conjunto básico. <br />
            La idea es derivar casos de prueba a partir de un conjunto dado de
            caminos independientes por los cuales puede circular el flujo de
            control. Para obtener dicho conjunto de caminos independientes se
            construye el Grafo de Flujo asociado y se calcula su complejidad
            ciclomática. Los pasos que se siguen para aplicar esta técnica son:
            <br />
          </p>
          <p className="parrafoS">
            A partir del diseño o del código fuente, se dibuja el grafo de flujo
            asociado. Se calcula la complejidad ciclomática del grafo. Se
            determina un conjunto básico de caminos independientes. Se preparan
            los casos de prueba que obliguen a la ejecución de cada camino del
            conjunto básico. <br />
            Los casos de prueba derivados del conjunto básico garantizan que
            durante la prueba se ejecuta por lo menos una vez cada sentencia del
            programa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ruta;
