import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';
import { siteConfig } from '../data/siteConfig';
import './ConsultationModal.css';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose,
  defaultService = '' 
}) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-backdrop" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="modal-dialog">
        <div className="modal-header">
          <div className="modal-title-group">
            <h3 id="consultation-modal-title" className="modal-title">
              Request a Professional Consultation
            </h3>
            <span className="modal-subtitle">
              Direct advisory with senior consultant {siteConfig.consultant.name}
            </span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-trust-strip">
            <ShieldCheck size={18} style={{ flexShrink: 0 }} />
            <span>
              <strong>Confidential Review:</strong> Your income, company data, and contact info are never shared with third parties.
            </span>
          </div>

          <EnquiryForm 
            defaultService={defaultService} 
            sourcePage="Consultation Modal"
          />
        </div>
      </div>
    </div>
  );
};
