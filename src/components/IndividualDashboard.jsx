import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/profile.jpeg';

const IndividualDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [opportunities, setOpportunities] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch volunteer opportunities
  useEffect(() => {
    fetch("https://phase2-group-project-heartify-backend.onrender.com/organization")
      .then(response => response.json())
      .then(data => {
        const volunteerOpportunities = data.flatMap(org => org.volunteerOpportunities || []);
        setOpportunities(volunteerOpportunities);
      })
      .catch(error => console.error("Error fetching volunteer opportunities:", error));
  }, []);

  // Fetch user data
  useEffect(() => {
    fetch("https://phase2-group-project-heartify-backend.onrender.com/user")
      .then(response => response.json())
      .then(data => setUser(data[0])) // Adjust based on actual user authentication setup
      .catch(error => console.error("Error fetching user data:", error));
  }, []);

  // Apply to an opportunity
  const handleApply = (opportunity) => {
    if (user) {
      const applicationData = {
        opportunityId: opportunity.id,
        opportunityTitle: opportunity.title,
        opportunityDescription: opportunity.description,
        applicationDate: new Date().toISOString(),
      };

      fetch(`https://phase2-group-project-heartify-backend.onrender.com/user/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applications: [...(user.applications || []), applicationData],
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Application submitted successfully:', data);
          setUser(prevUser => ({
            ...prevUser,
            applications: [...(prevUser.applications || []), applicationData],
          }));
          alert('Application submitted successfully!');
        })
        .catch(error => {
          console.error('Error submitting application:', error);
          alert('Error submitting application.');
        });
    }
  };

  // Logout functionality
  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  // Delete Account with Confirmation
  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      fetch(`https://phase2-group-project-heartify-backend.onrender.com/user/${user.id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            alert('Account deleted successfully');
            navigate('/'); // Redirect to homepage after deletion
          } else {
            console.error('Error deleting account');
          }
        })
        .catch(error => console.error('Error deleting account:', error));
    }
  };

  return (
    <div className="individual-dashboard-container">
      {/* Left Sidebar */}
      <div className="user-profile">
        <br />
        <img src={profileImage} alt="Profile" />
        <h2>{user ? `${user.firstName} ${user.lastName}` : 'Loading...'}</h2>
        {/* Logout Button */}
        <button onClick={handleLogout}>Logout</button>
        {/* Delete Account Button */}
        <button onClick={handleDeleteAccount} className="delete-account-button">
          Delete Account
        </button>
      </div>

      {/* Content Dashboard */}
      <div className="content-dashboard">
        <h2>Volunteer Opportunities</h2>
        {opportunities.length > 0 ? (
          <ul className="opportunities-list">
            {opportunities.map((opportunity, index) => (
              <li key={index} className="opportunity-item">
                <h3>{opportunity.title}</h3>
                <p>{opportunity.description}</p>
                <p>Location: {opportunity.location}</p>
                <button onClick={() => handleApply(opportunity)}>Apply</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No volunteer opportunities available.</p>
        )}
      </div>

      {/* Right Section: Contribution Cards */}
      <div className="right-section">
        <h2>Contributors</h2>
        <ul className="contributor-list">
          {[...Array(4)].map((_, index) => (
            <li key={index} className="contributor-card">
              <div className="image-placeholder"></div>
              <div className="contributor-info">
                <h3>Name Placeholder</h3>
                <p>Contribution Placeholder</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contribution Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Contribution Form</h2>
            <form>
              <label htmlFor="contribution">Contribution:</label>
              <input type="text" id="contribution" placeholder="Describe your contribution" />
              <button type="submit">Submit Contribution</button>
              <button type="button" onClick={() => setShowModal(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualDashboard;
