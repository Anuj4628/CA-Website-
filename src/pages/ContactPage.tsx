import React, { useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { EnquiryForm } from '../components/EnquiryForm';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

export const ContactPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  return (
    <div ref={containerRef} className="contact-page">
      <SEOHead 
        title="Contact Chartered Accountant & Tax Advisory | Ambika Consultancy Mumbai"
        description="Schedule a consultation with Dinesh H. Maurya at Ambika Consultancy. Offices in Fort, South Mumbai & CBD Belapur, Navi Mumbai. Phone: +91 93213 34335, 022-4002 1960."
        canonicalPath="/contact-chartered-accountant-mumbai"
      />

      {/* Hero Header */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <div data-animate="hero">
            <span className="section-tag section-tag-green">Get in Touch</span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>
              Contact Ambika Consultancy
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', maxWidth: '750px', lineHeight: 1.6 }}>
              Reach out to our offices in Fort, South Mumbai or CBD Belapur, Navi Mumbai. We welcome scheduled in-person visits, direct phone inquiries, and electronic consultation requests.
            </p>
          </div>
        </div>
      </section>

      {/* Balanced 2-Column Section: Contact Information & Contact Form */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }} data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'flex-start' }}>
            
            {/* LEFT COLUMN: CONTACT INFORMATION SECTION */}
            <div>
              <span className="section-tag section-tag-green">Contact Information</span>
              <h2 style={{ fontSize: '2.1rem', marginBottom: 'var(--space-sm)', lineHeight: 1.25 }}>
                Ambika Consultancy
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: 'var(--space-xl)' }}>
                Founded and managed by senior tax consultant <strong>Dinesh H. Maurya</strong>, Ambika Consultancy delivers personalized, penalty-free tax filing, GST compliance, accounting, and corporate advisory services across Mumbai and Maharashtra.
              </p>

              {/* Contact Details Card with Light Green Accent */}
              <div 
                style={{
                  backgroundColor: 'var(--color-accent-green-pale)',
                  border: '1px solid var(--color-border-green)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                  
                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Telephone & Mobile Lines
                      </div>
                      <div style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', marginTop: '2px' }}>
                        <a href={`tel:${siteConfig.contact.primaryPhoneRaw}`} style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
                          {siteConfig.contact.primaryPhone}
                        </a>
                        {' '}/ <a href={`tel:${siteConfig.contact.secondaryPhoneRaw}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{siteConfig.contact.secondaryPhone}</a>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        Fort Office Landline: <a href={`tel:${siteConfig.contact.landline1Raw}`} style={{ color: 'inherit' }}>{siteConfig.contact.landline1}</a> / <a href={`tel:${siteConfig.contact.landline2Raw}`} style={{ color: 'inherit' }}>{siteConfig.contact.landline2}</a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Email Correspondence
                      </div>
                      <div style={{ fontSize: '0.9375rem', marginTop: '2px' }}>
                        <a href={`mailto:${siteConfig.contact.primaryEmail}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                          {siteConfig.contact.primaryEmail}
                        </a>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        Alternate: <a href={`mailto:${siteConfig.contact.secondaryEmail}`} style={{ color: 'inherit' }}>{siteConfig.contact.secondaryEmail}</a>
                      </div>
                    </div>
                  </div>

                  {/* Fort Head Office Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Fort Head Office (South Mumbai)
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', marginTop: '2px', lineHeight: 1.45 }}>
                        40/42, Modi Street, Office No. 14, 2nd Floor, Fort, Mumbai - 400 001
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        Near CSMT & Churchgate • 5 mins from Reserve Bank of India
                      </div>
                    </div>
                  </div>

                  {/* CBD Belapur Branch Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        CBD Belapur Branch (Navi Mumbai)
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', marginTop: '2px', lineHeight: 1.45 }}>
                        D-10, 1-2, Income Tax Colony, Sector 21-22, CBD Belapur, Navi Mumbai - 400 614
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Working Hours
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', marginTop: '2px' }}>
                        {siteConfig.contact.workingHours}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp CTA */}
                <div style={{ marginTop: 'var(--space-lg)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-green)' }}>
                  <a 
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center' }}
                    id="btn-whatsapp-contact-page"
                  >
                    <MessageSquare size={16} />
                    <span>Chat Directly on WhatsApp (+91 93213 34335)</span>
                  </a>
                </div>
              </div>

              {/* Confidentiality & Direct Consultant Assurance */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-accent-green-dark)', flexShrink: 0 }} />
                <span>All tax records and consultations are strictly confidential under professional privilege.</span>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM SECTION */}
            <div>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border-green)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-2xl)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <span className="section-tag section-tag-green" style={{ marginBottom: '4px' }}>
                    Send an Inquiry
                  </span>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '6px', color: 'var(--color-primary)' }}>
                    Request Consultation / Quote
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Please enter your requirement below. Dinesh H. Maurya will review your details and connect with you.
                  </p>
                </div>

                <EnquiryForm 
                  sourcePage="Contact Page" 
                  submitButtonText="Send Inquiry" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: FUNCTIONAL EMBEDDED GOOGLE MAP & OFFICE DIRECTIONS */}
      <section className="section section-sm section-subtle" style={{ borderTop: '1px solid var(--color-border)' }} data-animate="section-reveal">
        <div className="container">
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border-green)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-xl)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            {/* Header above map with Get Directions action */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-lg)'
              }}
            >
              <div>
                <span className="section-tag section-tag-green" style={{ marginBottom: '6px' }}>Office Location Map</span>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--color-primary)', margin: '4px 0 6px 0' }}>
                  Visit Our Fort Head Office
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', margin: 0 }}>
                  <strong>40/42, Modi Street, Office No. 14, 2nd Floor, Fort, Mumbai - 400 001</strong>
                  <span style={{ color: 'var(--color-text-muted)' }}> (Near CSMT & Reserve Bank of India)</span>
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href="https://maps.google.com/?q=40+42+Modi+Street+Fort+Mumbai+400001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  id="btn-get-directions-fort"
                >
                  <MapPin size={15} />
                  <span>Get Directions</span>
                  <ExternalLink size={13} />
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  id="btn-whatsapp-location"
                >
                  <MessageSquare size={15} />
                  <span>Ask Location on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Responsive Map Container */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                height: '380px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--color-border-green)',
                backgroundColor: '#F1F5F9'
              }}
            >
              <iframe
                title="Ambika Consultancy Fort Head Office Google Maps Location"
                src="https://maps.google.com/maps?q=40%2F42%2C+Modi+Street%2C+Office+No.+14%2C+Fort%2C+Mumbai%2C+Maharashtra+400001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', width: '100%', height: '100%' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick 2-Office Cards below Map */}
            <div className="grid-2" style={{ gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
              
              {/* Fort Head Office Details */}
              <div 
                style={{
                  padding: 'var(--space-md) var(--space-lg)',
                  backgroundColor: 'var(--color-accent-green-pale)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-green)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={15} style={{ color: 'var(--color-accent-green-dark)' }} />
                    <span>Fort Head Office (South Mumbai)</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=40+42+Modi+Street+Fort+Mumbai+400001"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.75rem', color: 'var(--color-accent-green-dark)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                  >
                    <span>Directions</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', marginTop: '4px' }}>
                  40/42, Modi Street, Office No. 14, 2nd Floor, Fort, Mumbai - 400 001
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                  Transit: 5 mins walk from CSMT Railway Station & 10 mins from Churchgate.
                </div>
              </div>

              {/* CBD Belapur Branch Details */}
              <div 
                style={{
                  padding: 'var(--space-md) var(--space-lg)',
                  backgroundColor: '#F8FAFC',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Building2 size={15} style={{ color: 'var(--color-primary)' }} />
                    <span>CBD Belapur Branch (Navi Mumbai)</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Income+Tax+Colony+Sector+21+22+CBD+Belapur+Navi+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.75rem', color: 'var(--color-accent-green-dark)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                  >
                    <span>Directions</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', marginTop: '4px' }}>
                  D-10, 1-2, Income Tax Colony, Sector 21-22, CBD Belapur, Navi Mumbai - 400 614
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                  Serving taxpayers and business founders across Navi Mumbai, Vashi, and Konkan corridor.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
