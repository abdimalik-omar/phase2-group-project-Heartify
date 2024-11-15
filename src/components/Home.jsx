import React, { useEffect, useState } from 'react';

export default function Home() {
  const [organization, setOrganization] = useState([]);

  // Fetch organization data from the local server
  useEffect(() => {
    fetch("https://phase2-group-project-heartify-backend.onrender.com/organization")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched organizations:", data); // Check the data received
        setOrganization(data);
      })
      .catch((error) => console.error("Error fetching organizations:", error));
  }, []);

  return (
    <div className="home-section">
      <h1>Heartify</h1>

      {/* About Us Section */}
      <section className="about-us">
        <p>
          Join us in making a profound difference by empowering communities, supporting meaningful causes, and creating lasting change that impacts lives across the globe. Through our platform, you can discover volunteer opportunities thoughtfully tailored to match your unique passions, skills, and commitment to service. Be part of a powerful movement that inspires hope, fosters growth, and builds resilience in those who need it most. Together, we can bridge gaps, uplift communities, and create a brighter future for generations to come.
        </p>
      </section>

      {/* Organization List */}
      <section className="organization-list">
        <h3>Our Partner Organizations</h3>
        <ul>
          {organization.length > 0 ? (
            organization.map((org) => (
              <li key={org.id}>
                <h4>{org.organizationName}</h4> {/* Update to match db.json */}
                <p>{org.website}</p> {/* Optional: Display website or other details */}
              </li>
            ))
          ) : (
            <p>No partner organizations found.</p>
          )}
        </ul>
      </section>

      {/* Additional Sections as Needed */}
    </div>
  );
}
