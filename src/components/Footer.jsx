import React from "react";
import { Link } from "react-router-dom";  

export default function Footer(){
   return(
      <>
      <div className="footer">
          
            <div className="footer-nav">
                  <Link to="/ContactUs">Contact Us</Link> 
                  <br/> 
                  <Link to="/ContactUs">Help</Link>
                  <br/> 
                  <Link to="/ContactUs">About Us</Link>             
            </div>

           
            <div className="copyright">
                <p>&copy; <a className="border-bottom" href="#">Heartify Website</a>, All Rights Reserved.</p>
            </div>

            <div className="design">
                <p>Designed By <a className="border-bottom" href="https://htmlcodex.com">Felister, Kevin, and Abdimalik</a></p>
            </div>
         </div>
      </>
   );
}
