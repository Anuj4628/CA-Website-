import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollToTop } from './components/ScrollToTop';

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
import { MumbaiCaPage } from './pages/MumbaiCaPage';
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
            <Route path="/" element={<HomePage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/about-us" element={<AboutPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/services" element={<ServicesPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/services/:categorySlug" element={<ServiceCategoryPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/services/:categorySlug/:serviceSlug" element={<ServiceDetailPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/compliance-packages" element={<PackagesPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<ResourceDetailPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/chartered-accountant-mumbai" element={<MumbaiCaPage onOpenConsultation={() => handleOpenConsultation('')} />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

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
