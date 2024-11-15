import React, { useState, useEffect } from 'react';

const Organization = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    opportunityTitle: '',
    description: '',
    location: '',
    duration: '',
    startDate: '',
    requirements: '',
    contactEmail: '',
    applicationDeadline: '',
    benefits: '',
    volunteerType: 'in-person',
  });

  const [opportunities, setOpportunities] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const organizationId = "3876"; // Replace with the actual organization ID

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch('http://localhost:3000/user');
        const data = await response.json();
        setApplicants(data.user);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicants();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOpportunity = {
      id: Date.now().toString(),
      title: formData.opportunityTitle,
      description: formData.description,
      location: formData.location,
      duration: formData.duration,
      startDate: formData.startDate,
      requirements: formData.requirements,
      contactEmail: formData.contactEmail,
      applicationDeadline: formData.applicationDeadline,
      benefits: formData.benefits,
      volunteerType: formData.volunteerType,
    };

    try {
      // Patch request to update volunteerOpportunities
      await fetch(`http://localhost:3000/organization/${organizationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          volunteerOpportunities: [...opportunities, newOpportunity],
        }),
      });

      // Update local state
      setOpportunities([...opportunities, newOpportunity]);
      setFormData({
        organizationName: '',
        opportunityTitle: '',
        description: '',
        location: '',
        duration: '',
        startDate: '',
        requirements: '',
        contactEmail: '',
        applicationDeadline: '',
        benefits: '',
        volunteerType: 'in-person',
      });
    } catch (error) {
      console.error('Error adding opportunity:', error);
    }
  };

  const deleteOpportunity = (id) => {
    setOpportunities(opportunities.filter((opportunity) => opportunity.id !== id));
  };

  const getApplicantsForOpportunity = (opportunityId) => {
    return applicants.flatMap((applicant) =>
      applicant.applications
        ? applicant.applications
            .filter((app) => app.opportunityId === opportunityId)
            .map((app) => ({
              ...applicant,
              applicationDate: app.applicationDate,
              opportunityDescription: app.opportunityDescription,
            }))
        : []
    );
  };

  return (
    <div className="organization-container">
      <form className="volunteer-form" onSubmit={handleSubmit}>
        <h2>Volunteer Opportunity Details</h2>

        <label htmlFor="organization-name">Organization Name</label>
        <input
          type="text"
          id="organization-name"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />

        <label htmlFor="opportunity-title">Opportunity Title</label>
        <input
          type="text"
          id="opportunity-title"
          name="opportunityTitle"
          value={formData.opportunityTitle}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Remote or specify city"
          required
        />

        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="e.g., 3 months, one-time event"
          required
        />

        <label htmlFor="start-date">Start Date</label>
        <input
          type="date"
          id="start-date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="requirements">Requirements</label>
        <textarea
          id="requirements"
          name="requirements"
          rows="3"
          value={formData.requirements}
          onChange={handleChange}
        />

        <label htmlFor="contact-email">Contact Email</label>
        <input
          type="email"
          id="contact-email"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="application-deadline">Application Deadline</label>
        <input
          type="date"
          id="application-deadline"
          name="applicationDeadline"
          value={formData.applicationDeadline}
          onChange={handleChange}
          required
        />

        <label htmlFor="benefits">Benefits</label>
        <textarea
          id="benefits"
          name="benefits"
          rows="2"
          value={formData.benefits}
          onChange={handleChange}
        />

        <label htmlFor="volunteer-type">Volunteer Type</label>
        <select
          id="volunteer-type"
          name="volunteerType"
          value={formData.volunteerType}
          onChange={handleChange}
          required
        >
          <option value="in-person">In-person</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <button type="submit">Submit Opportunity</button>
      </form>

      <div className="applicants-container">
        <h2>Applicant Details</h2>
        <ul>
          {opportunities.map((opportunity) => (
            <li key={opportunity.id}>
              <h3>{opportunity.opportunityTitle}</h3>
              <p>{opportunity.description}</p>
              <p>Location: {opportunity.location}</p>
              <p>Duration: {opportunity.duration}</p>
              <button onClick={() => deleteOpportunity(opportunity.id)}>Delete</button>

              <div className="applicant-details">
                <h4>Applicants</h4>
                <ul>
                  {getApplicantsForOpportunity(opportunity.id).map((applicant, index) => (
                    <li key={index}>
                      <p>Name: {applicant.firstName} {applicant.lastName}</p>
                      <p>Email: {applicant.email}</p>
                      <p>Applied on: {new Date(applicant.applicationDate).toLocaleDateString()}</p>
                      <p>Message: {applicant.opportunityDescription}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Organization;
