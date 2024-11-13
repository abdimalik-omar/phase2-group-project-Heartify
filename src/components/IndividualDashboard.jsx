import React, { useState } from 'react';


const IndividualDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Left Section: User Form */}
      <div className="left-section">
        <h2>User Details</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="contributions">Contributions:</label>
          <input type="text" id="contributions" placeholder="Number of contributions" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button type="button" onClick={() => setShowModal(true)}>Add Contribution</button>
        </form>
      </div>

      {/* Right Section: Contribution Cards */}
      <div className="right-section">
        <h2>Contributors</h2>
        <ul className="contributor-list">
          {[...Array(4)].map((_, index) => (
            <li key={index} className="contributor-card">
              <div className="image-placeholder">Image {index + 1}</div>
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
