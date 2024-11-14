import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const verifyLogin = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const users = await response.json();
        // Check if any user in the response matches the entered email and password
        return users.some(
          (user) => user.email === email && user.password === password
        );
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(`Error during login verification at ${endpoint}:`, error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isUserValid = await verifyLogin("http://localhost:3000/user");
    const isOrganizationValid = await verifyLogin("http://localhost:3000/organization");

    if (isUserValid) {
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to the volunteer dashboard (IndividualDashboard)
    } else if (isOrganizationValid) {
      alert("Login successful!");
      navigate("/organization-dashboard"); // Placeholder for organization dashboard (if added in future)
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="login-input"
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          LOGIN
        </button>
      </form>
      <p className="signup-prompt">
        Not a member yet? <a href="/signup" className="signup-link">Sign up now</a>
      </p>
      </div>
    </div>
  );
}
