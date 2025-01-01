import { useState } from "react";
// import {useNavigate}
import { useNavigate } from "react-router-dom";
import "./Register.css";
function Register() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {};

  const handleLogin = () => {
    // navigate('')
  };
  return (
    <div className="register-container">
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={() => setName()}
        />
        <label> Email</label>
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={() => setEmail()}
        />
        <label> Password</label>
        <input
          type="text"
          placeholder="Enter Your Password"
          value={password}
          onChange={password}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
