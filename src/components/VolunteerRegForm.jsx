<<<<<<< HEAD
import React from "react";
export default function VolunteerRegForm(){
    return(
        <>
        
        <div className="volunteer_reg_form">
        <h1>VOLUNTEER SIGN UP FORM</h1>
        <p>Sign up to access volunteer opportunities that have been posted by different organizations</p>
        <form>
            <label htmlFor="fname">First Name: </label>
            <input type="text" id="fname" placeholder="Enter first name"/>
            <br/>
            <label htmlFor="lname">Last Name: </label>
            <input type="text" id="lname" placeholder="Enter last name"/>
            <br/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" placeholder="Enter your email address"/>
            <br/>
            <label htmlFor="tphone">Telephone: </label>
            <input type="text" id="tphone" placeholder="Enter telephone number"/>
            <br/>
            <label htmlFor="county">County of Residence: </label>
            <input type="text" id="county" placeholder="Enter County of Residence"/>
            <br/>
            <label htmlFor="experience">County of Residence: </label>
            <input type="text" id="experience" placeholder="Enter volunteer experience"/>
            <br/>
            <input type="radio" id="accept"></input>
            <label htmlFor="accept">Do you agree to the terms of service and privacy policy</label>
            <br/>
            <button type="submit">Sign Up</button>
        </form>
        </div>
        </>
            );

}
 

=======
import React, { useState } from "react";

const VolunteerRegForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    county: "",
    experience: "",
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
      const response = await fetch("https://phase2-group-project-heartify-backend.onrender.com/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert("Thank you for signing up!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          county: "",
          experience: "",
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
    <div className="volunteer_reg_form">
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
    </div>
  );
};

export default VolunteerRegForm;
>>>>>>> 3c7691ce266377ab62db4b24128f1f7f452b0cb9
