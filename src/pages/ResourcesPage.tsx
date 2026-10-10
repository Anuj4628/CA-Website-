import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Clock, 
  BookOpen, 
  Tag, 
  Calendar 
} from 'lucide-react';
import { resourcesData } from '../data/resourcesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

export const ResourcesPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Income Tax', 'GST', 'TDS & TCS', 'Corporate Compliance'];

  const filteredArticles = resourcesData.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div ref={containerRef} className="resources-page">
      <SEOHead 
        title="Knowledge Centre & Tax Guides | Ambika Consultancy Mumbai"
        description="Practical statutory tax guides authored by Dinesh H. Maurya: Income Tax regimes, GST 2B reconciliation, capital gains rules, and ROC compliance checklists."
        canonicalPath="/resources"
      />

      {/* Hero */}
      <section className="section section-sm section-subtle">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Knowledge Centre' }]} />
          <div data-animate="hero">
            <span className="section-tag section-tag-green">Knowledge & Insights</span>
            <h1 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
              Tax & Statutory Compliance Knowledge Centre
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-body)', maxWidth: '780px', lineHeight: 1.6 }}>
              Authored practical guides and checklists to help taxpayers, business owners, and finance professionals navigate changing statutory regulations in India.
            </p>

            {/* Search & Filter Bar */}
            <div style={{ marginTop: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ maxWidth: '480px', position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search articles by topic, section, or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: '40px' }}
                />
                <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
              </div>

              {/* Category Pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '6px 14px',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid',
                      borderColor: selectedCategory === cat ? 'var(--color-accent-green)' : 'var(--color-border)',
                      backgroundColor: selectedCategory === cat ? 'var(--color-accent-green)' : '#FFFFFF',
                      color: selectedCategory === cat ? '#FFFFFF' : 'var(--color-text-main)',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section" data-animate="section-reveal">
        <div className="container">
          <div className="grid-3" data-animate="cards-stagger">
            {filteredArticles.map((article) => (
              <div key={article.slug} className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-sm)' }}>
                  <span className="badge badge-green">{article.category}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                    {article.readingTime}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', lineHeight: 1.4 }}>
                  <Link to={`/resources/${article.slug}`} style={{ color: 'inherit' }}>
                    {article.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, flex: 1, marginBottom: 'var(--space-lg)' }}>
                  {article.summary}
                </p>

                {/* Key Tags */}
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
                  {article.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg-subtle)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    Updated: {article.lastUpdated}
                  </span>
                  <Link 
                    to={`/resources/${article.slug}`}
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
              <h3>No articles found</h3>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>
                Try adjusting your search query or select another category filter.
              </p>
              <button 
                type="button" 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="btn btn-secondary"
                style={{ marginTop: 'var(--space-md)' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
