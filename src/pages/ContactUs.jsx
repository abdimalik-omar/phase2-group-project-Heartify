import React from "react";

const ContactUs = ()=>{
    return(
<>
<div className="contact_us_form">
<h1>CONTACT US FORM</h1>
<p>Fill the form to contact us.</p>
<form>
    <label htmlFor="fullname">Full Name: </label>
    <input type="text" id="fullname" placeholder="Enter your full names"/>
    <br/>
    <label htmlFor="contact_email">Email: </label>
    <input type="email" id="contact_email" placeholder="Enter your email address"/>
    <br/>
    <label htmlFor="tphone">Telephone: </label>
    <input type="text" id="tphone" placeholder="Enter telephone number"/>
    <br/>
    <label htmlFor="comments">Comments/Queries: </label>
    <input type="textarea" id="comments" placeholder="Enter your comments"/>
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
export default ContactUs;