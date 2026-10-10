import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  Landmark,
  FileText,
  MapPin,
  Clock
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

interface MumbaiCaPageProps {
  onOpenConsultation: () => void;
}

export const MumbaiCaPage: React.FC<MumbaiCaPageProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  return (
    <div ref={containerRef} className="mumbai-ca-page">
      <SEOHead 
        title="Chartered Accountant & Tax Consultants in Fort, Mumbai | Ambika Consultancy"
        description="Looking for an experienced Tax Consultant and CA in Fort, Mumbai or CBD Belapur? Direct advisory from Dinesh H. Maurya on Modi Street. Income tax, GST, and corporate accounting."
        canonicalPath="/chartered-accountant-mumbai"
      />

      {/* Hero */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Chartered Accountant Mumbai' }]} />
          <div data-animate="hero">
            <span className="section-tag section-tag-green">Mumbai & Navi Mumbai Practice</span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>
              Chartered Accountancy & Tax Advisory in Fort, Mumbai
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', maxWidth: '750px', lineHeight: 1.6 }}>
              Centrally based on Modi Street in South Mumbai’s historic financial precinct, Ambika Consultancy delivers grounded, in-person and electronic tax advisory to businesses, professionals, and corporate entities.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-lg)' }}>
              <button 
                type="button" 
                onClick={onOpenConsultation}
                className="btn btn-primary"
              >
                <span>Book Office Consultation</span>
                <ArrowRight size={15} />
              </button>
              <a 
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                className="btn btn-secondary"
              >
                <Phone size={14} />
                <span>Call Fort Office: {siteConfig.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Mumbai Presence Matters */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Strategic Location</span>
              <h2 style={{ fontSize: '1.95rem', marginBottom: 'var(--space-md)' }}>
                Located at the Heart of South Mumbai's Financial District
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
                Our primary corporate office at <strong>40/42, Modi Street, Office No. 14, 2nd Floor, Fort</strong> is situated minutes away from Chhatrapati Shivaji Maharaj Terminus (CSMT), the Reserve Bank of India, Bombay Stock Exchange, and the Churchgate institutional cluster (including Aayakar Bhavan).
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
                This location allows our clients across South Mumbai, Central Mumbai, and the Western suburbs to easily visit for direct consultations, review extensive paper documentation, and finalise complex statutory filings with senior consultant <strong>Dinesh H. Maurya</strong>.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-accent-green)' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-body)' }}>
                    Walking distance from CSMT and Churchgate railway stations.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-accent-green)' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-body)' }}>
                    Rapid coordination with regional ROC Mumbai and jurisdictional tax commissioners.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-accent-green)' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-body)' }}>
                    Secondary liaison office in CBD Belapur for Navi Mumbai and Thane clients.
                  </span>
                </div>
              </div>
            </div>

            {/* Clean Office Details Box (Replaces the visiting card display) */}
            <div>
              <div 
                style={{
                  backgroundColor: 'var(--color-accent-green-pale)',
                  border: '1px solid var(--color-border-green)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-md)' }}>
                  <Landmark size={22} style={{ color: 'var(--color-accent-green-dark)' }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-primary)' }}>
                      Fort Head Office
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      South Mumbai Financial Precinct
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--color-text-body)', marginBottom: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <MapPin size={16} style={{ color: 'var(--color-accent-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span>40/42, Modi Street, Office No. 14, 2nd Floor, Fort, Mumbai - 400 001</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} style={{ color: 'var(--color-accent-green)', flexShrink: 0 }} />
                    <span>022-4002 1960 / 022-6636 6240 • 93213 34335</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} style={{ color: 'var(--color-accent-green)', flexShrink: 0 }} />
                    <span>Mon - Sat: 10:00 AM – 7:30 PM (Sunday Closed)</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-border-green)', paddingTop: 'var(--space-md)' }}>
                  <a 
                    href="https://maps.google.com/?q=40+42+Modi+Street+Fort+Mumbai+400001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>View Directions on Google Maps</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Mumbai Compliance Competencies */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Regional Expertise</span>
            <h2 className="section-title">Maharashtra & Mumbai Compliance Specialties</h2>
            <p className="section-subtitle">
              Handling city and state-specific statutory requirements with precision.
            </p>
          </div>

          <div className="grid-3" data-animate="cards-stagger">
            <div className="card" style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-lg)' }}>
              <Building2 size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>
                Maharashtra Profession Tax (PTRC / PTEC)
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Registration and monthly/annual return filing under the Maharashtra State Tax on Professions, Trades, Callings and Employments Act for employers and professionals.
              </p>
            </div>

            <div className="card" style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-lg)' }}>
              <FileText size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>
                BMC Shop & Establishment (Gumasta)
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Registration and renewal support under the Maharashtra Shops and Establishments Act for commercial offices and establishments in Greater Mumbai.
              </p>
            </div>

            <div className="card" style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-lg)' }}>
              <ShieldCheck size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }} />
              <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>
                Mumbai Property Capital Gains
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Specialized capital gains advisory on Mumbai residential and commercial transfers, stamp duty ready-reckoner calculations, Section 54 re-investment, and 54EC infrastructure bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <div 
            style={{
              backgroundColor: 'var(--color-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-2xl)',
              color: '#FFFFFF'
            }}
          >
            <h2 style={{ color: '#FFFFFF', fontSize: '1.95rem', marginBottom: 'var(--space-xs)' }}>
              Looking for a Trusted Tax Advisor in Mumbai?
            </h2>
            <p style={{ color: '#D1D5DB', maxWidth: '540px', margin: '0 auto var(--space-lg) auto', fontSize: '0.95rem' }}>
              Contact Dinesh H. Maurya at our Fort head office or Belapur branch for accurate, accountable professional guidance.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={onOpenConsultation}
                className="btn btn-gold"
              >
                Schedule Consultation
              </button>
              <Link to="/contact-us" className="btn btn-outline-white">
                View Contact Info & Maps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
