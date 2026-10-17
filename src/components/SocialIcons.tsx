import React from 'react';
import { siteConfig } from '../data/siteConfig';
import './SocialIcons.css';

interface SocialIconsProps {
  variant?: 'topbar' | 'footer' | 'contact';
  className?: string;
}

export const FacebookIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="social-svg facebook-svg"
  >
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path
      d="M15.117 12.073h-2.14v7.927h-3.277v-7.927H8.058v-2.79h1.642V7.485c0-1.628.773-4.17 4.17-4.17l3.061.013v2.707h-2.22c-.364 0-.874.182-.874.954v2.094h3.13l-.36 2.79z"
      fill="#FFFFFF"
    />
  </svg>
);

export const InstagramIcon: React.FC<{ size?: number; idPrefix?: string }> = ({ 
  size = 20, 
  idPrefix = 'default' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="social-svg instagram-svg"
  >
    <defs>
      <linearGradient id={`ig-grad-${idPrefix}`} x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FED373" />
        <stop offset="25%" stopColor="#F15245" />
        <stop offset="60%" stopColor="#D92E7F" />
        <stop offset="90%" stopColor="#9B36B7" />
        <stop offset="100%" stopColor="#515ECF" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="12" fill={`url(#ig-grad-${idPrefix})`} />
    <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.2" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="2.8" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
    <circle cx="15.3" cy="8.7" r="0.75" fill="#FFFFFF" />
  </svg>
);

export const XTwitterIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="social-svg x-svg"
  >
    <circle cx="12" cy="12" r="12" fill="#000000" />
    <path
      d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
      fill="#FFFFFF"
      transform="translate(5.4, 5.4) scale(0.55)"
    />
  </svg>
);

export const SocialIcons: React.FC<SocialIconsProps> = ({ 
  variant = 'topbar',
  className = ''
}) => {
  const iconSize = variant === 'topbar' ? 22 : variant === 'footer' ? 28 : 32;
  const socialLinks = (siteConfig as any).social || {
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
    twitter: 'https://x.com',
  };

  const xUrl = socialLinks.twitter || socialLinks.x || 'https://x.com';

  return (
    <div 
      className={`social-icons-group social-icons-${variant} ${className}`}
      role="list"
      aria-label="Social media handles"
    >
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn social-icon-facebook"
        title="Follow us on Facebook"
        aria-label="Facebook"
        role="listitem"
      >
        <FacebookIcon size={iconSize} />
      </a>

      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn social-icon-instagram"
        title="Follow us on Instagram"
        aria-label="Instagram"
        role="listitem"
      >
        <InstagramIcon size={iconSize} idPrefix={variant} />
      </a>

      <a
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn social-icon-x"
        title="Follow us on X (Twitter)"
        aria-label="X (formerly Twitter)"
        role="listitem"
      >
        <XTwitterIcon size={iconSize} />
      </a>
    </div>
  );
};
