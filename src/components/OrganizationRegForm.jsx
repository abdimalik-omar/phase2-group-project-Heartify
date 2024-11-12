import React from "react";

const OrganizationRegForm = ()=>{
    return(
<>
<div className="organization_reg_form">
<h1>ORGANIZATION SIGN UP FORM</h1>
<p>Sign up to post volunteer opportunities.</p>
<form>
    <label htmlFor="o_name">First Name: </label>
    <input type="text" id="o_name" placeholder="Enter organization name"/>
    <br/>
    <label htmlFor="o_email">Email: </label>
    <input type="email" id="o_email" placeholder="Enter your email address"/>
    <br/>
    <label htmlFor="o_tphone">Telephone: </label>
    <input type="text" id="o_tphone" placeholder="Enter telephone number"/>
    <br/>
    <label htmlFor="website">County of Residence: </label>
    <input type="text" id="website" placeholder="Enter Website"/>
    <br/>
    <input type="radio" id="o_accept"></input>
    <label htmlFor="o_accept">Do you agree to the terms of service and privacy policy.</label>
    <br/>
    <button type="submit">Sign Up</button>
</form>
</div>
</>
    );
}
export default OrganizationRegForm;