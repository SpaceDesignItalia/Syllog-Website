//Utils
import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/Global/ScrollToTop";
//Layout
import Topbar from "./Components/Global/Topbar";
import Footer from "./Components/Global/Footer";

//Pages
import Home from "./Pages/Home/Home";
import Error404 from "./Pages/Errors/Error404";

function App() {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
