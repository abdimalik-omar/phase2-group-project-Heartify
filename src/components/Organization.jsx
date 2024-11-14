import React, { useState } from 'react';

export default function Organization() {
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
    timeCommitment: '',
    minAge: '',
    skills: '',
    benefits: '',
    deadline: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
  };

  return (
    <form class="volunteer-form" action="#" method="post">
    <h2>Volunteer Opportunity Details</h2>
    
    <label for="organization-name">Organization Name</label>
    <input type="text" id="organization-name" name="organizationName" required />
  
    <label for="opportunity-title">Opportunity Title</label>
    <input type="text" id="opportunity-title" name="opportunityTitle" required />
  
    <label for="description">Description</label>
    <textarea id="description" name="description" rows="4" required></textarea>
  
    <label for="location">Location</label>
    <input type="text" id="location" name="location" placeholder="Remote or specify city" required />
  
    <label for="duration">Duration</label>
    <input type="text" id="duration" name="duration" placeholder="e.g., 3 months, one-time event" required />
  
    <label for="start-date">Start Date</label>
    <input type="date" id="start-date" name="startDate" required />
  
    <label for="requirements">Requirements</label>
    <textarea id="requirements" name="requirements" rows="3"></textarea>
  
    <label for="contact-email">Contact Email</label>
    <input type="email" id="contact-email" name="contactEmail" required />
  
    <label for="application-deadline">Application Deadline</label>
    <input type="date" id="application-deadline" name="applicationDeadline" required />
  
    <label for="benefits">Benefits</label>
    <textarea id="benefits" name="benefits" rows="2"></textarea>
  
    <label for="volunteer-type">Volunteer Type</label>
    <select id="volunteer-type" name="volunteerType" required>
      <option value="in-person">In-person</option>
      <option value="remote">Remote</option>
      <option value="hybrid">Hybrid</option>
    </select>
  
    <button type="submit">Submit Opportunity</button>
  </form>
  );
}
