import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Building2, 
  MessageSquare,
  MapPin,
  Clock,
  Briefcase,
  UserCheck,
  Rocket,
  ReceiptText,
  Building,
  Calculator,
  Percent,
  ShieldCheck,
  BadgeCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';
import { compliancePackages } from '../data/packagesData';
import { resourcesData } from '../data/resourcesData';
import { FAQAccordion } from '../components/FAQAccordion';
import { SEOHead } from '../components/SEOHead';
import { HeroSlider } from '../components/HeroSlider';
import { ServiceImageFlipCard } from '../components/ServiceImageFlipCard';
import { usePageEntrance } from '../utils/animation';

interface HomePageProps {
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'income-tax':
        return '/assets/service-card-income-tax.jpg';
      case 'gst':
        return '/assets/service-card-gst.jpg';
      case 'accounting-audit':
        return '/assets/service-card-accounting.jpg';
      case 'tds-tcs':
        return '/assets/service-card-tds.jpg';
      case 'company-registration-compliance':
        return '/assets/service-card-company.jpg';
      case 'business-registrations':
        return '/assets/service-card-business.jpg';
      default:
        return '/assets/service-card-accounting.jpg';
    }
  };

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ReceiptText': return <ReceiptText size={22} />;
      case 'Building': return <Building size={22} />;
      case 'Calculator': return <Calculator size={22} />;
      case 'Percent': return <Percent size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      case 'BadgeCheck': return <BadgeCheck size={22} />;
      default: return <ReceiptText size={22} />;
    }
  };

  const homeFaqs = [
    {
      question: 'How do I schedule an initial consultation with Dinesh H. Maurya?',
      answer: 'You can request an appointment using our online form, message us on WhatsApp at +91 93213 34335, or call our Fort office directly at 022-6636 6240. We offer both in-person meetings at our Modi Street, Fort and Ghatkopar West offices, as well as phone and video reviews.'
    },
    {
      question: 'What documents should I prepare before filing my Income Tax Return?',
      answer: 'For individual and salaried returns, keep your PAN, Aadhaar, Form 16/16A, bank statements for all active accounts, your Annual Information Statement (AIS/TIS) from the e-filing portal, and capital gain summaries from stock brokers ready. For businesses, we review sales/purchase registers and trial balance.'
    },
    {
      question: 'How do you handle GST return filings and monthly reconciliations?',
      answer: 'We collect sales and purchase records by the 5th of each month, download your auto-generated GSTR-2B on the 14th, perform an invoice-level reconciliation to catch vendor discrepancies, calculate net cash tax, and file your GSTR-1 and GSTR-3B well before statutory deadlines.'
    },
    {
      question: 'Do you assist clients outside Mumbai?',
      answer: 'Yes. While our primary offices are located in Fort (South Mumbai) and Ghatkopar West (Mumbai), we handle tax filings, GST compliance, and MCA registrations for clients across Maharashtra and India through secure electronic document exchange.'
    },
    {
      question: 'How is the service scope and professional retainer confirmed?',
      answer: 'We review your documents and business structure upfront to determine the precise filing requirements. We then provide a clear, transparent scope of work and agreed professional retainer before any engagement begins.'
    }
  ];

  return (
    <div ref={containerRef} className="home-page">
      <SEOHead 
        title="Ambika Consultancy | CA, Accounting & Tax Consultants Mumbai"
        description="Trusted Income Tax filing, GST compliance, Accounting, Audit, and Company Registration services in Fort, Mumbai and Ghatkopar West. Direct advisory from Dinesh H. Maurya."
        canonicalPath="/"
      />

      {/* SECTION 1: NEW HERO SLIDER */}
      <HeroSlider onOpenConsultation={onOpenConsultation} />

      {/* SECTION 2: PRINCIPAL CONSULTANT ADVISORY HERO */}
      <section className="section hero-advisory-section">
        <div className="container">
          <div className="grid-2 hero-advisory-grid">
            {/* Left Column: Headlines & CTA */}
            <div className="hero-advisory-content">
              <span data-animate="hero" className="section-tag section-tag-green">
                Chartered Accountancy & Tax Advisory • Fort, Mumbai
              </span>

              <h2 data-animate="hero" className="hero-advisory-title">
                Trusted Tax & Financial Advisory for Individuals and Businesses
              </h2>

              <p data-animate="hero" className="hero-advisory-desc">
                Personalized guidance for Income Tax, GST compliance, accounting, and corporate filings — led directly by senior consultant <strong style={{ color: 'var(--color-primary)' }}>Dinesh H. Maurya</strong> with precision, transparency, and care.
              </p>

              <div data-animate="hero" className="hero-advisory-actions">
                <button 
                  type="button" 
                  onClick={onOpenConsultation}
                  className="btn btn-primary btn-lg hero-cta-btn"
                  id="btn-hero-consultation"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={16} />
                </button>

                <Link to="/services-chartered-accountant-mumbai" className="btn btn-secondary btn-lg hero-cta-btn">
                  Explore Services
                </Link>
              </div>

              {/* Clean Trust Strip with Parrot Green Icons */}
              <div data-animate="hero" className="trust-strip hero-advisory-trust">
                <span className="trust-item">
                  <CheckCircle2 size={16} />
                  <span>Fort & Ghatkopar Offices</span>
                </span>
                <span className="trust-item">
                  <CheckCircle2 size={16} />
                  <span>20+ Years Practice</span>
                </span>
                <span className="trust-item">
                  <CheckCircle2 size={16} />
                  <span>Direct Consultant Review</span>
                </span>
                <span className="trust-item">
                  <CheckCircle2 size={16} />
                  <span>Zero-Penalty Focus</span>
                </span>
              </div>
            </div>

            {/* Right Column: Natural Portrait Asset */}
            <div data-animate="hero" className="hero-advisory-image-wrap">
              <div className="hero-advisory-card">
                <img 
                  src={siteConfig.consultant.portraitUrl} 
                  alt={`${siteConfig.consultant.name} - Principal Consultant at Ambika Consultancy`}
                  className="hero-advisory-portrait"
                  width="420"
                  height="490"
                />
                <div className="hero-advisory-caption">
                  <div>
                    <div className="hero-advisory-name">
                      {siteConfig.consultant.name}
                    </div>
                    <div className="hero-advisory-role">
                      {siteConfig.consultant.title}
                    </div>
                  </div>
                  <span className="badge badge-green">Fort • Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST PRINCIPLES (Pale Green Background Rhythm) */}
      <section className="section section-sm section-subtle" data-animate="section-reveal">
        <div className="container">
          <div className="grid-4" data-animate="cards-stagger">
            {siteConfig.principles.map((principle, idx) => (
              <div 
                key={idx} 
                className="card"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  padding: 'var(--space-lg)',
                  border: '1px solid var(--color-border-green)'
                }}
              >
                <h3 style={{ fontSize: '1rem', marginBottom: '6px', color: 'var(--color-primary)' }}>
                  {principle.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE SERVICES — INTERACTIVE 3D IMAGE FLIP CARDS */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">Practice Areas</span>
            <h2 className="section-title">Core Accounting & Tax Services</h2>
            <p className="section-subtitle">
              Structured professional solutions covering statutory direct taxes, indirect taxes, accounting standards, and corporate governance. Hover or tap to review key highlights.
            </p>
          </div>

          <div className="grid-3" data-animate="cards-stagger">
            {servicesData.map((category, idx) => (
              <ServiceImageFlipCard
                key={category.id}
                id={category.id}
                slug={category.slug}
                title={category.title}
                shortTitle={category.shortTitle}
                description={category.tagline || category.description}
                highlights={category.benefits}
                imageUrl={getServiceImage(category.id)}
                index={idx}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/services-chartered-accountant-mumbai" className="btn btn-secondary">
              <span>View All Practice Areas</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO WE SERVE (Pale Green Background Rhythm) */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">Client Profiles</span>
            <h2 className="section-title">Who We Support</h2>
            <p className="section-subtitle">
              Tailored advisory matching the specific statutory obligations of each taxpayer profile.
            </p>
          </div>

          <div className="grid-4" data-animate="cards-stagger">
            {siteConfig.audiences.map((aud, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  padding: 'var(--space-lg)',
                  border: '1px solid var(--color-border-green)'
                }}
              >
                <div style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent-green)' }}>
                  {idx === 0 && <UserCheck size={24} />}
                  {idx === 1 && <Briefcase size={24} />}
                  {idx === 2 && <Rocket size={24} />}
                  {idx === 3 && <Building2 size={24} />}
                </div>

                <h3 style={{ fontSize: '1.05rem', marginBottom: '6px', color: 'var(--color-primary)' }}>
                  {aud.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {aud.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROFESSIONAL PROFILE / ABOUT SECTION WITH LAYERED DEPTH */}
      <section className="section section-pale-green" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-3xl)' }}>
            <div>
              <span className="section-tag section-tag-green">Principal Consultant</span>
              <h2 style={{ marginBottom: 'var(--space-md)', fontSize: '2.25rem', lineHeight: 1.25 }}>
                Direct Accountability from Founder <span style={{ color: 'var(--color-accent-green-dark)' }}>Dinesh H. Maurya</span>
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
                At Ambika Consultancy, tax compliance is handled as a matter of financial integrity, statutory protection, and personal trust. Operating from Modi Street in the historic Fort financial precinct of Mumbai, founder <strong style={{ color: 'var(--color-primary)' }}>Dinesh H. Maurya</strong> personally oversees complex filings, department communications, and business balance sheets.
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
                Clients work directly with experienced leadership rather than impersonal customer desks. Every return, computation, and reconciliation is verified line by line before electronic submission.
              </p>

              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  borderLeft: '4px solid var(--color-accent-green)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: 'var(--space-xl)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.9375rem', marginBottom: '4px' }}>
                  Founder's Practice Philosophy
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', margin: 0, fontStyle: 'italic', lineHeight: 1.6 }}>
                  "Accurate accounting and timely statutory compliance are not mere formalities—they are the foundation of financial peace of mind, unhindered business growth, and lasting credibility."
                </p>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <Link to="/about-best-chartered-accountant-mumbai" className="btn btn-primary">
                  <span>About Our Practice</span>
                  <ArrowRight size={15} />
                </Link>
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
              <div className="consultant-single-card consultant-home-card">
                <div className="consultant-single-img-holder">
                  <img 
                    src={siteConfig.consultant.homePhotoUrl} 
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
                      Senior Tax Consultant & Financial Advisor
                    </div>
                  </div>
                  <span className="badge badge-green">Fort • Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW WE WORK (Minimalist 4-Stage Flow) */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">Engagement Flow</span>
            <h2 className="section-title">Our Working Process</h2>
            <p className="section-subtitle">
              A transparent, systematic workflow designed to ensure compliance accuracy without operational disruption.
            </p>
          </div>

          <div className="grid-4" data-animate="cards-stagger">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                desc: 'We review your business structure, tax situation, and statutory filing deadlines.'
              },
              {
                step: '02',
                title: 'Document Intake',
                desc: 'We share an itemized checklist (Form 16, bank statements, sales registers, AIS/TIS) for secure handover.'
              },
              {
                step: '03',
                title: 'Reconciliation',
                desc: 'Line-by-line verification against departmental portals (Form 26AS, GSTR-2B) and draft tax computation.'
              },
              {
                step: '04',
                title: 'Approval & Filing',
                desc: 'Client confirms draft computation, followed by portal filing, e-verification, and acknowledgement receipt.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{ 
                  backgroundColor: '#FFFFFF',
                  padding: 'var(--space-lg)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div 
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    color: 'var(--color-accent-green)',
                    marginBottom: '6px'
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE AMBIKA */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">Differentiators</span>
            <h2 className="section-title">Why Clients Trust Ambika</h2>
            <p className="section-subtitle">
              Measurable professionalism, strict statutory integrity, and practical guidance.
            </p>
          </div>

          <div className="grid-3" data-animate="cards-stagger">
            {[
              {
                title: 'Clear, Transparent Guidance',
                desc: 'We explain tax laws, deductions, and statutory notices in straightforward, accessible language without confusing jargon.'
              },
              {
                title: 'Line-by-Line Reconciliation',
                desc: 'High-value transactions flagged in AIS, broker capital gains statements, and GSTR-2B credits are matched with rigorous precision.'
              },
              {
                title: 'Strict Confidentiality',
                desc: 'Your private financial books, corporate resolutions, and taxpayer credentials remain strictly guarded and confidential.'
              },
              {
                title: 'Fort & Ghatkopar Accessibility',
                desc: 'Physical presence in South Mumbai’s financial district and Ghatkopar West ensures easy accessibility across Mumbai.'
              },
              {
                title: 'Realistic Tax Planning',
                desc: 'Legitimate tax optimization strategies rooted strictly in statutory provisions, avoiding aggressive or unsupportable positions.'
              },
              {
                title: 'Continuous Follow-Up',
                desc: 'We track return processing, intimation orders, and refund credits, providing ongoing support throughout the assessment year.'
              }
            ].map((diff, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{ 
                  backgroundColor: '#FFFFFF',
                  padding: 'var(--space-lg)',
                  border: '1px solid var(--color-border-green)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-accent-green)', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--color-primary)' }}>{diff.title}</h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: COMPLIANCE PACKAGES PREVIEW */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">Retainer Scopes</span>
            <h2 className="section-title">Compliance Retainers by Business Structure</h2>
            <p className="section-subtitle">
              Approved annual and monthly retainers designed for different business structures. Contact us to discuss your exact requirement.
            </p>
          </div>

          <div className="grid-3" data-animate="cards-stagger">
            {compliancePackages.slice(0, 3).map((pkg, i) => (
              <div 
                key={pkg.id} 
                className={`card ${i === 1 ? 'card-pale-green' : ''}`}
                style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ marginBottom: 'var(--space-sm)' }}>
                  <span className={`badge ${i === 1 ? 'badge-parrot' : 'badge-green'}`}>{pkg.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>
                  {pkg.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)', lineHeight: 1.5 }}>
                  {pkg.idealFor}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '12px 0', marginBottom: 'var(--space-md)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-green-dark)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Key Inclusions ({pkg.frequency})
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {pkg.inclusions.slice(0, 4).map((inc, idx) => (
                      <li key={idx} style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--color-accent-green)', marginTop: '2px', flexShrink: 0 }} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className={`btn ${i === 1 ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  Enquire About Retainer
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/compliance-packages" className="btn btn-secondary">
              <span>View All Retainer Details</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: OUR CLIENT COMMITMENT (Clean 2-Column with Parrot Green Accent) */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-3xl)' }}>
            <div>
              <span className="section-tag section-tag-green">Professional Standards</span>
              <h2 style={{ marginBottom: 'var(--space-md)', fontSize: '2rem' }}>
                Accuracy, Accountability & Ethical Practice
              </h2>
              <p style={{ color: 'var(--color-text-body)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
                We do not make unrealistic promises of guaranteed refunds or artificial tax schemes. Instead, we provide meticulous, law-abiding financial navigation that stands up to departmental scrutiny and safeguards your commercial reputation.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent-green)', marginBottom: '2px' }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    Statutory Portal E-Filing Verification
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-accent-green)', marginBottom: '2px' }}>
                    20+ Years
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    Combined Direct & Indirect Tax Practice
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Practice Details Box */}
            <div>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)',
                  border: '1px solid var(--color-border-green)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '4px' }}>
                  Ambika Consultancy
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-accent-green-dark)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 'var(--space-md)' }}>
                  Tax Consultants & Financial Advisors • Mumbai
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <MapPin size={16} style={{ color: 'var(--color-accent-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Fort Office:</strong> 40/42, Modi Street, Office No. 14, 2nd Floor, Fort, Mumbai - 400 001</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <MapPin size={16} style={{ color: 'var(--color-accent-green)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Ghatkopar Branch:</strong> Flat No.305, A Wing 3rd Floor, Neelkanthdhara Bldg, LBS Marg, Near Mukund Staff Vrindavan Soc, Ghatkopar West, Mumbai - 400086</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} style={{ color: 'var(--color-accent-green)', flexShrink: 0 }} />
                    <span><strong>Tel:</strong> 022-6636 6240 • <strong>Mob:</strong> 93213 34335</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} style={{ color: 'var(--color-accent-green)', flexShrink: 0 }} />
                    <span><strong>Hours:</strong> Mon - Sat: 10:00 AM – 7:30 PM</span>
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-lg)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)' }}>
                  <button 
                    type="button" 
                    onClick={onOpenConsultation}
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%' }}
                  >
                    Request Case Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: RESOURCES & INSIGHTS */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag section-tag-green">Knowledge Centre</span>
            <h2 className="section-title">Recent Tax & Compliance Guides</h2>
            <p className="section-subtitle">
              Authored insights by Dinesh H. Maurya covering recent tax regime revisions, GST reconciliation, capital gains rules, and secretarial deadlines.
            </p>
          </div>

          <div className="grid-3" data-animate="cards-stagger">
            {resourcesData.slice(0, 3).map((art) => (
              <div key={art.slug} className="card" style={{ backgroundColor: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-sm)' }}>
                  <span className="badge badge-green">{art.category}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>{art.readingTime}</span>
                </div>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', lineHeight: 1.4 }}>
                  <Link to={`/resources/${art.slug}`} style={{ color: 'inherit' }}>
                    {art.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.55, flex: 1, marginBottom: 'var(--space-lg)' }}>
                  {art.summary}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    By {art.author}
                  </span>
                  <Link 
                    to={`/resources/${art.slug}`}
                    style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-accent-green-dark)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Read Guide</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/resources" className="btn btn-secondary">
              <span>View All Articles</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQS */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-tag section-tag-green">Frequently Asked Questions</span>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">
              Clear answers regarding documentation, consultation process, and working with Ambika Consultancy.
            </p>
          </div>

          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* SECTION 12: FINAL CTA (Solid Deep Navy with Parrot Green Highlights) */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }} data-animate="section-reveal">
        <div className="container">
          <div 
            style={{
              backgroundColor: 'var(--color-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-3xl) var(--space-2xl)',
              color: '#FFFFFF',
              textAlign: 'center',
              boxShadow: 'var(--shadow-hover)'
            }}
          >
            <h2 style={{ color: '#FFFFFF', fontSize: '2.1rem', marginBottom: 'var(--space-sm)' }}>
              Let’s Discuss Your Financial & Compliance Requirements
            </h2>

            <p style={{ color: '#E2E8F0', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto var(--space-xl) auto', lineHeight: 1.6 }}>
              Tell us what you need help with, and our senior consultancy team in Fort will guide you on the appropriate, compliant next steps.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={onOpenConsultation}
                className="btn btn-primary btn-lg"
                id="btn-final-cta-enquire"
              >
                <span>Request a Consultation</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href={siteConfig.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={16} />
                <span>Message on WhatsApp</span>
              </a>

              <a 
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`} 
                className="btn btn-outline-white btn-lg"
              >
                <Phone size={16} />
                <span>Call: {siteConfig.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
