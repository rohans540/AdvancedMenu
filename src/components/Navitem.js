import React, { useState } from "react";
import "../styles.css";

const Navitem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={props.navClass}>
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    </div>
  );
};

export default Navitem;
