import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, RotateCw } from 'lucide-react';
import './ServiceImageFlipCard.css';

export interface ServiceImageFlipCardProps {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  index: number;
}

export const ServiceImageFlipCard: React.FC<ServiceImageFlipCardProps> = ({
  slug,
  title,
  shortTitle,
  description,
  highlights,
  imageUrl,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // If clicking a link or return button directly, let default action happen
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('.service-flip-back-return')) {
      return;
    }
    // Toggle flip for touch / click users
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const target = e.target as HTMLElement;
      if (target.tagName !== 'A') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    }
  };

  return (
    <div
      className={`service-flip-card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={handleCardClick}
      onMouseLeave={() => setIsFlipped(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`${title} service card`}
      aria-expanded={isFlipped}
    >
      <div className="service-flip-card-inner">
        {/* ==================== FRONT SIDE: REALISTIC PHOTO + TITLE ==================== */}
        <div className="service-flip-card-front">
          <img
            src={imageUrl}
            alt={title}
            className="service-flip-front-img"
            loading="lazy"
          />

          <div className="service-flip-front-overlay" aria-hidden="true" />

          <div className="service-flip-front-content">
            <span className="service-flip-front-tag">{shortTitle}</span>
            <h3 className="service-flip-front-title">{title}</h3>
            <div className="service-flip-front-cue">
              <span className="service-flip-front-cue-label">
                <RotateCw size={13} aria-hidden="true" />
                <span>Hover or tap to reveal scope</span>
              </span>
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </div>

        {/* ==================== BACK SIDE: DESCRIPTION + HIGHLIGHTS + LEARN MORE ==================== */}
        <div className="service-flip-card-back">
          <div className="service-flip-back-body">
            <div className="service-flip-back-header">
              <span className="service-flip-back-tag">Service Highlights</span>
              <button
                type="button"
                className="service-flip-back-return"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                aria-label="Return to front of card"
              >
                <RotateCw size={11} aria-hidden="true" />
                <span>Front</span>
              </button>
            </div>

            <h4 className="service-flip-back-title">{title}</h4>
            <p className="service-flip-back-desc">{description}</p>

            <ul className="service-flip-back-highlights">
              {highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="service-flip-back-highlight-item">
                  <CheckCircle2 size={14} className="service-flip-back-check-icon" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-flip-back-action">
            <Link
              to={`/${slug}`}
              className="service-flip-back-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Learn More</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <span className="service-flip-back-pill">Direct Advisory</span>
          </div>
        </div>
      </div>
    </div>
  );
};
