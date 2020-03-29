import React, { useState } from "react";

// Import components
import Picture from "../picture/Picture";

import image from "../../assets/img/nav.png";
import Nav from "../nav/Nav";
import ToggleButton from "../buttons/ToggleButton";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="l-header container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Picture source={image} />
        </div>
        <ToggleButton color="#03F9FC" onClick={() => setActive(!active)} />
        <Nav active={active} />
      </nav>
    </header>
  );
};

export default Navbar;
