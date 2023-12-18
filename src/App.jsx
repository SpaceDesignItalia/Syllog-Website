//Utils
import React from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import Topbar from "./Components/Global/Topbar";

//Pages
import Home from "./Pages/Home/Home";
import Error404 from "./Pages/Errors/Error404";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
