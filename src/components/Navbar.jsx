import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
      <span className="navbar-toggler-icon"></span>
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Individual</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Organisation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>


        </>
       
    )
    
}