import React from 'react';
import { services } from '../mock';
import * as Icons from 'lucide-react';

export const Services = () => {
  const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={32} /> : <Icons.FileText size={32} />;
  };

  return (
    <div className="page-services">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">OUR SERVICES</h1>
          <p className="body-large" style={{ marginTop: '24px', maxWidth: '800px' }}>
            Comprehensive accounting and financial services tailored to meet your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {getIcon(service.icon)}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-feature-item">
                      <Icons.Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="heading-4" style={{ color: 'var(--text-primary)' }}>Need a Custom Solution?</h2>
            <p className="body-medium" style={{ marginTop: '16px', marginBottom: '24px' }}>
              We offer personalized services tailored to your specific requirements. Contact us to discuss your needs.
            </p>
            <a href="/contact" className="btn-primary">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
