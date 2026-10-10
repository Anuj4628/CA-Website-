import React, { useState } from 'react';
import { CheckCircle2, Send, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface EnquiryFormProps {
  defaultService?: string;
  sourcePage?: string;
  onSuccess?: () => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  description: string;
  preferredMethod: 'Phone Call' | 'WhatsApp' | 'Email';
  consent: boolean;
  honeypot: string; // Anti-spam hidden field
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  serviceRequired?: string;
  consent?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  defaultService = '', 
  sourcePage = 'General Enquiry',
  onSuccess 
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: defaultService || 'Income Tax Return Filing',
    description: '',
    preferredMethod: 'WhatsApp',
    consent: true,
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    // Phone validation (accepts 10 digits Indian mobile format, optional +91)
    const phoneClean = formData.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select the service required.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy terms to submit.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check anti-spam honeypot
    if (formData.honeypot) {
      console.warn('Bot submission prevented.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulation of clean API endpoint dispatch
    // In production, this posts to client's configured email/CRM webhook endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const textMsg = `Hello Dinesh ji, I am submitting an enquiry from Ambika Consultancy Website.%0A*Name:* ${encodeURIComponent(formData.fullName || 'Client')}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.serviceRequired)}%0A*Details:* ${encodeURIComponent(formData.description || 'Consultation request')}`;
    window.open(`https://wa.me/919321334335?text=${textMsg}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="submission-success-card">
        <div className="success-icon-wrap">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="success-title">Enquiry Received Successfully</h3>
        <p className="success-desc">
          Thank you, <strong>{formData.fullName}</strong>. Senior tax consultant <strong>Dinesh H. Maurya</strong> will review your details and contact you via {formData.preferredMethod}.
        </p>
        <div className="success-actions">
          <button 
            type="button" 
            onClick={handleWhatsAppDirect}
            className="btn btn-whatsapp"
          >
            <MessageSquare size={16} /> Continue on WhatsApp Directly
          </button>
          <a 
            href={`tel:${siteConfig.contact.primaryPhoneRaw}`} 
            className="btn btn-secondary btn-sm"
          >
            <Phone size={14} /> Call Office Directly: 93213 34335
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot for bot protection */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <input 
          type="text" 
          name="website_url_check" 
          tabIndex={-1} 
          value={formData.honeypot} 
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} 
        />
      </div>

      <div className="grid-2" style={{ gap: 'var(--space-md)' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            placeholder="e.g. Ramesh Patel"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            disabled={isSubmitting}
            required
          />
          {errors.fullName && <div className="form-error">{errors.fullName}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone Number <span className="required">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            placeholder="e.g. 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            disabled={isSubmitting}
            required
          />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>
      </div>

      <div className="grid-2" style={{ gap: 'var(--space-md)' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="e.g. ramesh@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            disabled={isSubmitting}
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="serviceRequired">
            Service Required <span className="required">*</span>
          </label>
          <select
            id="serviceRequired"
            className={`form-control ${errors.serviceRequired ? 'is-invalid' : ''}`}
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            disabled={isSubmitting}
          >
            <option value="Income Tax Return Filing">Income Tax Return Filing (ITR-1 to 6)</option>
            <option value="Capital Gains Tax & Property Sale">Capital Gains Tax & Property Sale</option>
            <option value="Income Tax Notice Response">Income Tax Notice Response</option>
            <option value="GST Registration & Filing">GST Registration & Filing</option>
            <option value="GST 2B Reconciliation & Notice">GST 2B Reconciliation & DRC-01B/C</option>
            <option value="TDS & TCS Returns / TRACES">TDS & TCS Returns / TRACES Correction</option>
            <option value="Accounting & Balance Sheet Preparation">Accounting & Balance Sheet Preparation</option>
            <option value="Company Incorporation (Pvt Ltd / LLP)">Company Incorporation (Pvt Ltd / LLP)</option>
            <option value="Annual ROC Filings (AOC-4, MGT-7)">Annual ROC Filings (AOC-4, MGT-7)</option>
            <option value="Business Registration / Gumasta / MSME">Business Registration / Gumasta / MSME</option>
            <option value="General Financial Consultancy">General Financial Consultancy</option>
          </select>
          {errors.serviceRequired && <div className="form-error">{errors.serviceRequired}</div>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="preferredMethod">
          Preferred Contact Method
        </label>
        <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap', marginTop: '6px' }}>
          {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
            <label key={method} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', cursor: 'pointer' }}>
              <input
                type="radio"
                name="preferredMethod"
                value={method}
                checked={formData.preferredMethod === method}
                onChange={() => setFormData({ ...formData, preferredMethod: method })}
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="description">
          Brief Description of Your Requirement
        </label>
        <textarea
          id="description"
          className="form-control"
          rows={3}
          placeholder="Mention key details (e.g., salaried with stock trading, property sale in Mumbai, pending GST notice, or new company setup)..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: 'var(--color-text-body)', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            style={{ marginTop: '3px' }}
          />
          <span>
            I authorize Ambika Consultancy to contact me regarding this enquiry. All financial details are held under strict confidentiality.
          </span>
        </label>
        {errors.consent && <div className="form-error">{errors.consent}</div>}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%' }}
        disabled={isSubmitting}
        id="btn-submit-enquiry"
      >
        {isSubmitting ? (
          <span>Submitting Details...</span>
        ) : (
          <>
            <Send size={16} />
            <span>Submit Consultation Request</span>
          </>
        )}
      </button>

      <div style={{ textAlign: 'center', marginTop: 'var(--space-md)', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
        Prefer immediate assistance? Call Dinesh H. Maurya directly at{' '}
        <a href={`tel:${siteConfig.contact.primaryPhoneRaw}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
          {siteConfig.contact.primaryPhone}
        </a>
      </div>
    </form>
  );
};
