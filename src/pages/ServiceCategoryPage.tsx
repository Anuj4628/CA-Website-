import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Phone, 
  MessageSquare,
  HelpCircle,
  FolderOpen
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

interface ServiceCategoryPageProps {
  onOpenConsultation: () => void;
  fixedCategorySlug?: string;
}

export const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = ({ onOpenConsultation, fixedCategorySlug }) => {
  const { categorySlug: paramSlug } = useParams<{ categorySlug: string }>();
  const effectiveSlug = fixedCategorySlug || paramSlug;
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  const category = servicesData.find((c) => c.slug === effectiveSlug || c.id === effectiveSlug);

  if (!category) {
    return <Navigate to="/services-chartered-accountant-mumbai" replace />;
  }

  return (
    <div ref={containerRef} className="service-category-page">
      <SEOHead 
        title={category.metaTitle}
        description={category.metaDescription}
        canonicalPath={`/${category.slug}`}
      />

      {/* Hero Section */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <Breadcrumbs 
            items={[
              { label: 'Services', path: '/services-chartered-accountant-mumbai' },
              { label: category.shortTitle }
            ]} 
          />
          <div data-animate="hero">
            <span className="section-tag section-tag-green">{category.shortTitle} Services</span>
            <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
              {category.title}
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-body)', maxWidth: '780px', lineHeight: 1.6 }}>
              {category.description}
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-lg)' }}>
              <button 
                type="button" 
                onClick={onOpenConsultation}
                className="btn btn-primary"
              >
                <span>Request {category.shortTitle} Consultation</span>
                <ArrowRight size={16} />
              </button>
              <a 
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                className="btn btn-secondary"
              >
                <Phone size={15} />
                <span>Call Consultant: {siteConfig.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services Directory */}
      {category.subServices.length > 0 && (
        <section className="section" data-animate="section-reveal">
          <div className="container">
            <div className="section-header text-left">
              <span className="section-tag">Specialized Practice Modules</span>
              <h2 className="section-title">Available {category.shortTitle} Services</h2>
              <p className="section-subtitle">
                Select a specific service below to review detailed statutory scope, required documentation, and execution methodology.
              </p>
            </div>

            <div className="grid-3" data-animate="cards-stagger">
              {category.subServices.map((sub) => (
                <div key={sub.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                    <Link to={`/${category.slug}/${sub.slug}`} style={{ color: 'inherit' }}>
                      {sub.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, flex: 1, marginBottom: 'var(--space-lg)' }}>
                    {sub.shortDescription}
                  </p>

                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '14px', marginTop: 'auto' }}>
                    <Link 
                      to={`/${category.slug}/${sub.slug}`}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      <span>View Scope & Checklist</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Common Client Challenges & Pitfalls Solved */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'flex-start' }}>
            <div>
              <span className="section-tag section-tag-green">Risk Mitigation</span>
              <h2 style={{ marginBottom: 'var(--space-md)', fontSize: '2rem' }}>
                Common Pitfalls & Notice Triggers We Resolve
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                Regulatory portals employ automated data matching routines. Without rigorous reconciliation, taxpayers often receive unexpected demands, late fees, or defective notices.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {category.commonProblems.map((prob, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      backgroundColor: '#FFFFFF',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <AlertCircle size={18} style={{ color: 'var(--color-error)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                      {prob}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits of Professional Assistance */}
            <div>
              <span className="section-tag">Value & Protection</span>
              <h2 style={{ marginBottom: 'var(--space-md)', fontSize: '2rem' }}>
                How Professional Handling Protects You
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                Dinesh H. Maurya and the Ambika Consultancy team implement systematic pre-filing checks to safeguard your money and legal standing.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {category.benefits.map((benefit, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      backgroundColor: '#FFFFFF',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Methodology */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Methodology</span>
            <h2 className="section-title">Our {category.shortTitle} Workflow</h2>
            <p className="section-subtitle">
              Every filing undergoes a four-stage quality protocol to verify that reported data matches bank records and departmental databases.
            </p>
          </div>

          <div className="grid-4" data-animate="cards-stagger">
            {category.processSteps.map((step, idx) => (
              <div key={idx} className="card" style={{ padding: 'var(--space-lg)' }}>
                <div 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--color-accent-green)',
                    marginBottom: '8px'
                  }}
                >
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.0625rem', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Checklist */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'center' }}>
            <div>
              <span className="section-tag section-tag-green">Preparation Checklist</span>
              <h2 style={{ marginBottom: 'var(--space-md)', fontSize: '2rem' }}>
                Documents Required for {category.shortTitle}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                Having the appropriate records ready speeds up your filing and eliminates subsequent verification delays. You can transmit documents securely via email or WhatsApp.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {category.requiredDocumentsGeneral.map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <FileText size={18} style={{ color: 'var(--color-accent-green)', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)' }}>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Consultation Box */}
            <div>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-2xl)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-md)' }}>
                  <FolderOpen size={22} style={{ color: 'var(--color-primary)' }} />
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>
                    Discuss Your {category.shortTitle} Requirements
                  </h3>
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                  Share your situation with Dinesh H. Maurya for direct professional guidance. We review your document status and provide a clear timeline.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button 
                    type="button" 
                    onClick={onOpenConsultation}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <span>Request Consultation</span>
                    <ArrowRight size={16} />
                  </button>

                  <a 
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%' }}
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp Direct Message</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {category.faqs.length > 0 && (
        <section className="section" data-animate="section-reveal">
          <div className="container container-narrow">
            <div className="section-header">
              <span className="section-tag">Frequently Asked Questions</span>
              <h2 className="section-title">{category.shortTitle} Inquiries</h2>
            </div>

            <FAQAccordion faqs={category.faqs} />
          </div>
        </section>
      )}

      {/* Related Categories Navigation */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
            <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              Explore Other Practice Areas:
            </span>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              {servicesData.filter(c => c.id !== category.id).map(other => (
                <Link 
                  key={other.id} 
                  to={`/${other.slug}`}
                  className="badge badge-navy"
                  style={{ textDecoration: 'none', padding: '6px 12px' }}
                >
                  {other.shortTitle} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
