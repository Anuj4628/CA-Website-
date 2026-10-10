import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { siteConfig } from '../data/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="legal-page">
      <SEOHead 
        title="Privacy Policy | Ambika Consultancy Mumbai"
        description="Privacy policy and client data confidentiality standards of Ambika Consultancy, Fort, Mumbai."
        canonicalPath="/privacy-policy"
      />

      <section className="section section-sm section-subtle">
        <div className="container container-narrow">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 style={{ marginTop: 'var(--space-sm)' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Last updated: February 2025 • Ambika Consultancy, Fort, Mumbai
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-text-body)' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-sm)' }}>1. Commitment to Client Confidentiality</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            At <strong>{siteConfig.firmName}</strong>, safeguarding the confidentiality of your financial data, income records, Permanent Account Number (PAN), Aadhaar, GSTIN, and business books is fundamental to our practice. We collect personal and financial information solely to provide professional taxation, accounting, audit assistance, and corporate compliance services.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Depending on the engagement, we may collect:
          </p>
          <ul style={{ marginLeft: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
            <li>Identification & Contact Details: Full name, residential/business address, phone numbers, email address.</li>
            <li>Statutory Credentials: PAN Card, Aadhaar Card, DIN, TAN, and GSTIN numbers.</li>
            <li>Financial Records: Form 16, Form 16A, bank account statements, Annual Information Statements (AIS/TIS), sales/purchase registers, broker capital gain statements, and loan documents.</li>
            <li>Portal Credentials: Login details for Income Tax E-filing, GST portal, TRACES, or MCA portal, strictly used for authorized return preparation and verification.</li>
          </ul>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>3. Non-Disclosure & Third-Party Sharing</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            We strictly do not sell, rent, monetize, or distribute your personal or financial information to any commercial third parties, marketers, or lead brokers. Information is shared only with government regulatory portals (such as the Income Tax Department, GSTN, Ministry of Corporate Affairs, and RBI) as explicitly mandated to complete statutory filings authorized by you.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>4. Data Security & Storage</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            All electronic files and paper documentation maintained at our Fort and Belapur offices are protected with password protection, secure drive systems, and physical filing controls. Access is restricted exclusively to authorized personnel working directly on your file.
          </p>

          <h2 style={{ fontSize: '1.35rem', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>5. Contact for Privacy Inquiries</h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            If you have questions regarding the handling of your data or wish to update your records, please contact:
            <br />
            <strong>Dinesh H. Maurya</strong>, Principal Consultant
            <br />
            Ambika Consultancy, 40/42, Modi Street, Office No. 14, 2nd Floor, Fort, Mumbai - 400 001
            <br />
            Email: <a href={`mailto:${siteConfig.contact.primaryEmail}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{siteConfig.contact.primaryEmail}</a>
          </p>
        </div>
      </section>
    </div>
  );
};
