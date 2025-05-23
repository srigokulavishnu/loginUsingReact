import React from "react";
import "../App.css";

export default function Login() {
  return (
    <div className="container1">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <label>Email Address</label>
      <input type="email" placeholder="Enter email address" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <button className="primary">Login</button>
    </div>
  );
}
