import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingActionButtons } from './components/FloatingActionButtons';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceCategoryPage } from './pages/ServiceCategoryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { PackagesPage } from './pages/PackagesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationDefaultService, setConsultationDefaultService] = useState('');

  const handleOpenConsultation = (serviceName: string = '') => {
    setConsultationDefaultService(serviceName);
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar onOpenConsultation={() => handleOpenConsultation('')} />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Core Primary SEO Pages */}
            <Route path="/" element={<HomePage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/about-best-chartered-accountant-mumbai" element={<AboutPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/services-chartered-accountant-mumbai" element={<ServicesPage onOpenConsultation={() => handleOpenConsultation('')} />} />

            {/* 6 Core Practice Areas Clean SEO URLs */}
            <Route path="/income-tax-return-filing-mumbai" element={<ServiceCategoryPage fixedCategorySlug="income-tax-return-filing-mumbai" onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/gst-consultant-mumbai" element={<ServiceCategoryPage fixedCategorySlug="gst-consultant-mumbai" onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/accounting-bookkeeping-audit-services" element={<ServiceCategoryPage fixedCategorySlug="accounting-bookkeeping-audit-services" onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/tds-tcs-return-filing-mumbai" element={<ServiceCategoryPage fixedCategorySlug="tds-tcs-return-filing-mumbai" onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/company-registration-mumbai" element={<ServiceCategoryPage fixedCategorySlug="company-registration-mumbai" onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/business-registration-licensing-mumbai" element={<ServiceCategoryPage fixedCategorySlug="business-registration-licensing-mumbai" onOpenConsultation={() => handleOpenConsultation('')} />} />

            {/* Sub-Service Detailed Pages */}
            <Route path="/:categorySlug/:serviceSlug" element={<ServiceDetailPage onOpenConsultation={() => handleOpenConsultation('')} />} />

            {/* Other Standard & SEO Pages */}
            <Route path="/contact-chartered-accountant-mumbai" element={<ContactPage />} />
            <Route path="/compliance-packages" element={<PackagesPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<ResourceDetailPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/chartered-accountant-mumbai" element={<Navigate to="/" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />

            {/* Seamless Redirect Compatibility for legacy/short URLs */}
            <Route path="/about-us" element={<Navigate to="/about-best-chartered-accountant-mumbai" replace />} />
            <Route path="/about" element={<Navigate to="/about-best-chartered-accountant-mumbai" replace />} />
            <Route path="/services" element={<Navigate to="/services-chartered-accountant-mumbai" replace />} />
            <Route path="/contact-us" element={<Navigate to="/contact-chartered-accountant-mumbai" replace />} />
            <Route path="/contact" element={<Navigate to="/contact-chartered-accountant-mumbai" replace />} />
            <Route path="/services/income-tax" element={<Navigate to="/income-tax-return-filing-mumbai" replace />} />
            <Route path="/services/gst" element={<Navigate to="/gst-consultant-mumbai" replace />} />
            <Route path="/services/accounting-audit" element={<Navigate to="/accounting-bookkeeping-audit-services" replace />} />
            <Route path="/services/tds-tcs" element={<Navigate to="/tds-tcs-return-filing-mumbai" replace />} />
            <Route path="/services/company-registration-compliance" element={<Navigate to="/company-registration-mumbai" replace />} />
            <Route path="/services/business-registrations" element={<Navigate to="/business-registration-licensing-mumbai" replace />} />
            <Route path="/services/:categorySlug" element={<ServiceCategoryPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/services/:categorySlug/:serviceSlug" element={<ServiceDetailPage onOpenConsultation={() => handleOpenConsultation('')} />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Floating WhatsApp and Phone Actions */}
        <FloatingActionButtons />

        {/* Global Consultation Modal */}
        <ConsultationModal 
          isOpen={isConsultationModalOpen}
          onClose={handleCloseConsultation}
          defaultService={consultationDefaultService}
        />
      </div>
    </Router>
  );
};

export default App;
