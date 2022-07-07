import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Basic from "../layouts/Basic";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Basic>
                <Home />
              </Basic>
            }
          />
        </Route>
        <Route path="/about">
          <Route
            index
            element={
              <Basic>
                <About />
              </Basic>
            }
          />
        </Route>
        <Route path="/contact">
          <Route
            index
            element={
              <Basic>
                <Contact />
              </Basic>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
