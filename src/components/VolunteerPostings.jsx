
import React, { useState } from 'react';

function VolunteerPostings() {
  const [opportunities, setOpportunities] = useState([
    { id: 1, role: 'Food Bank Volunteer', requirements: 'Must be 18+', date: '2024-11-20' },
    { id: 2, role: 'Community Cleanup', requirements: 'Open to all', date: '2024-11-25' }
  ]);

  return (
    <div>
      <h2>Volunteer Opportunities</h2>
      <ul>
        {opportunities.map(opportunity => (
          <li key={opportunity.id}>
            <h3>{opportunity.role}</h3>
            <p>{opportunity.requirements}</p>
            <p>Date: {opportunity.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VolunteerPostings;
