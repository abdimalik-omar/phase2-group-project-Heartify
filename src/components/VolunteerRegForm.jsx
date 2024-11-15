import React, { useState } from "react";

const VolunteerRegForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    county: "",
    experience: "",
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
      const response = await fetch("https://phase2-group-project-heartify-backend.onrender.com/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormMessage("Thank you for signing up!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          county: "",
          experience: "",
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
      <h1>VOLUNTEER SIGN UP FORM</h1>
      <p>Sign up to access volunteer opportunities that have been posted by different organizations</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name: </label>
        <input
          type="text"
          id="fname"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lname">Last Name: </label>
        <input
          type="text"
          id="lname"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="tphone">Telephone: </label>
        <input
          type="text"
          id="tphone"
          name="telephone"
          placeholder="Enter telephone number"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="county">County of Residence: </label>
        <input
          type="text"
          id="county"
          name="county"
          placeholder="Enter County of Residence"
          value={formData.county}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="experience">Volunteer Experience: </label>
        <input
          type="text"
          id="experience"
          name="experience"
          placeholder="Enter volunteer experience"
          value={formData.experience}
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
          id="accept"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
        <label htmlFor="accept">I agree to the terms of service and privacy policy</label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {formMessage && <p>{formMessage}</p>}
      </div>
    </div>
  );
};

export default VolunteerRegForm;
