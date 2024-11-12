import React from "react";
export default function Footer(){
    return(
        <>
         <div className="container mx-auto row">
            <div className="col-md-4">
            <ul>
            <li><Link to="Contact Us"></Link></li>
           <li><Link to="Contact Us"></Link></li> 
           <li><Link to="Contact Us"></Link></li> 

            </ul>
            <div class="copyright col-md-4">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Heartify Website</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                      
                        Designed By <a class="border-bottom" href="https://htmlcodex.com">Felister, Kevin And Abdimalik</a>
                    </div>
                </div>
            </div>

            </div>
            
            
            

        </div>
        </>
       
    )
}