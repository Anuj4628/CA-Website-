import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  CheckCircle2, 
  Phone,
  MessageSquare
} from 'lucide-react';
import { resourcesData } from '../data/resourcesData';
import { siteConfig } from '../data/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { usePageEntrance } from '../utils/animation';

interface ResourceDetailPageProps {
  onOpenConsultation: () => void;
}

interface ContentBlock {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol';
  content?: string;
  items?: string[];
}

// Inline formatting helper for **bold** text
const renderInlineFormatting = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

// Robust markdown parser that handles headings, lists, and paragraphs accurately
const parseMarkdownBlocks = (markdown: string): ContentBlock[] => {
  const rawLines = markdown.trim().split('\n');
  const blocks: ContentBlock[] = [];
  
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let currentParagraphLines: string[] = [];

  const flushParagraph = () => {
    if (currentParagraphLines.length > 0) {
      blocks.push({
        type: 'p',
        content: currentParagraphLines.join(' ').trim()
      });
      currentParagraphLines = [];
    }
  };

  const flushList = () => {
    if (currentList && currentList.items.length > 0) {
      blocks.push(currentList);
      currentList = null;
    }
  };

  for (let i = 0; i < rawLines.length; i++) {
    const rawLine = rawLines[i];
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    // Heading 3: ### Title
    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      blocks.push({
        type: 'h3',
        content: line.replace(/^###\s+/, '').trim()
      });
      continue;
    }

    // Heading 2: ## Title
    if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      blocks.push({
        type: 'h2',
        content: line.replace(/^##\s+/, '').trim()
      });
      continue;
    }

    // Unordered list item: - Item or * Item
    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(line.replace(/^[-*]\s+/, '').trim());
      continue;
    }

    // Ordered list item: 1. Item or 2. Item
    if (/^\d+\.\s+/.test(line)) {
      flushParagraph();
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(line.replace(/^\d+\.\s+/, '').trim());
      continue;
    }

    // Indented list continuation
    if (/^\s+[-*]\s+/.test(rawLine) && currentList) {
      currentList.items.push(line.replace(/^[-*]\s+/, '').trim());
      continue;
    }

    // Regular paragraph text line
    if (currentList) {
      flushList();
    }
    currentParagraphLines.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
};

export const ResourceDetailPage: React.FC<ResourceDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  usePageEntrance(containerRef);

  const article = resourcesData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const relatedArticles = resourcesData.filter(a => a.slug !== article.slug).slice(0, 2);
  const blocks = parseMarkdownBlocks(article.contentMarkdown);

  return (
    <div ref={containerRef} className="resource-detail-page">
      <SEOHead 
        title={`${article.title} | Ambika Consultancy`}
        description={article.summary}
        canonicalPath={`/resources/${article.slug}`}
      />

      {/* Header Section */}
      <section className="section section-sm section-subtle">
        <div className="container" style={{ maxWidth: '860px' }}>
          <Breadcrumbs 
            items={[
              { label: 'Knowledge Centre', path: '/resources' },
              { label: article.category }
            ]} 
          />

          <div data-animate="hero" style={{ marginTop: 'var(--space-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <span className="badge badge-green">{article.category}</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                {article.readingTime}
              </span>
            </div>

            <h1 style={{ fontSize: '2.25rem', lineHeight: 1.25, marginBottom: 'var(--space-md)', color: 'var(--color-primary)' }}>
              {article.title}
            </h1>

            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: 'var(--space-lg)' }}>
              {article.summary}
            </p>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--space-lg)', 
              flexWrap: 'wrap', 
              fontSize: '0.875rem', 
              color: 'var(--color-text-muted)', 
              borderTop: '1px solid var(--color-border-green)', 
              paddingTop: '14px' 
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} style={{ color: 'var(--color-accent-green)' }} /> Author: <strong>{article.author}</strong>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} style={{ color: 'var(--color-accent-green)' }} /> Updated: {article.lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-4xl)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          {/* Key Takeaways Card */}
          <div 
            style={{
              backgroundColor: 'var(--color-accent-green-pale)',
              border: '1px solid var(--color-border-green)',
              borderLeft: '4px solid var(--color-accent-green)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px 28px',
              marginBottom: '36px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 700, 
              fontSize: '1.05rem', 
              color: 'var(--color-primary)', 
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <CheckCircle2 size={18} style={{ color: 'var(--color-accent-green)' }} />
              <span>Executive Summary & Key Takeaways:</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--color-accent-green)', fontWeight: 700, lineHeight: 1.5, userSelect: 'none' }}>•</span>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                    {renderInlineFormatting(takeaway)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Formatted Body */}
          <div className="article-body">
            {blocks.map((block, idx) => {
              if (block.type === 'h3') {
                return (
                  <h3 
                    key={idx} 
                    style={{ 
                      marginTop: '36px', 
                      marginBottom: '14px', 
                      fontSize: '1.35rem', 
                      lineHeight: 1.35,
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      borderBottom: '2px solid var(--color-accent-green-pale)',
                      paddingBottom: '8px'
                    }}
                  >
                    {renderInlineFormatting(block.content || '')}
                  </h3>
                );
              }
              if (block.type === 'h2') {
                return (
                  <h2 
                    key={idx} 
                    style={{ 
                      marginTop: '44px', 
                      marginBottom: '16px', 
                      fontSize: '1.65rem', 
                      lineHeight: 1.3,
                      color: 'var(--color-primary)',
                      fontWeight: 700
                    }}
                  >
                    {renderInlineFormatting(block.content || '')}
                  </h2>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul 
                    key={idx} 
                    style={{ 
                      margin: '0 0 20px 0', 
                      paddingLeft: '22px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '8px',
                      fontSize: '1.05rem',
                      lineHeight: 1.7,
                      color: 'var(--color-text-body)'
                    }}
                  >
                    {block.items?.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ paddingLeft: '4px' }}>
                        {renderInlineFormatting(item)}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'ol') {
                return (
                  <ol 
                    key={idx} 
                    style={{ 
                      margin: '0 0 20px 0', 
                      paddingLeft: '24px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '8px',
                      fontSize: '1.05rem',
                      lineHeight: 1.7,
                      color: 'var(--color-text-body)'
                    }}
                  >
                    {block.items?.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ paddingLeft: '4px' }}>
                        {renderInlineFormatting(item)}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p 
                  key={idx} 
                  style={{ 
                    fontSize: '1.0625rem', 
                    lineHeight: 1.8, 
                    color: 'var(--color-text-body)', 
                    marginBottom: '18px' 
                  }}
                >
                  {renderInlineFormatting(block.content || '')}
                </p>
              );
            })}
          </div>

          {/* Author Card */}
          <div 
            style={{
              marginTop: '48px',
              padding: '24px',
              backgroundColor: '#F8FAFC',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              gap: '20px',
              alignItems: 'center'
            }}
          >
            <img 
              src={siteConfig.consultant.aboutPhotoUrl} 
              alt={article.author}
              style={{ 
                width: '72px', 
                height: '72px', 
                borderRadius: 'var(--radius-md)', 
                objectFit: 'cover', 
                objectPosition: 'center top',
                border: '2px solid var(--color-accent-green)',
                flexShrink: 0
              }}
            />
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-primary)' }}>
                About the Author: {article.author}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', margin: '4px 0 0 0', lineHeight: 1.6 }}>
                {siteConfig.consultant.title} & Founder of {siteConfig.firmName}, Modi Street, Fort, Mumbai. Over two decades of specialized expertise in direct & indirect taxes.
              </p>
            </div>
          </div>

          {/* Consultation CTA */}
          <div 
            style={{
              marginTop: '36px',
              padding: '36px 32px',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-hover)'
            }}
          >
            <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '8px' }}>
              Have Questions Regarding This Topic?
            </h3>
            <p style={{ color: '#E2E8F0', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
              Consult Dinesh H. Maurya directly to evaluate how these tax and compliance provisions apply to your personal returns or business accounts.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={onOpenConsultation}
                className="btn btn-primary"
                style={{ backgroundColor: 'var(--color-accent-green)', borderColor: 'var(--color-accent-green)' }}
              >
                <span>Request Consultation</span>
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
              <a 
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                className="btn btn-secondary"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}
              >
                <Phone size={15} />
                <span>Call: {siteConfig.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section section-sm section-subtle">
          <div className="container" style={{ maxWidth: '860px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-md)', color: 'var(--color-primary)' }}>
              Related Guides & Insights:
            </h3>
            <div className="grid-2">
              {relatedArticles.map((rel) => (
                <div key={rel.slug} className="card card-pale-green" style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="badge badge-green" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                    {rel.category}
                  </span>
                  <h4 style={{ fontSize: '1.0625rem', marginBottom: '8px', lineHeight: 1.4 }}>
                    <Link to={`/resources/${rel.slug}`} style={{ color: 'var(--color-primary)' }}>
                      {rel.title}
                    </Link>
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-body)', marginBottom: 'var(--space-md)', flex: 1, lineHeight: 1.6 }}>
                    {rel.summary.substring(0, 110)}...
                  </p>
                  <Link 
                    to={`/resources/${rel.slug}`} 
                    style={{ 
                      fontSize: '0.8125rem', 
                      fontWeight: 600, 
                      color: 'var(--color-accent-green-dark)', 
                      marginTop: 'auto', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '4px' 
                    }}
                  >
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

export default ResourceDetailPage;
