import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";
import ViewHistory from "./Components/ViewHistory";
import Balance from "./Components/Balance";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/history" element={<ViewHistory />} />
          <Route path="/balance" element={<Balance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
