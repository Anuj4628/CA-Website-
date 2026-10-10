import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search, Phone } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { siteConfig } from '../data/siteConfig';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <SEOHead 
        title="Page Not Found (404) | Ambika Consultancy"
        description="The requested page could not be found on Ambika Consultancy."
      />

      <section className="section" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
        <div className="container container-narrow">
          <div 
            style={{
              fontSize: '4.5rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              color: 'var(--color-primary)',
              lineHeight: 1,
              marginBottom: 'var(--space-md)'
            }}
          >
            404
          </div>

          <h1 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-md)' }}>
            Page Not Found
          </h1>

          <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto var(--space-xl) auto', lineHeight: 1.6 }}>
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Please navigate back to our homepage or explore our practice areas.
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={16} />
              <span>Back to Homepage</span>
            </Link>

            <Link to="/services" className="btn btn-secondary">
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>

            <Link to="/contact-us" className="btn btn-secondary">
              <Phone size={16} />
              <span>Contact Fort Office</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
