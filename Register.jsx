import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ← import this
import "../App.css";

export default function Register() {
  const [agency, setAgency] = useState("Yes");
  const navigate = useNavigate();  // ← create navigate function

  // You can also add form state and validation here if you want

  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <label>Full Name*</label>
      <input type="text" placeholder="Enter full name" />

      <label>Phone number*</label>
      <input type="text" placeholder="Enter phone number" />

      <label>Email address*</label>
      <input type="email" placeholder="Enter email address" />

      <label>Password*</label>
      <input type="password" placeholder="Enter password" />

      <label>Company name*</label>
      <input type="text" placeholder="Enter company name" />

      <label>Are you an Agency?*</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={agency === "Yes"}
            onChange={() => setAgency("Yes")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={agency === "No"}
            onChange={() => setAgency("No")}
          />
          No
        </label>
      </div>

      <button
        type="button"  // Always good to add to prevent form submit side effects
        className="primary"
        onClick={() => navigate("/account")}  // ← navigation here
      >
        Create Account
      </button>
    </div>
  );
}
