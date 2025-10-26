import React from "react";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
