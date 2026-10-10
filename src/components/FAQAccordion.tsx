import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              transition: 'border-color var(--transition-fast)'
            }}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                textAlign: 'left',
                backgroundColor: isOpen ? 'var(--color-bg-subtle)' : '#FFFFFF',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                borderBottom: isOpen ? '1px solid var(--color-border)' : 'none'
              }}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                  flexShrink: 0,
                  marginLeft: '12px',
                  color: 'var(--color-accent-green)'
                }}
              />
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '16px 20px',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.6,
                  backgroundColor: '#FFFFFF'
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
