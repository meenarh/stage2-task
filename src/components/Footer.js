import React from "react";
import zuri from "../assets/images/Vector.png";
import I4G from "../assets/images/I4G.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-1">
        <img src={zuri} alt="Zuri Logo" />
      </div>

      <div className="container-2">
        <p>HNG Internship 9 Frontend Task</p>
      </div>

      <div className="container-3">
        <img src={I4G} alt="I4G Logo" />
      </div>
    </div>
  );
};

export default Footer;
