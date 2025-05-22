import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import'./Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/user/get/${email}/${password}`)
      .then(() => navigate('/Dashboard'))
      .catch(() => setError("Invalid Credentials"));
  };

  return (
    <div className="login" ><br/>
      <h2   className="title">Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}  className="form">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  className="input" required /><br/><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input"
 required /><br/><br/>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;