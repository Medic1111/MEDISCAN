import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar.js";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./components/User/Login";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Disclaimer from "./components/Home/Disclaimer";
import Register from "./components/User/register";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
