import { Link } from 'react-router-dom';
import React from 'react';
import Iconimage from '../assets/images/Iconimage.avif'; 

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-icon">
          <img src={Iconimage} alt="Logo" /> 
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link> {/* Home link */}
          <Link to="/Individual">Individual</Link>
          <Link to="/Organization">Organization</Link>
          <Link to="/about">About</Link> {/* Updated to navigate to About Us page */}
          <Link to="/contact">Contact Us</Link> {/* Added Contact Us link */}
        </div>
        <div className="navbar-auth">
          <Link to="/signup" className="signup">Sign Up</Link>
          <Link to="/login" className="login">Log In</Link>
        </div>
      </nav>
    </>
  );
}
