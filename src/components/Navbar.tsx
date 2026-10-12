import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ReceiptText, 
  Building, 
  Calculator, 
  Percent, 
  ShieldCheck, 
  BadgeCheck, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';
import brandLogo from '../assets/logo.png';
import './Navbar.css';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesAccordionOpen(false);
  }, [location.pathname]);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ReceiptText': return <ReceiptText size={18} />;
      case 'Building': return <Building size={18} />;
      case 'Calculator': return <Calculator size={18} />;
      case 'Percent': return <Percent size={18} />;
      case 'ShieldCheck': return <ShieldCheck size={18} />;
      case 'BadgeCheck': return <BadgeCheck size={18} />;
      default: return <ReceiptText size={18} />;
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-item top-bar-address" title="Head Office Location">
              <MapPin size={13} className="top-bar-icon" />
              <span>Head Office: Modi Street, Fort, Mumbai - 400 001</span>
            </span>
            <span className="top-bar-item top-bar-hours" title="Working Hours">
              <Clock size={13} className="top-bar-icon" />
              <span>{siteConfig.contact.workingHours}</span>
            </span>
          </div>

          <div className="top-bar-right">
            <a 
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`} 
              className="top-bar-item top-bar-phone" 
              title="Call Dinesh H. Maurya"
            >
              <Phone size={13} className="top-bar-icon" />
              <span>{siteConfig.contact.primaryPhone}</span>
            </a>
            <a 
              href={`mailto:${siteConfig.contact.primaryEmail}`} 
              className="top-bar-item top-bar-email"
              title="Email Dinesh H. Maurya"
            >
              <Mail size={13} className="top-bar-icon" />
              <span>{siteConfig.contact.primaryEmail}</span>
            </a>
            <Link 
              to="/contact-chartered-accountant-mumbai" 
              className="top-bar-badge"
              title="View Fort & Belapur Office Locations"
            >
              <span>Fort & Belapur Offices</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar" aria-label="Main Navigation">
            {/* Brand Logo */}
            <Link to="/" className="nav-brand" title="Ambika Consultancy Home" aria-label="Ambika Consultancy">
              <img 
                src="/assets/logo.png" 
                alt="Ambika Consultancy CA - Accounting & Tax Consultants" 
                className="nav-brand-logo"
                height="52"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="nav-menu">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/about-best-chartered-accountant-mumbai" 
                  className={`nav-link ${location.pathname === '/about-best-chartered-accountant-mumbai' ? 'active' : ''}`}
                >
                  About Us
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown-wrapper">
                <Link 
                  to="/services-chartered-accountant-mumbai" 
                  className={`nav-link dropdown-trigger ${location.pathname === '/services-chartered-accountant-mumbai' || servicesData.some(c => location.pathname === `/${c.slug}` || location.pathname.startsWith(`/${c.slug}/`)) ? 'active' : ''}`}
                >
                  Services
                  <ChevronDown size={14} />
                </Link>
                <div className="dropdown-menu">
                  {servicesData.map((category) => (
                    <div key={category.id} className="dropdown-item">
                      <Link 
                        to={`/${category.slug}`} 
                        className="dropdown-link"
                      >
                        <span className="dropdown-icon-box">
                          {getServiceIcon(category.iconName)}
                        </span>
                        <div>
                          <span className="dropdown-title">{category.shortTitle}</span>
                          <span className="dropdown-desc">{category.tagline.substring(0, 48)}...</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                  <div className="dropdown-footer">
                    <Link to="/services-chartered-accountant-mumbai" className="dropdown-footer-link">
                      <span>Explore All Services</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link 
                  to="/compliance-packages" 
                  className={`nav-link ${location.pathname === '/compliance-packages' ? 'active' : ''}`}
                >
                  Packages
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/resources" 
                  className={`nav-link ${location.pathname.startsWith('/resources') ? 'active' : ''}`}
                >
                  Knowledge
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/chartered-accountant-mumbai" 
                  className={`nav-link ${location.pathname === '/chartered-accountant-mumbai' ? 'active' : ''}`}
                >
                  Mumbai CA
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/contact-chartered-accountant-mumbai" 
                  className={`nav-link ${location.pathname === '/contact-chartered-accountant-mumbai' ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="nav-actions">
              <a 
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`} 
                className="nav-phone-btn"
                title="Call Directly"
              >
                <Phone size={15} />
                <span>Call: 93213 34335</span>
              </a>

              <button 
                type="button" 
                onClick={onOpenConsultation}
                className="btn btn-primary btn-sm"
                id="btn-nav-book-consultation"
              >
                Book Consultation
              </button>

              {/* Mobile Menu Trigger */}
              <button 
                type="button" 
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-header">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/assets/logo.png" 
              alt="Ambika Consultancy CA" 
              style={{ height: '42px', width: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </Link>
          <button 
            type="button" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            style={{ padding: '6px' }}
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about-best-chartered-accountant-mumbai" className={`mobile-nav-link ${location.pathname === '/about-best-chartered-accountant-mumbai' ? 'active' : ''}`}>
            About Us
          </Link>

          {/* Collapsible Mobile Services */}
          <div>
            <button 
              type="button" 
              className="mobile-nav-link"
              style={{ width: '100%', textAlign: 'left' }}
              onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
            >
              <span>Services</span>
              <ChevronDown 
                size={16} 
                style={{ transform: servicesAccordionOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} 
              />
            </button>
            
            {servicesAccordionOpen && (
              <div className="mobile-submenu">
                <Link to="/services-chartered-accountant-mumbai" className="mobile-sub-link font-semibold">
                  <span>→ Overview (All Services)</span>
                </Link>
                {servicesData.map((category) => (
                  <Link 
                    key={category.id} 
                    to={`/${category.slug}`} 
                    className="mobile-sub-link"
                  >
                    <span>{category.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/compliance-packages" className={`mobile-nav-link ${location.pathname === '/compliance-packages' ? 'active' : ''}`}>
            Compliance Packages
          </Link>
          <Link to="/consultation" className={`mobile-nav-link ${location.pathname === '/consultation' ? 'active' : ''}`}>
            Book Consultation
          </Link>
          <Link to="/resources" className={`mobile-nav-link ${location.pathname.startsWith('/resources') ? 'active' : ''}`}>
            Knowledge Centre
          </Link>
          <Link to="/chartered-accountant-mumbai" className={`mobile-nav-link ${location.pathname === '/chartered-accountant-mumbai' ? 'active' : ''}`}>
            Chartered Accountant Mumbai
          </Link>
          <Link to="/contact-chartered-accountant-mumbai" className={`mobile-nav-link ${location.pathname === '/contact-chartered-accountant-mumbai' ? 'active' : ''}`}>
            Contact Us
          </Link>
        </div>

        <div className="mobile-drawer-footer">
          <button 
            type="button" 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Request Consultation
          </button>
          <a 
            href={`tel:${siteConfig.contact.primaryPhoneRaw}`} 
            className="btn btn-secondary btn-sm"
            style={{ width: '100%' }}
          >
            <Phone size={14} /> Call: {siteConfig.contact.primaryPhone}
          </a>
          <a 
            href={siteConfig.contact.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp btn-sm"
            style={{ width: '100%' }}
          >
            WhatsApp Consultant
          </a>
        </div>
      </div>
    </>
  );
};
