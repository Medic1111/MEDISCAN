import React, { Fragment } from "react";
import "./Login.css";

const Login = () => {
  return (
    <Fragment>
      <div class="signup-form">
        <h2>Log in</h2>
        <form>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <br />
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" required />
          </label>
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
