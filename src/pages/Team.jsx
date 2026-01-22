import React from 'react';
import { teamMembers } from '../mock';

export const Team = () => {
  return (
    <div className="page-team">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">OUR TEAM</h1>
          <p className="body-large" style={{ marginTop: '24px', maxWidth: '800px' }}>
            Meet our team of experienced chartered accountants dedicated to providing exceptional financial services.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-designation">{member.designation}</p>
                  <p className="team-card-qualification">{member.qualification}</p>
                  <div className="team-card-details">
                    <div className="team-detail-item">
                      <span className="caption">EXPERIENCE</span>
                      <span className="body-small">{member.experience}</span>
                    </div>
                    <div className="team-detail-item">
                      <span className="caption">SPECIALIZATION</span>
                      <span className="body-small">{member.specialization}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
