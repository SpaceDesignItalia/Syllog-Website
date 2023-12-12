import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Topbar from "./Components/Global/Topbar";

function App() {
  return (
    <>
    <Topbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
