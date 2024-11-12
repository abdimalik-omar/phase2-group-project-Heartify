import React, { useState } from "react";

const OrganizationRegForm = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    telephone: "",
    website: "",
    terms: false,
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("You must agree to the terms to proceed.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/organization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert("Organization registered successfully!");
        setFormData({
          organizationName: "",
          email: "",
          telephone: "",
          website: "",
          terms: false,
        });
      } else {
        alert("There was a problem with your submission.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="organization_reg_form">
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
    </div>
  );
};

export default OrganizationRegForm;
