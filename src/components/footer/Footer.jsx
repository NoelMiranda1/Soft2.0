import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="food">
      <div className="xxx">
        <div className="foot-redes">
          <a
            href="https://www.facebook.com/noel.miranda.3114935"
            className="foot-space"
          >
            <FaFacebook color="#03F9FC" size="2rem" className="foot-image" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=50589828017"
            className="foot-space"
          >
            <FaWhatsapp color="#03F9FC" size="2rem" className="foot-image" />
          </a>
        </div>
        <div>
          <p className="foot-text">Derechos de UniSys ©2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
