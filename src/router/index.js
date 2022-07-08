import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basic from "../layouts/Basic";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

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
        <Route path="/detail/:id">
          <Route
            index
            element={
              <Basic>
                <Detail />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
