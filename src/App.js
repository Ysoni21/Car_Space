import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/about.js";
import FeaturedCars from "./components/FeaturedCars.js";

function App() {
  return (
    <div className="App">
      <Navbar />
    <main className="main-content">
      <div className="hero-text">
        <h1>Hello World!!</h1>
        <p>This is my first react site about cars!!!</p>
        <p>Click on any card to get the image</p>
        <p>Then click on car to get more details...</p>
      </div>

      <FeaturedCars />
     
      </main>
      <div className="About">
      <About />
      </div>
    </div>
  );
}

export default App;
