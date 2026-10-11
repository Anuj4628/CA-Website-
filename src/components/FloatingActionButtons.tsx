import React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import './FloatingActionButtons.css';

export const FloatingActionButtons: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20CA%20services.`;
  const phoneTelLink = `tel:+91${siteConfig.contact.primaryPhoneRaw}`;

  return (
    <div className="floating-actions-container" role="region" aria-label="Direct Contact Actions">
      {/* Phone Calling Button */}
      <a
        href={phoneTelLink}
        className="floating-action-btn floating-btn-phone"
        aria-label={`Call Ambika Consultancy: ${siteConfig.contact.primaryPhone}`}
        id="btn-floating-phone"
      >
        <Phone size={20} aria-hidden="true" />
        <span className="floating-action-tooltip">Call: {siteConfig.contact.primaryPhone}</span>
      </a>

      {/* Official WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action-btn floating-btn-whatsapp"
        aria-label={`Message Ambika Consultancy on WhatsApp: ${siteConfig.contact.primaryPhone}`}
        id="btn-floating-whatsapp"
      >
        {/* Official WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.06 6.89C8.86 6.89 8.53 6.96 8.26 7.26C7.99 7.56 7.22 8.28 7.22 9.75C7.22 11.22 8.29 12.63 8.44 12.83C8.59 13.03 10.5 16.12 13.5 17.31C16 18.3 16.51 18.1 17.06 18.05C17.61 18 18.84 17.32 19.1 16.61C19.35 15.89 19.35 15.28 19.28 15.16C19.2 15.04 19.01 14.97 18.72 14.82C18.43 14.67 17.01 13.97 16.74 13.87C16.48 13.77 16.29 13.72 16.1 14.02C15.9 14.32 15.34 15.02 15.17 15.22C15 15.42 14.83 15.45 14.54 15.3C14.25 15.15 13.31 14.85 12.19 13.85C11.32 13.07 10.73 12.11 10.56 11.82C10.39 11.53 10.54 11.37 10.69 11.22C10.82 11.09 10.98 10.88 11.13 10.71C11.28 10.54 11.33 10.42 11.43 10.22C11.53 10.02 11.48 9.85 11.4 9.7C11.33 9.55 10.74 8.1 10.5 7.51C10.26 6.94 10.02 7.02 9.84 7.01C9.67 7 9.47 6.89 9.06 6.89Z" />
        </svg>
        <span className="floating-action-tooltip">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
