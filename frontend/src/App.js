import React from "react";
import Homepage from "./views/Homepage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Projects from "./views/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="bg-[#F2F6F9]">
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
