import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import profileImage from '../assets/profile.jpeg';

const IndividualDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [opportunities, setOpportunities] = useState([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null); // Track selected opportunity
  const [user, setUser] = useState(null); // Store logged-in user details
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch volunteer opportunities from the organization endpoint
  useEffect(() => {
    fetch("http://localhost:3000/organization")
      .then(response => response.json())
      .then(data => {
        const volunteerOpportunities = data.flatMap(org => org.volunteerOpportunities || []);
        setOpportunities(volunteerOpportunities);
      })
      .catch(error => console.error("Error fetching volunteer opportunities:", error));
  }, []);

  // Fetch user data to associate the application with the logged-in user
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then(response => response.json())
      .then(data => {
        // Assuming the user is the first user in the list, or you can adjust based on logged-in user
        setUser(data[0]);
      })
      .catch(error => console.error("Error fetching user data:", error));
  }, []);

  // Handle volunteer application
  const handleApply = (opportunity) => {
    if (user) {
      const applicationData = {
        opportunityId: opportunity.id,
        opportunityTitle: opportunity.title,
        opportunityDescription: opportunity.description,
        applicationDate: new Date().toISOString(),
      };

      // Send a PATCH request to update the user's data with the application
      fetch(`http://localhost:3000/user/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applications: [...(user.applications || []), applicationData], // Add the new application to the user's applications
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Application submitted successfully:', data);
          alert('Application submitted successfully!');
        })
        .catch(error => {
          console.error('Error submitting application:', error);
          alert('Error submitting application.');
        });
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Clear any user state (optional)
    setUser(null);
    // Navigate to home page
    navigate('/');
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
