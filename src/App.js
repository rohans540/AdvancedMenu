import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Navitem from "./components/Navitem";
import DropdownMenu from "./components/DropDownMenu";
import { HomeIcon } from "./components/icons";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2)
    }
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar>
        <Navitem navClass={classes.root} icon={<HomeIcon />}>
          <DropdownMenu />
        </Navitem>
      </Navbar>
    </div>
  );
}
