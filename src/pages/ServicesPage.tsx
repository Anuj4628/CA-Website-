import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ReceiptText, 
  Building, 
  Calculator, 
  Percent, 
  ShieldCheck, 
  BadgeCheck,
  Search,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

interface ServicesPageProps {
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = servicesData.filter((cat) => {
    const matchesTitle = cat.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDesc = cat.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSub = cat.subServices.some(sub => 
      sub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      sub.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesTitle || matchesDesc || matchesSub;
  });

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

  return (
    <div ref={containerRef} className="services-overview-page">
      <SEOHead 
        title="Services Overview | CA, Tax & Corporate Advisory Mumbai | Ambika Consultancy"
        description="Explore Ambika Consultancy's practice areas: Income Tax return filing, GST compliance, Accounting & Audit, TDS/TCS, Company Incorporation, and Business Licensing in Mumbai."
        canonicalPath="/services"
      />

      {/* Page Header */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services Overview' }]} />
          <div data-animate="hero">
            <span className="section-tag section-tag-green">Practice Areas</span>
            <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
              Professional Financial, Tax & Compliance Services
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-body)', maxWidth: '760px', lineHeight: 1.6 }}>
              From individual income tax filing to full-scale corporate governance, explore our practice areas designed to ensure accuracy, compliance, and strategic clarity for your finances.
            </p>

            {/* Quick Search */}
            <div style={{ maxWidth: '460px', marginTop: 'var(--space-lg)', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search services (e.g. GST, capital gains, TDS, audit)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
                style={{ paddingLeft: '40px' }}
              />
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Grid — Coordinated Color Rhythm (White, Pale Green, Parrot Green) */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }} data-animate="section-reveal">
        <div className="container">
          <div className="grid-3" data-animate="cards-stagger">
            {filteredCategories.map((category, idx) => {
              // Strict Alternating Sequence: Solid Green → Light Green → Solid Green → Light Green → Solid Green → Light Green
              const isSolidGreen = idx % 2 === 0;

              if (isSolidGreen) {
                return (
                  <div 
                    key={category.id} 
                    className="card card-parrot"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: 'var(--space-xl)',
                      height: '100%'
                    }}
                  >
                    <div>
                      {/* Header: Icon + Title */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-md)' }}>
                        <div 
                          style={{
                            width: '44px',
                            height: '44px',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: '#FFFFFF',
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          {getServiceIcon(category.iconName)}
                        </div>
                        <div>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255, 255, 255, 0.9)' }}>
                            {category.shortTitle}
                          </span>
                          <h2 style={{ fontSize: '1.25rem', marginTop: '2px', lineHeight: 1.3, color: '#FFFFFF' }}>
                            <Link to={`/services/${category.slug}`} style={{ color: 'inherit' }}>
                              {category.title}
                            </Link>
                          </h2>
                        </div>
                      </div>

                      {/* Concise Description */}
                      <p style={{ fontSize: '0.875rem', color: '#F0FDF4', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                        {category.tagline}
                      </p>
                    </div>

                    {/* Subservice Links */}
                    <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255, 255, 255, 0.25)', paddingTop: 'var(--space-md)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.85)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                        Key Solutions:
                      </div>

                      {category.subServices.length > 0 ? (
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'var(--space-lg)' }}>
                          {category.subServices.slice(0, 4).map((sub) => (
                            <li key={sub.id}>
                              <Link 
                                to={`/services/${category.slug}/${sub.slug}`}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  fontSize: '0.8125rem',
                                  color: '#FFFFFF',
                                  textDecoration: 'none',
                                  padding: '4px 0'
                                }}
                              >
                                <span style={{ fontWeight: 500 }}>{sub.title}</span>
                                <ChevronRight size={13} style={{ color: 'rgba(255, 255, 255, 0.8)', flexShrink: 0 }} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p style={{ fontSize: '0.8125rem', color: '#F0FDF4', marginBottom: 'var(--space-lg)' }}>
                          MSME Udyam, Shop & Establishment Gumasta, Partnership deed registration, and PAN/TAN processing.
                        </p>
                      )}

                      <Link 
                        to={`/services/${category.slug}`}
                        className="btn btn-outline-white btn-sm"
                        style={{ width: '100%', justifyContent: 'space-between' }}
                      >
                        <span>View {category.shortTitle} Scope</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              }

              // Light Green Card
              return (
                <div 
                  key={category.id} 
                  className="card card-pale-green"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 'var(--space-xl)',
                    height: '100%'
                  }}
                >
                  <div>
                    {/* Header: Icon + Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-md)' }}>
                      <div 
                        style={{
                          width: '44px',
                          height: '44px',
                          backgroundColor: '#FFFFFF',
                          color: 'var(--color-accent-green)',
                          border: '1px solid var(--color-border-green)',
                          borderRadius: 'var(--radius-md)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {getServiceIcon(category.iconName)}
                      </div>
                      <div>
                        <span className="badge badge-green" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                          {category.shortTitle}
                        </span>
                        <h2 style={{ fontSize: '1.25rem', marginTop: '3px', lineHeight: 1.3 }}>
                          <Link to={`/services/${category.slug}`} style={{ color: 'inherit' }}>
                            {category.title}
                          </Link>
                        </h2>
                      </div>
                    </div>

                    {/* Concise Description */}
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                      {category.tagline}
                    </p>
                  </div>

                  {/* Subservice Links */}
                  <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border-green)', paddingTop: 'var(--space-md)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent-green-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                      Key Solutions:
                    </div>

                    {category.subServices.length > 0 ? (
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'var(--space-lg)' }}>
                        {category.subServices.slice(0, 4).map((sub) => (
                          <li key={sub.id}>
                            <Link 
                              to={`/services/${category.slug}/${sub.slug}`}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                fontSize: '0.8125rem',
                                color: 'var(--color-text-main)',
                                textDecoration: 'none',
                                padding: '4px 0',
                                transition: 'color var(--transition-fast)'
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-green-dark)')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-main)')}
                            >
                              <span style={{ fontWeight: 500 }}>{sub.title}</span>
                              <ChevronRight size={13} style={{ color: 'var(--color-text-light)', flexShrink: 0 }} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
                        MSME Udyam, Shop & Establishment Gumasta, Partnership deed registration, and PAN/TAN processing.
                      </p>
                    )}

                    <Link 
                      to={`/services/${category.slug}`}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      <span>View {category.shortTitle} Scope</span>
                      <ArrowRight size={14} style={{ color: 'var(--color-accent-green)' }} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCategories.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
              <h3>No services matching "{searchTerm}"</h3>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>
                Please try another search keyword or contact our Mumbai office directly.
              </p>
              <button 
                type="button" 
                onClick={() => setSearchTerm('')} 
                className="btn btn-secondary"
                style={{ marginTop: 'var(--space-md)' }}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip — Solid Deep Navy */}
      <section className="section section-subtle" data-animate="section-reveal">
        <div className="container">
          <div 
            style={{
              backgroundColor: 'var(--color-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              color: '#FFFFFF',
              textAlign: 'center',
              boxShadow: 'var(--shadow-hover)'
            }}
          >
            <h2 style={{ color: '#FFFFFF', fontSize: '1.875rem', marginBottom: 'var(--space-sm)' }}>
              Need Help Deciding Which Service Fits Your Situation?
            </h2>
            <p style={{ color: '#E2E8F0', maxWidth: '600px', margin: '0 auto var(--space-lg) auto', fontSize: '1rem', lineHeight: 1.6 }}>
              Consult senior tax advisor Dinesh H. Maurya directly. We will evaluate your records and guide you on the exact, penalty-free path forward.
            </p>
            <button 
              type="button" 
              onClick={onOpenConsultation}
              className="btn btn-primary btn-lg"
            >
              <span>Schedule a Discussion</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
