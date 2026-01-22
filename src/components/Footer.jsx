import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { contactInfo } from '../mock';

export const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">CA Meherally</h3>
            <p className="footer-text">
              Your trusted partner for comprehensive accounting, tax, and business advisory services.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/team" className="footer-link">Our Team</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Our Services</h4>
            <ul className="footer-links">
              <li><span className="footer-link">Tax Planning</span></li>
              <li><span className="footer-link">Audit & Assurance</span></li>
              <li><span className="footer-link">GST Services</span></li>
              <li><span className="footer-link">Business Consulting</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <MapPin size={16} />
                <span>{contactInfo.address}</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} />
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} CA Meherally. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
