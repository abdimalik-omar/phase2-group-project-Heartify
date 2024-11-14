import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    contact_email: "",
    tphone: "",
    comments: "",
    accept: false,
  });
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.accept) {
      setFormMessage("You must agree to the terms to proceed.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormMessage("Thank you for contacting us!");
        setFormData({
          fullname: "",
          contact_email: "",
          tphone: "",
          comments: "",
          accept: false,
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
      <h1>CONTACT US FORM</h1>
      <p>Fill the form to contact us.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name: </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Enter your full names"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="contact_email">Email: </label>
        <input
          type="email"
          id="contact_email"
          name="contact_email"
          placeholder="Enter your email address"
          value={formData.contact_email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="tphone">Telephone: </label>
        <input
          type="text"
          id="tphone"
          name="tphone"
          placeholder="Enter telephone number"
          value={formData.tphone}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="comments">Comments/Queries: </label>
        <textarea
          id="comments"
          name="comments"
          placeholder="Enter your comments"
          value={formData.comments}
          onChange={handleChange}
        />
        <br />
        <input
          type="checkbox"
          id="accept"
          name="accept"
          checked={formData.accept}
          onChange={handleChange}
        />
        <label htmlFor="accept">
          I agree to the terms of service and privacy policy
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {formMessage && <p>{formMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUs;
