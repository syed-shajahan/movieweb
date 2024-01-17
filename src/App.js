import "./App.css";
import "./assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mapsec from "./Components/Mapsec";
import About from "./Components/About";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import DetialsPage from "./Components/DetialsPage";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Mapsec />} />
            {/* <Route exact path="/details:id" element={<DetialsPage />} /> */}

            <Route path="/about/:id" element={<About />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </>
  );
}

export default App;
