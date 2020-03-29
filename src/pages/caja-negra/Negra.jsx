import React from "react";
import Title from "../../components/title/Title";
import Footer from "../../components/footer/Footer";
import image3 from "../../assets/img/ventajass.jpg";
import image2 from "../../assets/img/desventajas.png";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Picture from "../../components/picture/Picture";

const White = () => {
  return (
      <div className="l-black">
        <div className="white">
          <Title title="¿Que son las pruebas de caja negra?" className="b t" />
          <p className="TEXTO b">
            Es una técnica de pruebas de software en la cual la funcionalidad se
            verifica sin tomar en cuenta la estructura interna de código,
            detalles de implementación o escenarios de ejecución internos en el
            software. <br />
            En las pruebas de caja negra, nos enfocamos solamente en las
            entradas y salidas del sistema, sin preocuparnos en tener
            conocimiento de la estructura interna del programa de software. Para
            obtener el detalle de cuáles deben ser esas entradas y salidas, nos
            basamos en los requerimientos de software y especificaciones
            funcionales. <br />
          </p>
          <div className="containerW">
            <div className="containerW-ventajas">
              <Flippy flipOnClick flipDirection="Horizontal" ref={r => r}>
                <FrontSide className="card2 front2">
                  <Picture className="card-img1 C" source={image3} />
                  <p className="title b">Ventajas</p>
                  <span className="card-span">Click me</span>
                </FrontSide>
                <BackSide className="card2 front2">
                  <p className="containerW">
                    Con estas pruebas es facil encontrar la funcion y poder
                    porbar esa capacidad y llegar a ver hasta que punto es capaz
                    de desarrollarse
                  </p>
                </BackSide>
              </Flippy>
            </div>
            <div className="containerW-desventajas">
              <Flippy flipOnClick flipDirection="Horizontal" ref={r => r}>
                <FrontSide className="card2 front2">
                  <Picture className="card-img1 C" source={image2} />
                  <p className="title b">Desventajas</p>
                  <span className="card-span">Click me</span>
                </FrontSide>
                <BackSide className="card2 front2">
                  <p className="containerW">
                    En ocaciones estas pruebas pueden volverse complicadas si no
                    se cuenta con datos suficientes para el estudio ya que un
                    sistema puede tener maneras de ejecucion complicadas y puede
                    aberiarse el sistema sin el debido cuidado
                  </p>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default White;
