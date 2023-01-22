import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Disclaimer from "./components/Home/Disclaimer";
import Register from "./components/Auth/register";
import Protect from "./components/Protect/Protect";
import User from "./components/User/User";
import Scan from "./components/Scan/Scan";
import MedicalForm from "./components/MedicalForm/MedicalForm";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/disclaimer"
            element={
              <Protect>
                <Disclaimer />
              </Protect>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/medical/form"
            element={
              <Protect>
                <MedicalForm />
              </Protect>
            }
          />
          <Route
            exact
            path="/users/:id"
            element={
              <Protect>
                <User />
              </Protect>
            }
          />
          <Route exact path="/scan/:id" element={<Scan />} />
          <Route path="*" element={<Home />} replace />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
