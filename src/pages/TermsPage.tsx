import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { siteConfig } from '../data/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="legal-page">
      <SEOHead 
        title="Terms & Conditions | Ambika Consultancy Mumbai"
        description="Terms and conditions governing professional advisory, engagement scopes, and website usage at Ambika Consultancy."
        canonicalPath="/terms-and-conditions"
      />

      <section className="section section-sm section-subtle">
        <div className="container container-narrow">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
          <h1 style={{ marginTop: 'var(--space-sm)' }}>Terms & Conditions</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Effective: February 2025 • Ambika Consultancy, Fort, Mumbai
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-body)' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-sm)' }}>1. Professional Engagement & Scope</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Services provided by <strong>{siteConfig.firmName}</strong> (referred to herein as "the Firm") are subject to agreed engagement terms between the client and the Firm. Submission of an online consultation form or message through this website does not constitute an accepted advisory engagement until documentation is reviewed, scope is confirmed, and professional terms are accepted.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>2. Client Responsibilities for Document Accuracy</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            All tax computations, return filings, and compliance submissions are prepared based on records, statements, and explanations provided by the client. The client is solely responsible for ensuring the truth, authenticity, completeness, and accuracy of all invoices, bank statements, asset disclosures, and expense claims submitted to the Firm.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>3. Timeliness of Document Submission</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Statutory authorities (Income Tax Department, GST Department, MCA) enforce strict filing due dates. To ensure timely filing without late fees or interest, clients must supply all requested source records well in advance of the statutory deadline. The Firm cannot be held liable for statutory late fees arising from delayed client document handovers.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>4. Statutory Portal Authority & Disclaimers</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            The final processing of returns, refunds, intimations, and assessments rests solely with government statutory portals (CPC Bengaluru, GSTN, MCA). While the Firm applies due care and professional skill to ensure flawless filing, the Firm does not guarantee the timing of departmental refunds or the unilateral determinations of tax officers.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>5. Jurisdiction</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Any disputes or legal proceedings arising in connection with the Firm’s professional engagements shall be subject to the exclusive jurisdiction of the competent courts in <strong>Mumbai, Maharashtra, India</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};
