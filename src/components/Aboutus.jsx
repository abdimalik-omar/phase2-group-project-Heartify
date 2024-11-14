import React from "react";
import Aboutimage from '../assets/images/Aboutimage.jpeg';

export default function Aboutus(){
   return(
      <>
      <section className="about-us-section">
         
         <div className="about-us-text">
            <h2>About Us</h2>
            <p>
               Our organization is dedicated to making a positive impact in the community.
               We strive to connect people through meaningful projects, foster community
               engagement, and promote opportunities for growth and collaboration. Join us
               in our journey to create lasting change and build a brighter future for all.
            </p>
         </div>
         
        
         <div className="about-us-image">
            <img src={Aboutimage} alt="About Us" className="img-fluid" />
         </div>
      </section>
      </>
   );
}
