import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login-container">
      <button className="button-register">Register</button>
      <form>
        <label> Email</label>
        <input
          type="text"
          value={email}
          placeholder="Enter Your Email"
          onChange={() => setEmail()}
        />

        <label> Password</label>
        <input
          type="text"
          value={password}
          placeholder="Enter your password"
          onChange={() => setPassword()}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
