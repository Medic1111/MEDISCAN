import React, { useState, Fragment, useContext } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authCtx } from "../../features/auth-ctx";

const LoginSignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();
  const authMgr = useContext(authCtx);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/v1/auth/login", { username, password })
      .then((response) => {
        authMgr.setCurrentUser(response.data);
        authMgr.setIsAuth(true);
        nav(`/users/${response.data._id}`);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data.message);
      });
  };

  return (
    <Fragment>
      <div class="signup-form">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
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
          <p style={{ cursor: "pointer" }} onClick={() => nav("/signup")}>
            Dont have an account? Sign up
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginSignup;
