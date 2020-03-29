import React from "react";

// Import components

const Title = props => {
  return <h1 className={props.className}>{props.title}</h1>;
};

Title.defaultProps = {
  title: "Undefined"
};

export default Title;
