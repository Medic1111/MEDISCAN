import React, { Fragment } from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <Fragment>
      <div class="signup-form">
        <h2>Sign Up</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <br />
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Signup;
