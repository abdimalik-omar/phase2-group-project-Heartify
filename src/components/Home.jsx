import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';  // Import Carousel component

export default function Home() {
  const [organization, setOrganization] = useState([]);

  // Fetch organization data from the local server
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setOrganization(data));
  }, []);

  return (
    <div>
      {/* Carousel Component */}
      <section className="carousel-section">
        <Carousel />  {/* Render Carousel component */}
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to our organization. We are committed to making a difference
          in our community by connecting volunteers with meaningful projects.
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
