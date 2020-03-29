import React from "react";

// Default image
import image from "../../assets/img/nav.png";

const Picture = props => {
  return <img className={props.className} src={props.source} alt={props.alt} />;
};

Picture.defaultProps = {
  source: image
};

export default Picture;
