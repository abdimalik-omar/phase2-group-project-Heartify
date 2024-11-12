import React from "react";

const VolunteerRegForm = ()=>{
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
export default VolunteerRegForm;