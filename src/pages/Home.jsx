import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { stats } from '../mock';

export const Home = () => {
  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1554224311-beee460c201f?w=1920&h=1080&fit=crop"
            alt="Professional accounting services"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">EXPERT ACCOUNTING SOLUTIONS</h1>
            <p className="body-large" style={{ marginTop: '24px', marginBottom: '32px', maxWidth: '600px' }}>
              Trusted chartered accountants providing comprehensive tax, audit, and business advisory services.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                GET STARTED
              </Link>
              <Link to="/services" className="btn-secondary">
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="heading-2">WHY CHOOSE CA MEHERALLY?</h2>
              <p className="body-medium" style={{ marginTop: '24px', marginBottom: '32px' }}>
                With over 15 years of experience, we provide expert financial solutions tailored to your business needs.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <CheckCircle size={20} />
                  <span>15+ Years of Professional Excellence</span>
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} />
                  <span>500+ Satisfied Clients</span>
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} />
                  <span>Expert Team of Qualified CAs</span>
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} />
                  <span>100% Compliance Guaranteed</span>
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} />
                  <span>Personalized Financial Solutions</span>
                </li>
              </ul>
              <Link to="/team" className="btn-primary" style={{ marginTop: '32px' }}>
                MEET OUR TEAM
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Professional team meeting"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2" style={{ textAlign: 'center' }}>READY TO GET STARTED?</h2>
            <p className="body-large" style={{ textAlign: 'center', marginTop: '24px', marginBottom: '32px' }}>
              Let us help you achieve your financial goals with expert guidance.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">
                CONTACT US TODAY <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
