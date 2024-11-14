import React, { useState } from "react";

const OrganizationRegForm = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    telephone: "",
    website: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.terms) {
      setFormMessage("You must agree to the terms to proceed.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setFormMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/organization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormMessage("Organization registered successfully!");
        setFormData({
          organizationName: "",
          email: "",
          telephone: "",
          website: "",
          password: "",
          confirmPassword: "",
          terms: false,
        });
      } else {
        setFormMessage("There was a problem with your submission.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
      <h1>ORGANIZATION SIGN UP FORM</h1>
      <p>Sign up to post volunteer opportunities.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="o_name">Organization Name: </label>
        <input
          type="text"
          id="o_name"
          name="organizationName"
          placeholder="Enter organization name"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="o_email">Email: </label>
        <input
          type="email"
          id="o_email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="o_tphone">Telephone: </label>
        <input
          type="text"
          id="o_tphone"
          name="telephone"
          placeholder="Enter telephone number"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="website">Website: </label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="Enter website"
          value={formData.website}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="checkbox"
          id="o_accept"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
        <label htmlFor="o_accept">I agree to the terms of service and privacy policy</label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {formMessage && <p>{formMessage}</p>}
      </div>
    </div>
  );
};

export default OrganizationRegForm;
