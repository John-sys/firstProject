import React from "react";
import Homepage from "./views/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Projects from "./views/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="bg-brown">
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
