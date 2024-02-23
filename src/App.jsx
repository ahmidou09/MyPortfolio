import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AppLayout from "./ui/AppLayout";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
