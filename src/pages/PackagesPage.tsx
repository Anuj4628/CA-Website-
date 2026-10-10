import React, { useRef } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  PackageCheck, 
  Phone,
  MessageSquare
} from 'lucide-react';
import { compliancePackages } from '../data/packagesData';
import { siteConfig } from '../data/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

interface PackagesPageProps {
  onOpenConsultation: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  return (
    <div ref={containerRef} className="packages-page">
      <SEOHead 
        title="Annual Compliance Packages & Retainers | Ambika Consultancy Mumbai"
        description="Structured annual compliance retainers for Sole Proprietors, Partnerships, LLPs, Private Limited Companies, and Salaried Taxpayers in Mumbai. Transparent scopes without hidden fees."
        canonicalPath="/compliance-packages"
      />

      {/* Hero */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Compliance Packages' }]} />
          <div data-animate="hero">
            <span className="section-tag section-tag-green">Structured Retainers</span>
            <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
              Annual Compliance Retainers for Every Entity
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-body)', maxWidth: '780px', lineHeight: 1.6 }}>
              Avoid statutory deadline penalties and compliance blind spots. We bundle recurring monthly GST filings, quarterly TDS schedules, ROC secretarial submissions, and annual returns into structured, transparent retainers.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
            {compliancePackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="card"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: 'var(--space-2xl)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div className="grid-2" style={{ gap: 'var(--space-2xl)', alignItems: 'flex-start' }}>
                  {/* Left Column: Target Business & Inclusions */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-sm)' }}>
                      <span className="badge badge-navy">{pkg.badge}</span>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                        Frequency: {pkg.frequency}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.65rem', marginBottom: '8px' }}>
                      {pkg.title}
                    </h2>

                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                      <strong>Designed For:</strong> {pkg.idealFor}
                    </p>

                    <div style={{ marginBottom: 'var(--space-lg)' }}>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '8px' }}>
                        Included Services & Tasks:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {pkg.inclusions.map((inc, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--color-success)', marginTop: '3px', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Scope Limits */}
                  <div 
                    style={{
                      borderLeft: '1px solid var(--color-border)',
                      paddingLeft: 'var(--space-2xl)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%'
                    }}
                    className="package-right-col"
                  >
                    {/* Deliverables */}
                    <div style={{ marginBottom: 'var(--space-lg)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                        <PackageCheck size={16} style={{ color: 'var(--color-primary)' }} />
                        <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                          Standard Deliverables:
                        </span>
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {pkg.deliverables.map((del, idx) => (
                          <li key={idx} style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--color-accent-green)', borderRadius: '50%' }}></span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Limitations */}
                    <div style={{ marginBottom: 'var(--space-xl)', borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Scope Limitations & Caveats:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {pkg.limitations.map((lim, idx) => (
                          <li key={idx} style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <span>•</span>
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <button 
                        type="button" 
                        onClick={onOpenConsultation}
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                      >
                        <span>Enquire About This Retainer</span>
                        <ArrowRight size={15} />
                      </button>

                      <a 
                        href={`https://wa.me/919321334335?text=Hello%20Dinesh%20ji%2C%20I%20would%20like%20to%20discuss%20the%20${encodeURIComponent(pkg.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm"
                        style={{ width: '100%' }}
                      >
                        <MessageSquare size={14} />
                        <span>Discuss Scope via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Scope Note */}
      <section className="section section-sm section-subtle">
        <div className="container text-center">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>
              Have Unique Transaction Volumes or Multiple Branches?
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
              We tailor customized compliance retainers for businesses with multi-state GST registrations, foreign transactions, or special regulatory needs.
            </p>
            <button 
              type="button" 
              onClick={onOpenConsultation}
              className="btn btn-secondary"
            >
              Request Custom Retainer Evaluation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
