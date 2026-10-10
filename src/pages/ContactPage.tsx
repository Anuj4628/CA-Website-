import React, { useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck
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
        title="Contact & Consultation | Ambika Consultancy Fort & Belapur, Mumbai"
        description="Schedule a consultation with Dinesh H. Maurya at Ambika Consultancy. Offices in Fort, South Mumbai & CBD Belapur, Navi Mumbai. Phone: +91 93213 34335, 022-4002 1960."
        canonicalPath="/contact-us"
      />

      {/* Hero */}
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

      {/* Main Clean 2-Column Section (Priority Design Direction) */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }} data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'flex-start' }}>
            {/* LEFT SIDE: Heading, Paragraph, Aligned Coordinates with Subtle Green Accent */}
            <div>
              <span className="section-tag section-tag-green">Direct Coordinates</span>
              <h2 style={{ fontSize: '2.1rem', marginBottom: 'var(--space-sm)', lineHeight: 1.25 }}>
                Let's Discuss Your Financial & Compliance Requirements
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: 'var(--space-xl)' }}>
                Consult senior tax advisor <strong>Dinesh H. Maurya</strong> directly. We review your document status, reconcile statutory data, and guide you on the exact, penalty-free path forward.
              </p>

              {/* Clean Single Details Box with Light Green Background */}
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
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                        Telephone & Mobile Lines
                      </div>
                      <div style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', marginTop: '2px' }}>
                        <a href={`tel:${siteConfig.contact.primaryPhoneRaw}`} style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                          {siteConfig.contact.primaryPhone}
                        </a>{' '}/ {siteConfig.contact.secondaryPhone}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                        Fort Landline: {siteConfig.contact.landline1} / {siteConfig.contact.landline2}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                        Email Correspondence
                      </div>
                      <div style={{ fontSize: '0.9375rem', marginTop: '2px' }}>
                        <a href={`mailto:${siteConfig.contact.primaryEmail}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                          {siteConfig.contact.primaryEmail}
                        </a>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                        Alternate: {siteConfig.contact.secondaryEmail}
                      </div>
                    </div>
                  </div>

                  {/* Fort Office */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                        Fort Head Office (South Mumbai)
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', marginTop: '2px' }}>
                        40/42, Modi Street, Office No. 14, 2nd Floor, Fort, Mumbai - 400 001
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        Near CSMT / Churchgate • 5 mins from Reserve Bank of India
                      </div>
                    </div>
                  </div>

                  {/* Belapur Branch */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                        CBD Belapur Branch (Navi Mumbai)
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', marginTop: '2px' }}>
                        D-10, 1-2, Income Tax Colony, Sector 21-22, CBD Belapur, Navi Mumbai
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', backgroundColor: '#FFFFFF', color: 'var(--color-accent-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid var(--color-border-green)' }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                        Working Hours
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', marginTop: '2px' }}>
                        Monday to Saturday: 10:00 AM – 7:30 PM (Sunday Closed)
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
                    style={{ width: '100%' }}
                  >
                    <MessageSquare size={16} />
                    <span>Chat Directly on WhatsApp (+91 93213 34335)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Single Clean, Spacious Appointment / Get Quote Form */}
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
                    Quick Inquiry
                  </span>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '6px', color: 'var(--color-primary)' }}>
                    Request Consultation / Get Quote
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Please enter your requirement below. Dinesh H. Maurya will review your details and connect with you.
                  </p>
                </div>

                <EnquiryForm sourcePage="Contact Page" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
