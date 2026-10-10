import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Phone, 
  MessageSquare,
  ShieldAlert,
  FolderCheck,
  HelpCircle,
  PackageCheck
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

interface ServiceDetailPageProps {
  onOpenConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenConsultation }) => {
  const { categorySlug, serviceSlug } = useParams<{ categorySlug: string; serviceSlug: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  const category = servicesData.find((c) => c.slug === categorySlug);
  const subService = category?.subServices.find((s) => s.slug === serviceSlug);

  if (!category || !subService) {
    return <Navigate to={category ? `/services/${category.slug}` : '/services'} replace />;
  }

  // Find related sub-services
  const relatedServices = category.subServices.filter(s => s.id !== subService.id);

  return (
    <div ref={containerRef} className="service-detail-page">
      <SEOHead 
        title={subService.metaTitle}
        description={subService.metaDescription}
        canonicalPath={`/services/${category.slug}/${subService.slug}`}
      />

      {/* Hero Section */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <Breadcrumbs 
            items={[
              { label: 'Services', path: '/services' },
              { label: category.shortTitle, path: `/services/${category.slug}` },
              { label: subService.title }
            ]} 
          />

          <div data-animate="hero">
            <span className="section-tag section-tag-green">
              {category.shortTitle} Practice
            </span>
            <h1 style={{ marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>
              {subService.title}
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-body)', maxWidth: '780px', lineHeight: 1.6 }}>
              {subService.shortDescription}
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-lg)' }}>
              <button 
                type="button" 
                onClick={onOpenConsultation}
                className="btn btn-primary"
              >
                <span>Request {subService.title}</span>
                <ArrowRight size={16} />
              </button>
              <a 
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Work & Target Audience */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'flex-start' }}>
            {/* Scope of Work */}
            <div>
              <span className="section-tag">Statutory Scope</span>
              <h2 style={{ fontSize: '1.875rem', marginBottom: 'var(--space-md)' }}>
                Scope of Work & Deliverables
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                Ambika Consultancy provides comprehensive assistance to ensure your filings reflect accurate calculations and withstand statutory scrutiny:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: 'var(--space-xl)' }}>
                {subService.scopeOfWork.map((scope, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--color-accent-green)', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                      {scope}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tangible Deliverables Box */}
              <div 
                style={{
                  backgroundColor: 'var(--color-accent-green-pale)',
                  border: '1px solid var(--color-border-green)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <PackageCheck size={18} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.9375rem' }}>
                    Expected Deliverables:
                  </span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {subService.deliverables.map((del, idx) => (
                    <li key={idx} style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '5px', height: '5px', backgroundColor: 'var(--color-accent-green)', borderRadius: '50%' }}></span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Target Audience & Pitfalls Solved */}
            <div>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: 'var(--space-xl)'
                }}
              >
                <span className="section-tag section-tag-green" style={{ marginBottom: 'var(--space-sm)' }}>
                  Applicability
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-md)' }}>
                  Who Needs This Service?
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {subService.targetAudience.map((aud, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-success)', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)' }}>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Issues Solved */}
              <div 
                style={{
                  backgroundColor: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-sm)' }}>
                  <AlertCircle size={18} style={{ color: 'var(--color-error)' }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.9375rem' }}>
                    Common Pitfalls Prevented:
                  </span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {subService.commonIssues.map((issue, idx) => (
                    <li key={idx} style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: 'var(--color-error)', fontWeight: 700 }}>•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Execution Process */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Process</span>
            <h2 className="section-title">Step-by-Step Execution Methodology</h2>
            <p className="section-subtitle">
              How our consultancy transitions from document intake to finalized statutory submission.
            </p>
          </div>

          <div className="grid-4" data-animate="cards-stagger">
            {subService.stepByStepProcess.map((proc, idx) => (
              <div key={idx} className="card" style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-lg)' }}>
                <div 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-accent-green)',
                    marginBottom: '6px'
                  }}
                >
                  Step {proc.step}
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>
                  {proc.title}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {proc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Checklist */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-3xl)', alignItems: 'center' }}>
            <div>
              <span className="section-tag section-tag-green">Checklist</span>
              <h2 style={{ fontSize: '1.875rem', marginBottom: 'var(--space-md)' }}>
                Documents Required for {subService.title}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                Please have digital scans or physical copies ready when consulting with our office:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {subService.requiredDocuments.map((doc, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: 'var(--color-bg-subtle)',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <FileText size={16} style={{ color: 'var(--color-accent-green)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statutory Disclaimer & Direct Booking */}
            <div>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-2xl)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-md)' }}>
                  <ShieldAlert size={20} style={{ color: 'var(--color-warning)' }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.0625rem' }}>
                    Professional Integrity Disclaimer
                  </span>
                </div>

                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                  All tax computations and compliance representations are prepared strictly in accordance with prevailing statutory provisions of the Income Tax Act, CGST/SGST Acts, and Companies Act. Ambika Consultancy does not offer guarantees of refunds or statutory exemptions beyond what is lawfully applicable.
                </p>

                <button 
                  type="button" 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ width: '100%', marginBottom: '10px' }}
                >
                  Request Case Assessment
                </button>

                <a 
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <Phone size={15} />
                  <span>Call Dinesh H. Maurya: 93213 34335</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {subService.faqs.length > 0 && (
        <section className="section section-subtle" data-animate="section-reveal">
          <div className="container container-narrow">
            <div className="section-header">
              <span className="section-tag">Frequently Asked Questions</span>
              <h2 className="section-title">{subService.title} FAQs</h2>
            </div>

            <FAQAccordion faqs={subService.faqs} />
          </div>
        </section>
      )}

      {/* Related Services in Category */}
      {relatedServices.length > 0 && (
        <section className="section section-sm">
          <div className="container">
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-xl)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-md)' }}>
                Related {category.shortTitle} Services:
              </h3>
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                {relatedServices.map(rel => (
                  <Link 
                    key={rel.id} 
                    to={`/services/${category.slug}/${rel.slug}`}
                    className="card"
                    style={{ padding: '12px 16px', minWidth: '220px', textDecoration: 'none' }}
                  >
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                      {rel.title} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
