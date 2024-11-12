import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
         <div to="container-fluid">
    <Link to="navbar-brand" href="#">Navbar</Link>
    <div to="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div to="navbar-nav">
        <Link to="nav-link active" aria-current="page" href="#">Home</Link>
        <Link to="nav-link" href="#">Features</Link>
        <Link to="nav-link" href="#">Pricing</Link>
        <Link to="nav-link disabled" aria-disabled="true">Disabled</Link>
      </div>
    </div>
  </div>

        </>
       
    )
    
}