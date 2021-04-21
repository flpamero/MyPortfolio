import React from "react";
import MyNavbar from "./components/Navbar/MyNavbar.Component";
import MyCarousel from "./components/Carousel/MyCarousel";
import TitleMessage from "./components/TitleMessage/TitleMessage"
import About from "./pages/about/About.Component"
import Skills from "./components/Skills/Skills.Component"
import Contacts from "./pages/Contacts/Contact.Component";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <About />
      <Skills/>
      <Contacts />
    </div>
  );
};

export default App;