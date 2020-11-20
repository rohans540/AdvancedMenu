import React from "react";
import DropdownItem from "./DropdownItem";
import { HomeIcon } from "./icons";
import { green } from "@material-ui/core/colors";
import "../styles.css";

const DropdownMenu = (props) => {
  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<HomeIcon color="primary" />}>
        Home Blue
      </DropdownItem>
      <DropdownItem rightIcon={<HomeIcon color="secondary" />}>
        Account Red
      </DropdownItem>
      <DropdownItem
        leftIcon={<HomeIcon style={{ color: green[500] }} />}
        rightIcon={<HomeIcon color="action" />}
      >
        Logout Green
      </DropdownItem>
    </div>
  );
};

export default DropdownMenu;
