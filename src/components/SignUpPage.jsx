import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

function SignUpPage() {
  const navigate = useNavigate();
  
  const handleIndividualSignup = () => {
    navigate('/individual-signup');
  };

  const handleOrganizationSignup = () => {
    navigate('/organization-signup');
  };

  return (
    <div className="signup-container">
      <h1>Signup on Heartify</h1>
      <div className="signup-options">
        <div className="signup-card">
          <img src={image2} alt="Individual Icon" className="signup-image" />
          <h2>Individual</h2>
          <p>Apply for volunteer opportunities here!</p>
          <button className="signup-button" onClick={handleIndividualSignup}>
            Signup as Individual
          </button>
        </div>
        
        <div className="signup-card">
          <img src={image1} alt="Organization Icon" className="signup-image" />
          <h2>Organization</h2>
          <p>Apply as an organization here!</p>
          <button className="signup-button" onClick={handleOrganizationSignup}>
            Signup as Organization
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
