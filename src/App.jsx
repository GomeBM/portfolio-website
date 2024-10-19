import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { ProjectDetail } from "./components/ProjectDetail/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/:projectTitle" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
