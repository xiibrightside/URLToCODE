/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import Docs from "./Docs/Docs";

function App() {
  return (
    <div>
      <Header />
      <Section />
      <Docs />
      <Footer />
    </div>
  );
}

export default App;
