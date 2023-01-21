import React, { useState, Fragment } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/v1/auth/register", { email, username, password })
      .then((response) => {
        // handle successful login
        nav("/disclaimer");
        console.log(response.data);
      })
      .catch((error) => {
        // handle login error
        console.log(error.response.data);
        setError(error.response.data.message);
      });
  };

  return (
    <Fragment>
      <div class="signup-form">
        <h2>Register </h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
