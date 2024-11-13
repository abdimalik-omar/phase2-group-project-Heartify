import React from "react";
import { Link } from "react-router-dom";  

export default function Footer(){
   return(
      <>
      <div className="container mx-auto">
         <div className="row d-flex justify-content-between align-items-center">
          
            <div className="col-md-4">
               <ul className="list-unstyled">
                  <li><Link to="/ContactUs">Contact Us</Link></li>  
                  <li><Link to="/ContactUs">Help</Link></li>
                  <li><Link to="/ContactUs">About Us</Link></li>
               </ul>
            </div>

           
            <div className="col-md-4 text-center">
                <p>&copy; <a className="border-bottom" href="#">Heartify Website</a>, All Rights Reserved.</p>
            </div>

            <div className="col-md-4 text-center text-md-end">
                <p>Designed By <a className="border-bottom" href="https://htmlcodex.com">Felister, Kevin, and Abdimalik</a></p>
            </div>
         </div>
      </div>
      </>
   );
}
