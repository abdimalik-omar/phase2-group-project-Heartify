import React, { useEffect, useState } from 'react';

export default function Home() {
  const [organization, setOrganization] = useState([]);

  // Fetch organization data from the local server
  useEffect(() => {
    fetch("http://localhost:3000/organization")
      .then((res) => res.json())
      .then((data) => setOrganization(data));
  }, []);

  return (
    <div className='home-section'>
        <h1>Heartify</h1>

      {/* About Us Section */}
      <section className="about-us">
        <p>
        Join us in making a profound difference by empowering communities, supporting meaningful causes, and creating lasting change that impacts lives across the globe. Through our platform, you can discover volunteer opportunities thoughtfully tailored to match your unique passions, skills, and commitment to service. Be part of a powerful movement that inspires hope, fosters growth, and builds resilience in those who need it most. Together, we can bridge gaps, uplift communities, and create a brighter future for generations to come.
        </p>
      </section>

      {/* Organization List (e.g., Display Organizations) */}
      <section className="organization-list">
        <h3>Our Partner Organizations</h3>
        <ul>
          {organization.map((org) => (
            <li key={org.id}>
              <h4>{org.name}</h4>
              <p>{org.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Sections as Needed */}
      {/* Insert additional content or components here for the home page */}
    </div>
  );
}
