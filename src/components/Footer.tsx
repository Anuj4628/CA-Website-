import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  MessageSquare,
  Clock,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <Link to="/" className="footer-brand-logo" aria-label="Ambika Consultancy">
                <img 
                  src="/assets/logo.png" 
                  alt="Ambika Consultancy CA Logo" 
                  className="footer-logo-img"
                  height="48"
                />
              </Link>

              <p className="footer-desc">
                Dedicated tax, GST, accounting, and business compliance advisory for individuals, emerging startups, and corporates in Mumbai and Navi Mumbai. Direct counsel from seasoned professional Dinesh H. Maurya.
              </p>

              {/* Consultant Trust Snippet */}
              <div className="footer-consultant-card">
                <img 
                  src={siteConfig.consultant.headshotUrl} 
                  alt={siteConfig.consultant.name} 
                  className="footer-consultant-thumb"
                  width="44"
                  height="44"
                />
                <div className="footer-consultant-info">
                  <span className="footer-consultant-name">{siteConfig.consultant.name}</span>
                  <span className="footer-consultant-role">{siteConfig.consultant.title}</span>
                </div>
              </div>

              <div className="footer-contact-list">
                <a 
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp: +91 93213 34335</span>
                </a>
                <span className="footer-contact-link">
                  <Clock size={15} />
                  <span>{siteConfig.contact.workingHours}</span>
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <Link to="/"><ChevronRight size={14} /> Home</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/about-best-chartered-accountant-mumbai"><ChevronRight size={14} /> About Dinesh H. Maurya</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/services-chartered-accountant-mumbai"><ChevronRight size={14} /> All Services Directory</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/compliance-packages"><ChevronRight size={14} /> Compliance Packages</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/consultation"><ChevronRight size={14} /> Book Consultation</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/resources"><ChevronRight size={14} /> Knowledge & Guides</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/chartered-accountant-mumbai"><ChevronRight size={14} /> CA Fort & Mumbai Presence</Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/contact-chartered-accountant-mumbai"><ChevronRight size={14} /> Contact & Directions</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Core Services */}
            <div className="footer-col">
              <h4 className="footer-heading">Our Services</h4>
              <ul className="footer-nav-list">
                {servicesData.map((category) => (
                  <li key={category.id} className="footer-nav-item">
                    <Link to={`/${category.slug}`}>
                      <ChevronRight size={14} /> {category.shortTitle}
                    </Link>
                  </li>
                ))}
                <li className="footer-nav-item">
                  <Link to="/income-tax-return-filing-mumbai/income-tax-return-filing">
                    <ChevronRight size={14} /> ITR Filing (Salary & Business)
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/gst-consultant-mumbai/gst-return-filing">
                    <ChevronRight size={14} /> GST Monthly Filings & 2B
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link to="/company-registration-mumbai/company-incorporation">
                    <ChevronRight size={14} /> Pvt Ltd & LLP Registration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Confirmed Offices & Direct Telephones */}
            <div className="footer-col">
              <h4 className="footer-heading">Office Locations</h4>
              <div className="footer-offices-wrap">
                {siteConfig.offices.map((office, idx) => (
                  <div key={idx} className="footer-office-box">
                    <span className="footer-office-badge">{office.badge}</span>
                    <div className="footer-office-title">{office.title}</div>
                    <div className="footer-office-address">
                      {office.addressLine1}, {office.addressLine2}, {office.city} - {office.pincode}
                    </div>
                    <a 
                      href={office.mapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="footer-contact-link"
                      style={{ fontSize: '0.75rem', marginTop: '4px' }}
                    >
                      <MapPin size={12} />
                      <span>View on Google Maps</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                ))}
              </div>

              <div className="footer-contact-list">
                <a href={`tel:${siteConfig.contact.primaryPhoneRaw}`} className="footer-contact-link">
                  <Phone size={14} />
                  <span>Mobile: {siteConfig.contact.primaryPhone} / {siteConfig.contact.secondaryPhone}</span>
                </a>
                <a href={`tel:${siteConfig.contact.landline1Raw}`} className="footer-contact-link">
                  <Phone size={14} />
                  <span>Landline: {siteConfig.contact.landline1} / {siteConfig.contact.landline2}</span>
                </a>
                <a href={`mailto:${siteConfig.contact.primaryEmail}`} className="footer-contact-link">
                  <Mail size={14} />
                  <span>{siteConfig.contact.primaryEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div>
            © {new Date().getFullYear()} {siteConfig.firmName}. All Rights Reserved. Modistreet Fort, Mumbai.
          </div>

          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>

          {/* Mandatory Footer Credit: "SEO and Design by Sunmarg India" */}
          <div className="footer-credit-text">
            {siteConfig.footerCredit.prefixText}{' '}
            <a 
              href={siteConfig.footerCredit.url} 
              target={siteConfig.footerCredit.targetBlank ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="footer-credit-link"
              title="Sunmarg India — Official SEO & Web Design"
            >
              {siteConfig.footerCredit.companyName}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
