// import React from 'react';
// import { teamMembers } from '../mock';

// export const Team = () => {
//   return (
//     <div className="page-team">
//       {/* Header Section */}
//       <section className="page-header">
//         <div className="container">
//           <h1 className="heading-1">ABOUT US</h1>
//           <p className="body-large" style={{ marginTop: '24px', maxWidth: '800px' }}>
//             Chartered Accountants - Mumbai - Est. 2015
//           </p>
//         </div>
//       </section>

//       {/* Team Grid */}
//       <section className="team-section">
//         <div className="container">
//           <div className="team-grid">
//             {teamMembers.map((member) => (
//               <div key={member.id} className="team-card">
//                 {/* <div className="team-card-image">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                 </div> */}
//                 <div className="team-card-content">
//                   <h3 className="team-card-name">{member.name}</h3>
//                   <p className="team-card-designation">{member.designation}</p>
//                   <p className="team-card-qualification">{member.qualification}</p>
//                   <div className="team-card-details">
//                     <div className="team-detail-item">
//                       <span className="caption">EXPERIENCE</span>
//                       <span className="body-small">{member.experience}</span>
//                     </div>
//                     <div className="team-detail-item">
//                       <span className="caption">SPECIALIZATION</span>
//                       <span className="body-small">{member.specialization}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };







import React from 'react';
import { teamMembers } from '../mock';

export const Team = () => {
  return (
    <div className="page-team">
      {/* Header & Introduction Section */}
      <section className="page-header" style={{ padding: '60px 0', background: '#1a1a1a', color: '#fff' }}>
        <div className="container">
          <span className="caption" style={{ color: '#d9fb06', letterSpacing: '2px', fontWeight: 'bold' }}>
            CHARTERED ACCOUNTANTS · MUMBAI · EST. 2015
          </span>
          <h1 className="heading-1" style={{ marginTop: '12px', fontSize: '2.5rem' }}>M/s Mukhi and Associates</h1>
          <p className="body-large" style={{ marginTop: '20px', maxWidth: '800px', fontSize: '1.25rem', color: '#ccc', fontStyle: 'italic' }}>
            "Trusted financial expertise, built on integrity and precision."
          </p>
          
          <div className="about-description" style={{ marginTop: '32px', maxWidth: '800px', lineHeight: '1.8', color: '#e0e0e0' }}>
            <p style={{ marginBottom: '16px' }}>
              At M/s Mukhi and Associates, we bring together over 8 years of dedicated practice in chartered accountancy to help individuals, businesses, and organisations navigate the complexities of India's financial and regulatory landscape. Founded and led by a qualified Chartered Accountant, our firm is built on a foundation of precision, professional ethics, and a client-first approach.
            </p>
            <p>
              We understand that behind every balance sheet is a business with real goals — and behind every tax filing is a person seeking clarity and peace of mind. Our practice is driven by the belief that sound financial counsel should be accessible, transparent, and tailored to each client's unique situation. Whether you are a growing startup, an established enterprise, or a salaried professional, we are equipped to serve your needs with thoroughness and care.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights / Stats Section */}
      <section className="highlights-section" style={{ padding: '48px 0', background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div className="highlights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div className="highlight-item" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: '#0056b3', margin: '0 0 8px 0' }}>8+ Years</h2>
              <p className="body-small" style={{ margin: 0, color: '#666' }}>Active Practice</p>
            </div>
            <div className="highlight-item" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: '#0056b3', margin: '0 0 8px 0' }}>CA Qualified</h2>
              <p className="body-small" style={{ margin: 0, color: '#666' }}>Chartered Accountants</p>
            </div>
            <div className="highlight-item" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: '#0056b3', margin: '0 0 8px 0' }}>360°</h2>
              <p className="body-small" style={{ margin: 0, color: '#666' }}>End-to-end Financial Services</p>
            </div>
            <div className="highlight-item" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: '#0056b3', margin: '0 0 8px 0' }}>100%</h2>
              <p className="body-small" style={{ margin: 0, color: '#666' }}>Compliance-focused Approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="expertise-section" style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container">
          <h2 className="heading-2" style={{ marginBottom: '32px', textAlign: 'center' }}>Our Areas of Expertise</h2>
          <div className="expertise-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              'Bookkeeping & Accounting',
              'Statutory Audits',
              'Income Tax Return (ITR) Filings',
              'ROC Compliance & Filings',
              'Tax Planning',
              'Advance Tax Computations'
            ].map((skill, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#f4f6f9', borderRadius: '6px' }}>
                <span style={{ color: '#28a745', fontWeight: 'bold' }}>✓</span>
                <span style={{ fontWeight: '500', color: '#333' }}>{skill}</span>
              </div>
            ))}
          </div>

          {/* Corporate Commitment Quote Block */}
          <div className="commitment-quote" style={{ marginTop: '50px', padding: '30px', borderLeft: '4px solid #0056b3', background: '#f8f9fa', maxWidth: '800px', margin: '50px auto 0' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#444', marginBottom: '8px' }}>
              "Our commitment is simple — to provide financial guidance that is honest, accurate, and genuinely useful. We treat every client's business as our own."
            </p>
            <span style={{ fontWeight: 'bold', color: '#666' }}>— M/s Mukhi and Associates</span>
          </div>
        </div>
      </section>
    </div>
  );
};