import React from "react";
import Title from "../../components/title/Title";
import Footer from "../../components/footer/Footer";
import Picture from "../../components/picture/Picture";
import image3 from "../../assets/img/ventajass.jpg";
import image2 from "../../assets/img/desventajas.png";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const White = () => {
  return (
    <>
      <div className="l-white">
        <div className="white">
          <Title title="¿Que son las pruebas de caja blanca?" className="x t" />
          <p className="parrafoW">
            Las pruebas de caja blanca (también conocidas como pruebas de caja
            de cristal o pruebas estructurales) se centran en los detalles
            procedimentales del software, por lo que su diseño está fuertemente
            ligado al código fuente. El ingeniero de pruebas escoge distintos
            valores de entrada para examinar cada uno de los posibles flujos de
            ejecución del programa y cerciorarse de que se devuelven los valores
            de salida adecuados. <br />
            A pesar de que este enfoque permite diseñar pruebas que cubran una
            amplia variedad de casos de prueba, podría pasar por alto partes
            incompletas de la especificación o requisitos faltantes, pese a
            garantizar la prueba exhaustiva de todos los flujos de ejecución del
            código analizado. Las principales técnicas de diseño de pruebas de
            caja blanca son: <br />
            <span> •Pruebas de flujo de control </span>
            <br />
            <span> •Pruebas de flujo de datos </span>
            <br />
            <span> •Pruebas de bifurcación (branch testing) </span>
            <br />
            <span>•Pruebas de caminos básicos</span>
          </p>
          <div className="containerW">
            <div className="containerW-ventajas">
              <Flippy flipOnClick flipDirection="Horizontal" ref={r => r}>
                <FrontSide className="card front">
                  <Picture className="card-img1" source={image3} />
                  <p className="title c">Ventajas</p>
                  <span className="card-span">Click me</span>
                </FrontSide>
                <BackSide className="card front">
                  <p className="containerW">
                    Es recomendable hacer esta prueba si se tien la oportunidad
                    ya que por estas pruebas se conoce el funcionamiento interno
                    de un sistema lo que si se aislan los componentes de un
                    sistema de cajas negra puede hacerce una prueba de caja
                    blanca a cada componente lo que por conecuensia puede llegar
                    a dar el funcionamiento de ese sistema o como es que trabaja
                  </p>
                </BackSide>
              </Flippy>
            </div>
            <div className="containerW-desventajas">
              <Flippy flipOnClick flipDirection="Horizontal" ref={r => r}>
                <FrontSide className="card front">
                  <Picture className="card-img1" source={image2} />
                  <p className="title c">Desventajas</p>
                  <span className="card-span">Click me</span>
                </FrontSide>
                <BackSide className="card front">
                  <p className="containerW">
                    Para hacer una prueba de caja blanca se debe tener mucho
                    cuidado en examinar los componentes de un sistema ya que
                    cualquier dato incorrecto o datos perdidos ya sea por no
                    vistos o incorrecto uso puede llevar a un sistema a un
                    colapso y si el sistema no esta emsamblado correctamente
                    puede ternerse por seguro que el sistema no cumplira con sus
                    funciones o no las cumplira correctamente o simplemente no
                    las cumplira, esto es del punto de vista fisico pero al
                    estudiar un sistema de un punto de de vista algoritmico solo
                    se deben aislar los algorimos e identificar su
                    funcionamiento aparte y luego su funcionamiento como todo
                  </p>
                </BackSide>
              </Flippy>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default White;
