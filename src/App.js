import React from "react";
import Login from "./components/Login";
import Planets from "./components/Planets";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Appcontext } from "./components/Usercontext";

function App() {
  return (
    <>
      <Appcontext>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/planets" element={<Planets />} />
          </Routes>
        </BrowserRouter>
      </Appcontext>
    </>
  );
}

export default App;
