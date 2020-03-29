import React from "react";
import { FaBars } from "react-icons/fa";

const ToggleButton = props => {
  return (
    <>
      <FaBars
        onClick={props.onClick}
        color={props.color}
        size={props.size}
        className="navbar-toggle"
      />
    </>
  );
};

export default ToggleButton;
