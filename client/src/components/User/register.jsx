import React, { useState, Fragment, useContext } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authCtx } from "../../features/auth-ctx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();
  const authMgr = useContext(authCtx);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/v1/auth/register", { email, username, password })
      .then((response) => {
        authMgr.setCurrentUser(response.data);
        authMgr.setIsAuth(true);
        nav("/disclaimer");
      })
      .catch((error) => {
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
          <button type="submit">Register</button>
          {error && <p>{error}</p>}
          <p style={{ cursor: "pointer" }} onClick={() => nav("/login")}>
            Already have an account? Login
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
