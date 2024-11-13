import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for routing

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Create a navigate function for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect to a new route (e.g., after successful login)
    // For now, redirect to a mock dashboard or homepage
    navigate("/dashboard"); // Change '/dashboard' to the appropriate route
  };

  return (
    <div className="login-container">
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
  );
}
