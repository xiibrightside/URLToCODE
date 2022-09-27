/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import Docs from "./Docs/Docs";

function App() {
  return (
    <div>
      <header>
        <h1 className="header-title">URL ⇄ CODE</h1>
      </header>
      <Section />
      <Docs />
    </div>
  );
}

export default App;
