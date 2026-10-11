import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import './HeroSlider.css';

export interface HeroSlideData {
  id: number;
  number: string;
  tag: string;
  title: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnActionType: 'modal' | 'link';
  secondaryBtnLink?: string;
  backgroundImage: string;
  shortLabel: string;
}

interface HeroSliderProps {
  onOpenConsultation: () => void;
}

const slides: HeroSlideData[] = [
  {
    id: 1,
    number: '01',
    tag: 'Chartered Accountancy & Financial Consulting',
    title: 'Your Trusted Partner in Financial Growth',
    description: 'Professional accounting, financial planning, and compliance services to help businesses and individuals manage their finances confidently.',
    primaryBtnText: 'Explore Our Services',
    primaryBtnLink: '/services-chartered-accountant-mumbai',
    secondaryBtnText: 'Get in Touch',
    secondaryBtnActionType: 'modal',
    backgroundImage: '/assets/hero-slide-1-consulting.jpg',
    shortLabel: 'Financial Growth',
  },
  {
    id: 2,
    number: '02',
    tag: 'Income Tax & Tax Planning',
    title: 'Smart Tax Planning. Better Financial Decisions.',
    description: 'Reliable income tax return filing, tax planning, and taxation support tailored to your financial needs.',
    primaryBtnText: 'Explore Tax Services',
    primaryBtnLink: '/income-tax-return-filing-mumbai',
    secondaryBtnText: 'Contact Us',
    secondaryBtnActionType: 'modal',
    backgroundImage: '/assets/hero-slide-2-tax.jpg',
    shortLabel: 'Tax Planning',
  },
  {
    id: 3,
    number: '03',
    tag: 'GST & Business Compliance',
    title: 'GST Compliance Made Simple',
    description: 'Simplify GST registration, return filing, and ongoing compliance with dependable professional assistance.',
    primaryBtnText: 'Explore GST Services',
    primaryBtnLink: '/gst-consultant-mumbai',
    secondaryBtnText: 'Get Expert Assistance',
    secondaryBtnActionType: 'modal',
    backgroundImage: '/assets/hero-slide-3-gst.jpg',
    shortLabel: 'GST Compliance',
  },
  {
    id: 4,
    number: '04',
    tag: 'Accounting, Audit & Business Advisory',
    title: 'Clear Accounts. Confident Business Decisions.',
    description: 'From bookkeeping and auditing to business advisory, get professional support for your everyday financial requirements.',
    primaryBtnText: 'View Our Services',
    primaryBtnLink: '/accounting-bookkeeping-audit-services',
    secondaryBtnText: 'Get in Touch',
    secondaryBtnActionType: 'modal',
    backgroundImage: '/assets/hero-slide-4-audit.jpg',
    shortLabel: 'Audit & Advisory',
  },
];

const AUTO_SLIDE_INTERVAL = 5500; // 5.5 seconds

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Automatic slide rotation
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, nextSlide, currentSlide]);

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section 
      className={`hero-slider ${isHovered ? 'is-paused' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Chartered Accountancy & Tax Advisory Highlights"
    >
      <div className="hero-slides-track">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`hero-slide ${isActive ? 'is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${slide.id} of ${slides.length}: ${slide.title}`}
              aria-hidden={!isActive}
            >
              {/* Photorealistic Background Image */}
              <img
                src={slide.backgroundImage}
                alt=""
                className="hero-slide-bg"
                loading={index === 0 ? 'eager' : 'lazy'}
                aria-hidden="true"
              />

              {/* Tinted Gradient Overlay */}
              <div className="hero-slide-overlay" aria-hidden="true" />

              {/* Slide Content */}
              <div className="hero-slide-content">
                <div className="hero-slide-tag">
                  <span className="hero-slide-tag-dot" aria-hidden="true" />
                  <span>{slide.tag}</span>
                </div>

                <h1 className="hero-slide-title">
                  {slide.title}
                </h1>

                <p className="hero-slide-desc">
                  {slide.description}
                </p>

                <div className="hero-slide-actions">
                  <Link 
                    to={slide.primaryBtnLink} 
                    className="hero-btn-primary"
                    id={`hero-slide-${slide.id}-primary-btn`}
                  >
                    <span>{slide.primaryBtnText}</span>
                    <ArrowRight size={16} />
                  </Link>

                  {slide.secondaryBtnActionType === 'modal' ? (
                    <button
                      type="button"
                      onClick={onOpenConsultation}
                      className="hero-btn-secondary"
                      id={`hero-slide-${slide.id}-secondary-btn`}
                    >
                      <Phone size={15} />
                      <span>{slide.secondaryBtnText}</span>
                    </button>
                  ) : (
                    <Link
                      to={slide.secondaryBtnLink || '/contact-chartered-accountant-mumbai'}
                      className="hero-btn-secondary"
                      id={`hero-slide-${slide.id}-secondary-btn`}
                    >
                      <Phone size={15} />
                      <span>{slide.secondaryBtnText}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clear Numbered Indicators (1, 2, 3, 4) */}
      <div className="hero-indicators-bar" aria-label="Slide Selection">
        <div className="hero-indicators-container">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`hero-indicator-btn ${isActive ? 'is-active' : ''}`}
                aria-label={`Slide ${index + 1}: ${slide.shortLabel}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <span className="hero-indicator-num">{index + 1}</span>
                <span className="hero-indicator-label">{slide.shortLabel}</span>
                {isActive && (
                  <span className="hero-indicator-progress" aria-hidden="true">
                    <span className="hero-indicator-progress-fill" key={`progress-${currentSlide}`} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
