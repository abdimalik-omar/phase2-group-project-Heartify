import React from 'react';
import './App.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

function SignUpPage() {
  return (
    <div className="signup-container">
      <h1>Signup on Heartify</h1>
      <div className="signup-options">
        <div className="signup-card">
          <img src={image1} alt="Individual Icon" className="signup-image" />
          <h2>Individual</h2>
          <p>Apply for volunteer opportunities here!</p>
          <button className="signup-button">Signup as Individual</button>
        </div>
        
        <div className="signup-card">
          <img src={image2} alt="Organization Icon" className="signup-image" />
          <h2>Organization</h2>
          <p>Apply as an organization here!</p>
          <button className="signup-button">Signup as Organization</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
