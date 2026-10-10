import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  CheckCircle2, 
  Share2, 
  Phone,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { resourcesData } from '../data/resourcesData';
import { siteConfig } from '../data/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

interface ResourceDetailPageProps {
  onOpenConsultation: () => void;
}

export const ResourceDetailPage: React.FC<ResourceDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  const article = resourcesData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const relatedArticles = resourcesData.filter(a => a.slug !== article.slug).slice(0, 2);

  return (
    <div ref={containerRef} className="resource-detail-page">
      <SEOHead 
        title={`${article.title} | Ambika Consultancy`}
        description={article.summary}
        canonicalPath={`/resources/${article.slug}`}
      />

      {/* Header */}
      <section className="section section-sm section-subtle">
        <div className="container container-narrow">
          <Breadcrumbs 
            items={[
              { label: 'Knowledge Centre', path: '/resources' },
              { label: article.category }
            ]} 
          />

          <div data-animate="hero">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-sm)' }}>
              <span className="badge badge-gold">{article.category}</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                {article.readingTime}
              </span>
            </div>

            <h1 style={{ fontSize: '2.25rem', lineHeight: 1.25, marginBottom: 'var(--space-md)' }}>
              {article.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap', fontSize: '0.875rem', color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} /> Author: {article.author}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} /> Updated: {article.lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container container-narrow">
          {/* Key Takeaways Card */}
          <div 
            style={{
              backgroundColor: 'var(--color-primary-soft)',
              border: '1px solid rgba(3, 36, 71, 0.15)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-xl)',
              marginBottom: 'var(--space-2xl)'
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
              Executive Summary & Key Takeaways:
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                    {takeaway}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Markdown Render */}
          <div 
            className="article-body"
            style={{ 
              fontSize: '1.0625rem', 
              lineHeight: 1.8, 
              color: 'var(--color-text-body)' 
            }}
          >
            {article.contentMarkdown.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={idx} style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)', fontSize: '1.5rem', color: 'var(--color-primary)' }}>
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('- ')) {
                const listItems = trimmed.split('\n').map(l => l.replace(/^- /, ''));
                return (
                  <ul key={idx} style={{ marginLeft: 'var(--space-lg)', marginBottom: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {listItems.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ')) {
                const listItems = trimmed.split('\n');
                return (
                  <ol key={idx} style={{ marginLeft: 'var(--space-lg)', marginBottom: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {listItems.map((li, i) => (
                      <li key={i}>{li.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} style={{ marginBottom: 'var(--space-lg)' }}>
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Author Card */}
          <div 
            style={{
              marginTop: 'var(--space-3xl)',
              padding: 'var(--space-xl)',
              backgroundColor: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              gap: 'var(--space-lg)',
              alignItems: 'center'
            }}
          >
            <img 
              src={siteConfig.consultant.headshotUrl} 
              alt={article.author}
              style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-md)', objectFit: 'cover', border: '2px solid var(--color-accent-gold)' }}
            />
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary)' }}>
                About the Author: {article.author}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0, marginTop: '4px' }}>
                Senior tax consultant and founder at Ambika Consultancy, Modi Street, Fort, Mumbai. Over two decades of expertise in direct & indirect taxes.
              </p>
            </div>
          </div>

          {/* Consultation CTA */}
          <div 
            style={{
              marginTop: 'var(--space-2xl)',
              padding: 'var(--space-2xl)',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center'
            }}
          >
            <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '8px' }}>
              Have Questions Regarding This Topic?
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.9375rem', maxWidth: '520px', margin: '0 auto var(--space-lg) auto' }}>
              Consult Dinesh H. Maurya directly to evaluate how these provisions apply to your personal returns or business accounts.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={onOpenConsultation}
                className="btn btn-gold"
              >
                <span>Request Case Review</span>
                <ArrowRight size={16} />
              </button>
              <a 
                href={siteConfig.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section section-sm section-subtle">
          <div className="container container-narrow">
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-md)' }}>
              Related Guides:
            </h3>
            <div className="grid-2">
              {relatedArticles.map((rel) => (
                <div key={rel.slug} className="card" style={{ backgroundColor: '#FFFFFF' }}>
                  <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '6px' }}>{rel.category}</span>
                  <h4 style={{ fontSize: '1.0625rem', marginBottom: '6px' }}>
                    <Link to={`/resources/${rel.slug}`} style={{ color: 'inherit' }}>
                      {rel.title}
                    </Link>
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
                    {rel.summary.substring(0, 95)}...
                  </p>
                  <Link to={`/resources/${rel.slug}`} style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
