import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/user/add", { username, email, password })
      .then(() => navigate('/login'))
      .catch(() => alert("Registration Failed"));
  };

  return (
    <div className="register"><br/>
      <h2 className="title">Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}   className="input" required /><br/><br/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" required /><br/><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}   className="input" required /><br/><br/>
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;