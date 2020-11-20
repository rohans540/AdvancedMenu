import React from "react";
import "../styles.css";

const Navitem = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
};

export default Navitem;
