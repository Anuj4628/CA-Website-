import React, { useRef } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  FileText 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { EnquiryForm } from '../components/EnquiryForm';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

export const ConsultationPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  return (
    <div ref={containerRef} className="consultation-page">
      <SEOHead 
        title="Book a Tax & CA Consultation in Mumbai | Ambika Consultancy"
        description="Schedule a professional consultation with senior tax consultant Dinesh H. Maurya in Fort, Mumbai or Ghatkopar West. Direct review of your tax filings, notices, and business books."
        canonicalPath="/consultation"
      />

      {/* Hero */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Consultation' }]} />
          <div data-animate="hero">
            <span className="section-tag section-tag-green">One-on-One Advisory</span>
            <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
              Schedule a Professional Consultation
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-body)', maxWidth: '780px', lineHeight: 1.6 }}>
              Direct access to senior consultant <strong>Dinesh H. Maurya</strong>. Choose between an in-person meeting at our Fort or Ghatkopar offices, or a secure telephonic / remote document review.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Booking Form */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'flex-start' }}>
            {/* Left: Consultation Form */}
            <div>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border-green)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-2xl)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '6px' }}>
                    Consultation Request Form
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    Fill out your requirements below. We will confirm your appointment within business hours.
                  </p>
                </div>

                <EnquiryForm sourcePage="Consultation Page" />
              </div>
            </div>

            {/* Right: How to Prepare & Consultation Formats */}
            <div>
              {/* Consultation Modes */}
              <div 
                style={{
                  backgroundColor: 'var(--color-accent-green-pale)',
                  border: '1px solid var(--color-border-green)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)',
                  marginBottom: 'var(--space-xl)'
                }}
              >
                <span className="section-tag section-tag-green" style={{ marginBottom: 'var(--space-md)' }}>
                  Available Consultation Formats
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <MapPin size={22} style={{ color: 'var(--color-accent-green-dark)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary)' }}>
                        In-Person Office Meeting (Fort or Ghatkopar)
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        Meet Dinesh H. Maurya at our Modi Street, Fort office or Ghatkopar West branch office for in-depth document examination.
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Phone size={22} style={{ color: 'var(--color-accent-green-dark)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary)' }}>
                        Telephonic & Remote Video Review
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        Ideal for busy executives and out-of-town clients. Share your digital statements and receive comprehensive guidance remotely.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Prepare */}
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-xl)'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-md)' }}>
                  What to Prepare for Your Consultation
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Form 16 / Form 16A and current salary slips',
                    'Bank statements for the financial year (PDF or net banking)',
                    'Copy of any notice received from the Income Tax or GST Department',
                    'Capital gains summary or broker statement (Zerodha, Groww, etc.)',
                    'GST portal login credentials or GSTR-3B copies (for business)',
                    'Prior year ITR-V acknowledgement'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-success)', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 'var(--space-lg)', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-md)' }}>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    Immediate appointment queries? Call our desk directly at{' '}
                    <a href={`tel:${siteConfig.contact.primaryPhoneRaw}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                      {siteConfig.contact.primaryPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
