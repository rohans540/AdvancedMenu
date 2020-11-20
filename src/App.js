import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Navitem from "./components/Navitem";

export default function App() {
  return (
    <div className="App">
      <Navbar>
        <Navitem icon="Menu" />
        <Navitem icon="Settings" />
        <Navitem icon="Account" />
      </Navbar>
    </div>
  );
}
