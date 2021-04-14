import React from "react";
import MyNavbar from "./components/Navbar/MyNavbar.Component";
import MyCarousel from "./components/Carousel/MyCarousel";
import TitleMessage from "./components/TitleMessage/TitleMessage"


import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
};

export default App;