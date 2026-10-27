import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { siteConfig } from '../data/siteConfig';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="legal-page">
      <SEOHead 
        title="Professional Disclaimer | Ambika Consultancy Mumbai"
        description="Statutory legal and professional service disclaimer of Ambika Consultancy, Chartered Accountants & Tax Consultants, Fort, Mumbai."
        canonicalPath="/disclaimer"
      />

      <section className="section section-sm section-subtle">
        <div className="container container-narrow">
          <Breadcrumbs items={[{ label: 'Disclaimer' }]} />
          <h1 style={{ marginTop: 'var(--space-sm)' }}>Professional Service Disclaimer</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Ambika Consultancy • Fort & Ghatkopar, Mumbai
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-body)' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-sm)' }}>1. General Informational Nature of Website Content</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            The content, articles, tax calculators, guides, and compliance summaries published on this website (ambikaconsultancy.com) are intended solely for general informational and educational guidance. They do not constitute formal legal advice, individualized tax opinions, or statutory audit certifications for any specific business entity or individual taxpayer.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>2. Consultation Precedent</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Taxation laws, statutory slab rates, GST circulars, and judicial precedents are subject to frequent legislative amendments and judicial interpretations. Taxpayers must not act or refrain from acting on the basis of any general guide on this website without first obtaining personalized, case-specific professional advice from a qualified tax advisor based on their specific transaction facts.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>3. No Guarantees of Regulatory Outcomes</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            <strong>{siteConfig.firmName}</strong> strictly does not offer guarantees of specific tax refund amounts, immunity from statutory scrutiny, guaranteed notice dismissal, or government approvals. All statutory filings and representations are conducted strictly within the bounds of applicable Indian laws and portal regulations.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>4. Third-Party Links & References</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Any hyperlinks to official government portals (such as incometax.gov.in, gst.gov.in, mca.gov.in) or external design credits are provided for client convenience. The Firm assumes no responsibility for external content, portal downtime, or third-party server operations.
          </p>
        </div>
      </section>
    </div>
  );
};
