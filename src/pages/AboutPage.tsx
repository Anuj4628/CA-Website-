import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  ArrowRight,
  Clock,
  Compass,
  FileCheck2,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  return (
    <div ref={containerRef} className="about-page">
      <SEOHead 
        title="About Dinesh H. Maurya & Ambika Consultancy | Fort, Mumbai"
        description="Learn about Dinesh H. Maurya and Ambika Consultancy. Professional tax, GST, and corporate accounting services based in Fort, Mumbai and CBD Belapur."
        canonicalPath="/about-us"
      />

      {/* Page Header */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <div data-animate="hero">
            <span className="section-tag section-tag-green">Firm Profile & Leadership</span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>
              About Ambika Consultancy & Dinesh H. Maurya
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', maxWidth: '720px', lineHeight: 1.6 }}>
              Established in Mumbai’s premier financial hub of Fort, Ambika Consultancy provides grounded, accountable tax advisory, GST compliance, and accounting services to individuals and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile & Leadership Story with Layered Photo Depth */}
      <section className="section section-pale-green" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-3xl)' }}>
            <div>
              <span className="section-tag section-tag-green">Principal Consultant</span>
              <h2 style={{ marginBottom: 'var(--space-md)', fontSize: '2.25rem', lineHeight: 1.25 }}>
                Direct Counsel from <span style={{ color: 'var(--color-accent-green-dark)' }}>Dinesh H. Maurya</span>
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
                <strong>Dinesh H. Maurya</strong> is the founder and principal consultant of Ambika Consultancy. Over more than two decades of dedicated practice in direct and indirect taxation, he has advised salaried executives, independent professionals, trading firms, and corporate entities through evolving regulatory shifts.
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
                His approach combines meticulous examination of source records with straightforward communication. Dinesh H. Maurya personally reviews calculations, reconciles discrepancies against departmental systems, and ensures that clients understand their liabilities before any form is submitted.
              </p>

              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border-green)',
                  borderLeft: '4px solid var(--color-accent-green)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: 'var(--space-xl)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.9375rem', marginBottom: '4px' }}>
                  Consulting Philosophy
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
                  "Accurate accounting and timely statutory compliance are not mere formalities—they are the foundation of financial peace of mind, unhindered business growth, and lasting credibility."
                </p>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <button 
                  type="button" 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                >
                  Request Personal Consultation
                </button>
                <a 
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="btn btn-secondary"
                >
                  <Phone size={14} style={{ color: 'var(--color-accent-green)' }} />
                  <span>Call: {siteConfig.contact.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Single Principal Consultant Office Photograph */}
            <div className="consultant-single-photo-wrap">
              <div className="consultant-single-card">
                <div className="consultant-single-img-holder">
                  <img 
                    src={siteConfig.consultant.deskPhotoUrl} 
                    alt="Dinesh H. Maurya at work at Fort Office, Mumbai"
                    className="consultant-single-img"
                    width="771"
                    height="979"
                    loading="lazy"
                  />
                </div>
                <div className="consultant-single-caption">
                  <div>
                    <div className="consultant-single-name">
                      Dinesh H. Maurya
                    </div>
                    <div className="consultant-single-role">
                      Founder & Principal Tax Consultant
                    </div>
                  </div>
                  <span className="badge badge-green">Fort • Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Office Environment */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-3xl)' }}>
            <div>
              <div 
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border-green)',
                  boxShadow: 'var(--shadow-card)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <img 
                  src={siteConfig.consultant.officePhotoUrl} 
                  alt="Dinesh H. Maurya at work in Ambika Consultancy Office"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: '12px 16px', backgroundColor: '#FFFFFF', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  Workstation at Modi Street, Fort • Active document review and compliance files
                </div>
              </div>
            </div>

            <div>
              <span className="section-tag section-tag-green">Working Environment</span>
              <h2 style={{ marginBottom: 'var(--space-md)', fontSize: '2rem' }}>
                In-Office Review & Compliance Verification
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
                Our office is structured for focused document examination, multi-year reconciliation, and confidential consultations. Whether reviewing complicated broker P&L sheets for capital gains, drafting responses to assessment notices, or finalizing company balance sheets, every engagement receives careful, patient review.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.7, margin: 0 }}>
                We believe in open dialogue where clients are informed about their statutory obligations well ahead of due dates, eliminating panic and unexpected demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Locations */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">Office Locations</span>
            <h2 className="section-title">Serving South Mumbai & Navi Mumbai</h2>
            <p className="section-subtitle">
              With convenient offices in the commercial heart of Fort, Mumbai and the corporate corridor of CBD Belapur, we provide accessible advisory across the metropolitan region.
            </p>
          </div>

          <div className="grid-2" data-animate="cards-stagger">
            {siteConfig.offices.map((office, idx) => (
              <div key={idx} className="card" style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border-green)' }}>
                <span className="badge badge-green" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-sm)' }}>
                  {office.badge}
                </span>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>
                  {office.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 'var(--space-sm)' }}>
                  <MapPin size={15} style={{ color: 'var(--color-accent-green)', display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                  {office.addressLine1}, {office.addressLine2}, {office.city} - {office.pincode}
                </p>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.55, flex: 1 }}>
                  {office.notes}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '14px', marginTop: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    Mon - Sat: 10:00 AM - 7:30 PM
                  </span>
                  <a 
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Google Maps</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles (Simple Colorful Cards) */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">Standards</span>
            <h2 className="section-title">The Four Pillars of Our Practice</h2>
          </div>

          <div className="grid-4" data-animate="cards-stagger">
            <div className="card card-pale-green" style={{ padding: 'var(--space-lg)' }}>
              <Compass size={24} style={{ color: 'var(--color-accent-green-dark)', marginBottom: 'var(--space-sm)' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>1. Precision</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-body)', lineHeight: 1.55, margin: 0 }}>
                Rigorous line-by-line reconciliation of AIS, 26AS, and GSTR-2B before every electronic filing.
              </p>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)' }}>
              <ShieldCheck size={24} style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-sm)' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>2. Confidentiality</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                Absolute non-disclosure of personal financial statements, income records, and business secrets.
              </p>
            </div>

            <div className="card card-pale-green" style={{ padding: 'var(--space-lg)' }}>
              <Clock size={24} style={{ color: 'var(--color-accent-green-dark)', marginBottom: 'var(--space-sm)' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>3. Punctuality</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-body)', lineHeight: 1.55, margin: 0 }}>
                Zero penalty adherence with advance reminder alerts and early monthly/quarterly return dispatch.
              </p>
            </div>

            <div className="card" style={{ padding: 'var(--space-lg)' }}>
              <FileCheck2 size={24} style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-sm)' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>4. Clarity</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                Clear explanations of tax calculations, eliminating unnecessary fear or ambiguity around statutory laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section section-subtle">
        <div className="container">
          <div 
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-2xl)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-hover)'
            }}
          >
            <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: 'var(--space-xs)' }}>
              Discuss Your Tax & Accounting Requirements
            </h2>
            <p style={{ color: '#E2E8F0', maxWidth: '540px', margin: '0 auto var(--space-lg) auto', fontSize: '0.95rem' }}>
              Schedule a one-on-one session with Dinesh H. Maurya at our Fort or Belapur office, or request a phone consultation today.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={onOpenConsultation}
                className="btn btn-primary"
              >
                <span>Book a Consultation</span>
                <ArrowRight size={15} />
              </button>
              <Link to="/contact-us" className="btn btn-outline-white">
                Contact Our Offices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
