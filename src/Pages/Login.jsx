import React, { useState } from "react";
import "../styles/Pages/Login.scss";
import Button from "../Components/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const submitThis = () => {
    const info = { email: email, passw: passw };
    setDataInput([info]);
  };
  return (
    <div className="login-main">
      <div className="login-main-bg-overlay"></div>
      <div className="login-main-background">
        <div className="login-main-background-shape"></div>
        <div className="login-main-background-shape"></div>
      </div>
      <form action="" onSubmit={submitThis} className="login-main-form">
    <h1>Login</h1>

        <div>
          <label htmlFor="email" className="login-main-form-label">
            Email
          </label>
          <input
            className="login-main-form-input"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passw" className="login-main-form-label">
            Password
          </label>
          <input
            className="login-main-form-input"
            type="password"
            name="passw"
            id="passw"
            value={passw}
            onChange={(e) => setPassw(e.target.value)}
          />
        </div>
        <div className="login-main-form-button">
          <Button type="submit" name="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
