export interface OfficeLocation {
  title: string;
  badge: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  mapsUrl: string;
  notes?: string;
}

export const siteConfig = {
  firmName: 'Ambika Consultancy',
  legalName: 'Ambika Consultancy & Tax Consultants',
  tagline: 'CA, Accounting & Tax Advisory in Mumbai',
  subheading: 'Accurate Tax Filing, GST Compliance, Audit Assistance & Corporate Advisory',
  
  // Confirmed Founder & Consultant Details from business cards & uploaded assets
  consultant: {
    name: 'Dinesh H. Maurya',
    title: 'Senior Tax Consultant & Financial Advisor',
    designation: 'Founder & Principal Consultant',
    experienceSummary: 'Over two decades of hands-on expertise in direct and indirect taxation, sales tax/GST, statutory filings, and business accounting.',
    // Independent consultant images for Home and About pages
    homePhotoUrl: '/assets/dinesh-maurya-home-desk.jpg',
    aboutPhotoUrl: '/assets/dinesh-maurya-portrait.jpg',
    portraitUrl: '/assets/dinesh-maurya-portrait.jpg',
    headshotUrl: '/assets/dinesh-maurya-headshot.jpg',
    officePhotoUrl: '/assets/dinesh-maurya-office.jpg',
    deskPhotoUrl: '/assets/dinesh-maurya-home-desk.jpg',
  },

  // Centralized SEO-friendly URLs
  routes: {
    home: '/',
    about: '/about-best-chartered-accountant-mumbai',
    services: '/services-chartered-accountant-mumbai',
    incomeTax: '/income-tax-return-filing-mumbai',
    gst: '/gst-consultant-mumbai',
    accounting: '/accounting-bookkeeping-audit-services',
    tdsTcs: '/tds-tcs-return-filing-mumbai',
    companyRegistration: '/company-registration-mumbai',
    businessRegistrations: '/business-registration-licensing-mumbai',
    contact: '/contact-chartered-accountant-mumbai',
    packages: '/compliance-packages',
    resources: '/resources',
    consultation: '/consultation',
    privacyPolicy: '/privacy-policy',
    terms: '/terms-and-conditions',
    disclaimer: '/disclaimer',
  },

  // Confirmed Contact Details
  contact: {
    primaryPhone: '+91 93213 34335',
    primaryPhoneRaw: '9321334335',
    secondaryPhone: '+91 79773 60617',
    secondaryPhoneRaw: '7977360617',
    landline: '022-6636 6240',
    landlineRaw: '02266366240',
    landline2: '022-6636 6240',
    landline2Raw: '02266366240',
    whatsappNumber: '919321334335',
    whatsappUrl: 'https://wa.me/919321334335?text=Hello%20Ambika%20Consultancy%2C%20I%20would%20like%20to%20enquire%20about%20your%20services',
    primaryEmail: 'ambika.consultancy@yahoo.co.in',
    secondaryEmail: 'ambikasalestax@gmail.com',
    workingHours: 'Monday to Saturday: 10:00 AM – 7:30 PM (Sunday Closed)',
  },

  // Official Social Media Profiles & Online Handles
  social: {
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
    twitter: 'https://x.com',
  },

  // Confirmed Office Locations
  offices: [
    {
      title: 'Head Office (Fort, Mumbai)',
      badge: 'Main Corporate Office',
      addressLine1: '40/42, Modi Street, Office No. 14, 2nd Floor',
      addressLine2: 'Near CSMT & Reserve Bank of India, Fort',
      city: 'Mumbai',
      pincode: '400 001',
      mapsUrl: 'https://maps.google.com/?q=18.9373757,72.8362616(Ambika+Consultancy)',
      notes: 'Conveniently situated in the historic financial center of South Mumbai, walking distance from CSMT and Churchgate stations.'
    },
    {
      title: 'Branch Office (Ghatkopar West)',
      badge: 'Ghatkopar Branch Office',
      addressLine1: 'Flat No.305, A Wing 3rd Floor, Neelkanthdhara Bldg',
      addressLine2: 'LBS Marg, Near Mukund Staff Vrindavan Soc, Ghatkopar West',
      city: 'Mumbai',
      pincode: '400086',
      mapsUrl: 'https://maps.google.com/?q=Neelkanthdhara+Bldg+LBS+Marg+Ghatkopar+West+Mumbai+400086',
      notes: 'Conveniently serving taxpayers, entrepreneurs, and business clients across Ghatkopar and Eastern Suburbs.'
    }
  ] as OfficeLocation[],

  // Mandatory Footer Credit Requirement
  // "SEO and Design by Sunmarg India"
  // If the original URL is not yet formally provided, this is the configuration placeholder:
  footerCredit: {
    prefixText: 'SEO and Design by',
    companyName: 'Sunmarg India',
    url: 'https://sunmargindia.com', // CONFIGURATION PLACEHOLDER: Update with confirmed official Sunmarg India URL
    targetBlank: true
  },

  // Core Trust & Service Principles
  principles: [
    {
      title: 'Regulatory Precision',
      description: 'Accurate computation of Income Tax, GST liabilities, and TDS with strict statutory adherence.'
    },
    {
      title: 'Direct Consultant Access',
      description: 'Work directly with seasoned tax professional Dinesh H. Maurya, ensuring personalized accountability.'
    },
    {
      title: 'Strict Confidentiality',
      description: 'Your financial statements, tax records, and client databases are handled with highest professional discretion.'
    },
    {
      title: 'Timely Statutory Compliance',
      description: 'Zero penalty focus through scheduled reminders, prompt review, and on-time portal filings.'
    }
  ],

  // Who We Serve
  audiences: [
    {
      title: 'Salaried Professionals & HNIs',
      description: 'Capital gains calculation on shares/mutual funds, rental income, multiple Form 16 reconciliation, and foreign asset disclosures.',
      icon: 'UserCheck'
    },
    {
      title: 'Proprietorships & Partnerships',
      description: 'Presumptive taxation under 44AD/44ADA, book maintenance, GST returns, and annual tax filings.',
      icon: 'Briefcase'
    },
    {
      title: 'Startups & Growing Businesses',
      description: 'Entity structuring, GST registration, MSME certificates, bank loan balance sheets, and statutory accounts setup.',
      icon: 'Rocket'
    },
    {
      title: 'Private Limited Companies & LLPs',
      description: 'End-to-end ROC annual returns, DIR-3 KYC, board resolutions, TDS reconciliations, and statutory audit support.',
      icon: 'Building2'
    }
  ]
};
