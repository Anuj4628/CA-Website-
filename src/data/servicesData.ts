export interface SubService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  targetAudience: string[];
  scopeOfWork: string[];
  requiredDocuments: string[];
  stepByStepProcess: { step: string; title: string; description: string }[];
  deliverables: string[];
  commonIssues: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  iconName: string;
  commonProblems: string[];
  benefits: string[];
  processSteps: { step: string; title: string; description: string }[];
  requiredDocumentsGeneral: string[];
  faqs: { question: string; answer: string }[];
  subServices: SubService[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'income-tax',
    slug: 'income-tax-return-filing-mumbai',
    title: 'Income Tax Advisory & Return Filing',
    shortTitle: 'Income Tax',
    tagline: 'Precision tax computation, compliance, and dispute resolution for individuals and businesses.',
    description: 'From individual salaried taxpayers with capital gains to proprietary firms and corporate assessments, Ambika Consultancy delivers accurate income tax computations, timely filing, and prompt notice assistance.',
    metaTitle: 'Income Tax Return Filing & Tax Advisory in Mumbai | Ambika Consultancy',
    metaDescription: 'Expert Income Tax filing (ITR-1 to ITR-7), capital gains computation, tax notice replies, and revision services in Fort, Mumbai. Accurate and confidential advice.',
    iconName: 'ReceiptText',
    commonProblems: [
      'Unreported high-value transactions flagged in AIS / TIS or Form 26AS.',
      'Complex capital gains computations across multiple stock brokers and mutual funds.',
      'Defective return notices under Section 139(9) or demand notices under Section 143(1).',
      'Confusion between the New vs Old Tax Regime deductions under Section 80C, 80D, and HRA.',
      'Delayed refund processing due to bank account validation or TDS mismatches.'
    ],
    benefits: [
      'Zero-error electronic verification through authorized E-filing protocols.',
      'Proactive tax planning to optimize legitimate exemptions and deductions.',
      'Direct review by senior tax consultant Dinesh H. Maurya before submission.',
      'Prompt post-filing support until assessment order and refund release.'
    ],
    processSteps: [
      { step: '01', title: 'Data & Statement Collection', description: 'Gather Form 16/16A, bank statements, AIS/TIS report, and investment proof.' },
      { step: '02', title: 'Reconciliation & Tax Computation', description: 'Cross-check TDS in 26AS, compute income heads, and compare Old vs New regimes.' },
      { step: '03', title: 'Draft Review with Client', description: 'Share draft computation sheet, tax payable or refund summary for approval.' },
      { step: '04', title: 'E-Filing & Verification', description: 'Submit on the Income Tax Portal, generate ITR-V acknowledgement, and assist in e-verification.' }
    ],
    requiredDocumentsGeneral: [
      'PAN Card & Aadhaar Card (linked)',
      'Form 16 (Part A & B) / Form 16A',
      'Annual Information Statement (AIS) & Taxpayer Information Summary (TIS)',
      'Bank Account Statements for the entire financial year',
      'Capital Gains Statements from brokers (Zerodha, Groww, CAMS, KFintech)',
      'Proof of deductions (Life insurance, PPF, health insurance, home loan interest)'
    ],
    faqs: [
      {
        question: 'Which tax regime should I choose: Old or New?',
        answer: 'The choice depends on your gross income and available deductions (HRA, 80C, 80D, home loan interest). The New Tax Regime offers lower slab rates with default applicability, but foregoes most exemptions. We calculate your tax liability under both systems side-by-side so you can make an informed choice.'
      },
      {
        question: 'What is the due date for filing individual Income Tax Returns?',
        answer: 'For individual taxpayers, salaried persons, and non-audit business entities, the standard due date is July 31 following the end of the financial year. For businesses requiring tax audit, the due date is October 31.'
      },
      {
        question: 'Can I file my ITR if I missed the July 31 deadline?',
        answer: 'Yes, you can file a Belated Return under Section 139(4) until December 31 of the assessment year with a nominal late fee under Section 234F. After that, filing may require an Updated Return (ITR-U) under Section 139(8A).'
      }
    ],
    subServices: [
      {
        id: 'income-tax-return-filing',
        slug: 'income-tax-return-filing',
        title: 'Income Tax Return (ITR) Filing',
        shortDescription: 'Comprehensive filing for salaried employees, business proprietors, consultants, and companies (ITR-1 to ITR-6).',
        metaTitle: 'Income Tax Return (ITR) Filing in Fort, Mumbai | Ambika Consultancy',
        metaDescription: 'Accurate e-filing of ITR-1, ITR-2, ITR-3, and ITR-4. Timely submission, AIS/26AS reconciliation, and refund tracking by Ambika Consultancy.',
        targetAudience: ['Salaried Individuals with single or multiple Form 16s', 'Freelancers, consultants & professionals', 'Sole proprietors and partnership firms', 'Directors and partners with business income'],
        scopeOfWork: [
          'Full cross-verification of AIS, TIS, and Form 26AS data.',
          'Computation of income across all heads: Salary, House Property, Business, Capital Gains, and Other Sources.',
          'Selection of the correct ITR form (ITR-1, 2, 3, or 4).',
          'Tax calculation comparing Old vs New tax regimes.',
          'Portal submission, ITR-V generation, and client copy handover.'
        ],
        requiredDocuments: ['PAN & Aadhaar', 'Form 16 / Form 16A', 'Bank statements of all active accounts', 'Investment & deduction receipts', 'AIS / TIS downloaded from e-portal'],
        stepByStepProcess: [
          { step: '1', title: 'Document Intake', description: 'Client shares tax documents securely via WhatsApp or email.' },
          { step: '2', title: 'Portal Reconciliation', description: 'Reconcile actual receipts with Income Tax Department records.' },
          { step: '3', title: 'Draft Tax Computation', description: 'Client approves computed tax or refund amount.' },
          { step: '4', title: 'Filing & E-verification', description: 'File ITR and generate official acknowledgement.' }
        ],
        deliverables: ['Official ITR-V Acknowledgement Receipt', 'Detailed Computation of Total Income sheet', 'Challan copy for advance tax/self-assessment tax (if applicable)'],
        commonIssues: ['Mismatch between employer TDS and 26AS credit', 'Unaccounted interest from savings bank and fixed deposits', 'Filing the wrong ITR form leading to defective return notices'],
        faqs: [
          { question: 'What is the fee for filing an ITR?', answer: 'Our professional fees are transparent and depend on the complexity of your income sources (e.g., standard salary vs multi-broker trading accounts). Contact us for a direct quote.' },
          { question: 'Do I need to visit your Fort office in person?', answer: 'In-person visits to our Fort or Belapur offices are welcome, but the entire process can also be completed smoothly via phone, WhatsApp, and email.' }
        ],
        relatedSlugs: ['capital-gains-tax', 'tax-notice-assistance', 'itr-revision-and-rectification']
      },
      {
        id: 'capital-gains-tax',
        slug: 'capital-gains-tax',
        title: 'Capital Gains Tax Advisory & Computation',
        shortDescription: 'Accurate short-term and long-term capital gains calculations for shares, mutual funds, gold, and real estate sales.',
        metaTitle: 'Capital Gains Tax Advisory & Property Sale Tax Mumbai | Ambika Consultancy',
        metaDescription: 'Accurate capital gains computation for real estate, equity, and mutual funds. Section 54, 54EC capital gain bond exemptions and ITR-2 filing.',
        targetAudience: ['Real estate sellers looking for Section 54 / 54EC exemptions', 'Active stock market investors and mutual fund unitholders', 'ESOP / RSU holders with domestic or foreign equity'],
        scopeOfWork: [
          'Detailed analysis of purchase and sale deeds, indexing benefits where applicable.',
          'Broker P&L statement parsing (Zerodha, Groww, ICICI Direct, HDFC Securities, etc.).',
          'Calculation of STCG and LTCG at relevant statutory rates.',
          'Advisory on reinvestment in residential property or Capital Gain Bonds (54EC) within statutory windows.',
          'Filing appropriate ITR-2 or ITR-3 schedules.'
        ],
        requiredDocuments: ['Broker Capital Gain P&L summary', 'Purchase and Sale Deeds of immovable property', 'Proof of renovation / construction expenses', 'Bank statements showing consideration received', 'Investment proofs in 54EC bonds or Capital Gain Account Scheme'],
        stepByStepProcess: [
          { step: '1', title: 'Asset Transaction Audit', description: 'Examine sale value, holding period, and cost of acquisition.' },
          { step: '2', title: 'Indexation & Slabs Check', description: 'Apply cost inflation index (CII) and correct post-budget tax rates.' },
          { step: '3', title: 'Exemption Structuring', description: 'Identify valid deductions under Sec 54, 54F, or 54EC.' },
          { step: '4', title: 'Reporting in Return', description: 'Accurate disclosure in schedule CG of the ITR.' }
        ],
        deliverables: ['Detailed Capital Gain computation worksheet', 'Recommendations for tax-saving bond investments', 'Accurate ITR filing with complete asset disclosure'],
        commonIssues: ['Incorrect cost inflation index calculation', 'Missing TDS under Section 194-IA on property purchases', 'Non-reporting of share trading transactions that trigger scrutiny'],
        faqs: [
          { question: 'What is the time limit to invest in Section 54EC bonds?', answer: 'You must invest in approved REC, PFC, or NHAI bonds within 6 months from the date of transfer of the capital asset, up to a maximum cap of ₹50 Lakhs in a financial year.' }
        ],
        relatedSlugs: ['income-tax-return-filing', 'tax-notice-assistance']
      },
      {
        id: 'tax-notice-assistance',
        slug: 'tax-notice-assistance',
        title: 'Income Tax Notice Assistance & Rectification',
        shortDescription: 'Professional response and resolution for notices issued under Section 139(9), 142(1), 143(1), 148, or 156.',
        metaTitle: 'Income Tax Notice Assistance & Reply Fort Mumbai | Ambika Consultancy',
        metaDescription: 'Received an Income Tax notice? Professional response drafting for 143(1) intimation, 139(9) defective return, and 142(1) inquiries in Mumbai.',
        targetAudience: ['Taxpayers who received demand or defective return notices', 'Individuals with unexplained cash deposits or high-value transactions', 'Businesses facing assessment inquiries under faceless assessment'],
        scopeOfWork: [
          'Thorough reading and diagnosis of the specific notice on the Income Tax E-filing portal.',
          'Tracing the underlying variance between departmental records and filed return.',
          'Gathering corroborating financial records, bank proofs, and invoices.',
          'Drafting legally grounded, clear, and comprehensive written submissions.',
          'Uploading responses through the Faceless Assessment / E-Proceedings portal within prescribed timelines.'
        ],
        requiredDocuments: ['Notice PDF downloaded from Income Tax portal with DIN', 'Originally filed ITR-V and Computation Sheet', 'Bank statements for the financial year under scrutiny', 'Supporting invoices, deeds, or gift affidavits as required by the query'],
        stepByStepProcess: [
          { step: '1', title: 'Notice Diagnosis', description: 'Identify DIN, section, query grounds, and statutory response deadline.' },
          { step: '2', title: 'Document Collation', description: 'Gather exact bank trails and third-party confirmations.' },
          { step: '3', title: 'Drafting Submissions', description: 'Prepare professional written representation addressing each point.' },
          { step: '4', title: 'Online Submission & Follow-up', description: 'Submit via E-Proceedings portal and track order disposal.' }
        ],
        deliverables: ['Written submission draft and explanatory notes', 'Portal acknowledgement for submitted response', 'Follow-up tracking until rectification order is passed'],
        commonIssues: ['Ignoring notice deadline leading to ex-parte orders or penalties', 'Submitting incomplete replies without bank reconciliation', 'Incorrect response type selection on the portal'],
        faqs: [
          { question: 'Will I need to attend an in-person hearing at the IT office?', answer: 'Most Income Tax proceedings in India are now conducted via the online Faceless Assessment system. Submissions, hearings, and clarifications are managed electronically without personal appearances.' }
        ],
        relatedSlugs: ['income-tax-return-filing', 'itr-revision-and-rectification']
      },
      {
        id: 'itr-revision-and-rectification',
        slug: 'itr-revision-and-rectification',
        title: 'ITR Revision & Rectification (Sec 139(5) & 154)',
        shortDescription: 'Rectify errors, claim missed deductions, correct bank details, or file updated returns (ITR-U) under Section 139(8A).',
        metaTitle: 'Revised ITR Filing & Rectification Sec 154 Mumbai | Ambika Consultancy',
        metaDescription: 'Correct errors in filed tax returns. Timely revision under Sec 139(5), online rectification under Sec 154, and ITR-U filing in Fort, Mumbai.',
        targetAudience: ['Taxpayers who forgot to declare an income source', 'Individuals who missed claiming 80C/80D/HRA deductions', 'Taxpayers whose refund was rejected due to incorrect bank IFSC or name mismatch'],
        scopeOfWork: [
          'Review of previously filed return against updated financial records.',
          'Determination of applicable route: Revised Return u/s 139(5), Rectification Request u/s 154, or Updated Return u/s 139(8A).',
          'Preparation of corrected income schedule and tax recalculation.',
          'Online submission and tracking of CPC Bengaluru processing.'
        ],
        requiredDocuments: ['Original ITR-V acknowledgement and receipt number', 'Intimation Order u/s 143(1) received from CPC', 'Fresh proofs or corrected statements'],
        stepByStepProcess: [
          { step: '1', title: 'Discrepancy Identification', description: 'Review the original return and determine exact nature of error.' },
          { step: '2', title: 'Legal Route Selection', description: 'Check time limits to file revision vs rectification vs ITR-U.' },
          { step: '3', title: 'Submission', description: 'Upload revised XML/JSON or submit online rectification request.' },
          { step: '4', title: 'Refund Re-issue', description: 'Track status and assist in refund re-issue request if needed.' }
        ],
        deliverables: ['Revised ITR Acknowledgement', 'Rectification Request Token', 'Updated Tax Computation summary'],
        commonIssues: ['Trying to file a revised return after the statutory cutoff date (Dec 31)', 'Filing rectification when the correction requires fresh claims not made originally'],
        faqs: [
          { question: 'What is an Updated Return (ITR-U)?', answer: 'An Updated Return under Section 139(8A) allows taxpayers to update their return within 24 months from the end of the relevant assessment year, subject to payment of additional tax, primarily used to report previously omitted income.' }
        ],
        relatedSlugs: ['income-tax-return-filing', 'tax-notice-assistance']
      }
    ]
  },
  {
    id: 'gst',
    slug: 'gst-consultant-mumbai',
    title: 'Goods & Services Tax (GST) Services',
    shortTitle: 'GST Services',
    tagline: 'End-to-end GST registration, monthly return filing, 2B reconciliation, and notice resolution.',
    description: 'Avoid penalties, blocked input tax credits (ITC), and cancellation notices. Ambika Consultancy handles monthly and quarterly GST filings (GSTR-1, GSTR-3B, GSTR-9), multi-vendor reconciliation, and department replies.',
    metaTitle: 'GST Registration & Return Filing Services Mumbai | Ambika Consultancy',
    metaDescription: 'Professional GST services in Fort & Belapur Mumbai. New GST registration, GSTR-1, GSTR-3B, GSTR-9 annual filing, ITC reconciliation, and GST notice replies.',
    iconName: 'Building',
    commonProblems: [
      'Blocked Input Tax Credit due to supplier failure to file GSTR-1 (GSTR-2B mismatches).',
      'Notices for tax differences between GSTR-1 and GSTR-3B (Form DRC-01B).',
      'Notices for excess ITC availed in GSTR-3B compared to GSTR-2B (Form DRC-01C).',
      'Suspension or cancellation of GSTIN due to non-filing of consecutive returns.',
      'Complex reverse charge mechanism (RCM) calculations on transport or legal expenses.'
    ],
    benefits: [
      'Systematic invoice-by-invoice reconciliation before every GSTR-3B filing.',
      'Proactive intimation of defaulting vendors so your funds are not trapped.',
      'Prompt filing well ahead of due dates (11th & 20th of every month) to avoid late fee accumulation.',
      'Experienced drafting for GST scrutiny and summons notices.'
    ],
    processSteps: [
      { step: '01', title: 'Sales & Purchase Ingestion', description: 'Collect sales registers, outward invoices, and purchase registers.' },
      { step: '02', title: 'Portal 2B Match & Credit Validation', description: 'Download portal GSTR-2B, compare with internal purchase register, and identify mismatches.' },
      { step: '03', title: 'GSTR-1 & 3B Draft Preparation', description: 'Compute net tax liability, utilize eligible ITC, and prepare challan for any cash outflow.' },
      { step: '04', title: 'EVC / DSC Filing & Archival', description: 'File returns using OTP/Digital Signature and maintain organized audit trail.' }
    ],
    requiredDocumentsGeneral: [
      'PAN Card of Business and Proprietor/Directors/Partners',
      'Aadhaar Card of Authorized Signatory',
      'Electricity Bill / Rent Agreement / NOC for Registered Place of Business',
      'Bank Account Statement / Cancelled Cheque showing Business Account details',
      'Sales and Purchase Registers for the tax period',
      'E-way bill and delivery challans where applicable'
    ],
    faqs: [
      {
        question: 'When is GST registration mandatory in Maharashtra?',
        answer: 'GST registration is mandatory if your aggregate turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs in specific cases) or ₹20 Lakhs for service providers in a financial year. It is also mandatory irrespective of turnover for interstate supplies, e-commerce sellers, and entities liable under Reverse Charge Mechanism.'
      },
      {
        question: 'What happens if our vendor has not filed their GST return?',
        answer: 'Under Section 16(2)(aa) of the CGST Act, you cannot claim Input Tax Credit unless the details of the invoice are reflected in your auto-generated GSTR-2B. We provide vendor mismatch reports so you can follow up with vendors before making payments.'
      }
    ],
    subServices: [
      {
        id: 'gst-registration',
        slug: 'gst-registration',
        title: 'GST Registration Services',
        shortDescription: 'Fast, hassle-free new GST registration, principal and additional place of business amendments, and core field updates.',
        metaTitle: 'GST Registration in Fort & Belapur Mumbai | Ambika Consultancy',
        metaDescription: 'Get new GST registration in Mumbai for proprietorships, partnerships, LLPs, and private limited companies. Smooth application, physical verification support.',
        targetAudience: ['New startups and emerging businesses crossing statutory thresholds', 'Traders selling on Amazon, Flipkart, or e-commerce platforms', 'Companies opening branch offices in Maharashtra'],
        scopeOfWork: [
          'Verification of business premises documents (Electricity bill, Rent agreement, Consent letter).',
          'Selection of correct HSN (Goods) and SAC (Services) codes.',
          'Application drafting on the GST Portal (REG-01) with biometric Aadhaar authentication.',
          'Responding to clarification notices (REG-03) from the jurisdictional tax officer.',
          'Issuance of official GSTIN Certificate (REG-06).'
        ],
        requiredDocuments: ['PAN Card of Business / Promoters', 'Aadhaar Card of Promoters', 'Proof of Business Place (Rent Agreement + Electricity Bill)', 'Bank account details (cancelled cheque)', 'Authorization Letter / Board Resolution'],
        stepByStepProcess: [
          { step: '1', title: 'Documentation Review', description: 'Inspect premises documents to prevent common query rejections.' },
          { step: '2', title: 'Portal Application', description: 'Submit Part A and Part B of application on GST portal.' },
          { step: '3', title: 'Aadhaar Authentication', description: 'Complete online OTP authentication for all signatories.' },
          { step: '4', title: 'Approval & Handover', description: 'Receive GSTIN certificate and generate first login credentials.' }
        ],
        deliverables: ['Official GST Registration Certificate (Form GST REG-06)', 'Login credentials for the GST portal', 'Compliance calendar with initial filing dates'],
        commonIssues: ['Address mismatch between rent agreement and electricity bill', 'Unregistered or ambiguous commercial electricity meter'],
        faqs: [
          { question: 'How many days does it take to get a GST number?', answer: 'With Aadhaar authentication and clear address documentation, registration is typically approved within 3 to 7 working days by the department.' }
        ],
        relatedSlugs: ['gst-return-filing', 'gst-reconciliation']
      },
      {
        id: 'gst-return-filing',
        slug: 'gst-return-filing',
        title: 'Monthly & Quarterly GST Return Filing',
        shortDescription: 'Accurate e-filing of GSTR-1, GSTR-3B, QRMP scheme returns, and GSTR-9/9C annual returns without late fees.',
        metaTitle: 'GST Return Filing Services Mumbai (GSTR-1 & 3B) | Ambika Consultancy',
        metaDescription: 'Timely, accurate filing of GSTR-1 and GSTR-3B. Input tax credit verification, cash ledger tax payment, and zero-penalty track record in Mumbai.',
        targetAudience: ['Active businesses with regular sales and purchases', 'Service providers and contractors', 'Traders, wholesalers, and manufacturers'],
        scopeOfWork: [
          'Detailed invoice data extraction and HSN-wise sales summary.',
          'Timely filing of GSTR-1 on or before 11th of every month.',
          'Input tax credit calculation strictly in line with GSTR-2B.',
          'Challan generation (PMT-06) for cash ledger payments.',
          'Filing of GSTR-3B on or before 20th of every month.'
        ],
        requiredDocuments: ['Sales Invoices / Sales Register', 'Purchase Invoices / Purchase Register', 'Bank statement for the tax period', 'Credit / Debit notes issued'],
        stepByStepProcess: [
          { step: '1', title: 'Data Upload', description: 'Client shares sales and purchase registers by the 5th of every month.' },
          { step: '2', title: 'Reconciliation', description: 'Match purchases against GSTR-2B generated on the 14th.' },
          { step: '3', title: 'Computation & Tax Payment', description: 'Confirm tax liability and generate PMT-06 challan.' },
          { step: '4', title: 'Final Filing', description: 'Submit GSTR-3B with EVC / DSC verification.' }
        ],
        deliverables: ['Filed GSTR-1 and GSTR-3B acknowledgement receipts', 'Monthly ITC reconciliation ledger', 'Challan payment receipts'],
        commonIssues: ['Filing GSTR-3B without matching 2B, inviting automatic DRC-01C notices', 'Reporting incorrect tax rates on B2B supplies'],
        faqs: [
          { question: 'What is the late fee for delayed GST return filing?', answer: 'The standard late fee is ₹50 per day (₹20 per day for NIL returns) up to maximum statutory caps, plus 18% annual interest on delayed cash tax payments.' }
        ],
        relatedSlugs: ['gst-registration', 'gst-reconciliation', 'gst-notice-assistance']
      },
      {
        id: 'gst-reconciliation',
        slug: 'gst-reconciliation',
        title: 'GST Input Tax Credit (ITC) Reconciliation',
        shortDescription: 'Invoice-level matching of internal books with GSTR-2B / GSTR-2A to recover missed credit and avoid tax notices.',
        metaTitle: 'GST 2B Reconciliation & ITC Audit Mumbai | Ambika Consultancy',
        metaDescription: 'Ensure 100% eligible Input Tax Credit without departmental penalties. Automated and manual 2B vs books reconciliation by Ambika Consultancy.',
        targetAudience: ['Companies with heavy purchase volumes', 'Contractors and project-based firms with multi-vendor supply chains', 'Businesses facing working capital strain from locked credits'],
        scopeOfWork: [
          'Line-by-line comparison between internal purchase registers and GSTR-2B.',
          'Identification of missing supplier invoices, invoice number errors, and tax amount mismatches.',
          'Categorization of ineligible credits under Section 17(5) (blocked credits).',
          'Preparation of vendor follow-up notices to push delinquent vendors to file GSTR-1.',
          'Annual ITC reconciliation for GSTR-9 preparation.'
        ],
        requiredDocuments: ['Purchase Register from Tally / Busy / ERP', 'GSTR-2B JSON / Excel downloads from portal', 'GSTR-3B returns filed for the relevant financial year'],
        stepByStepProcess: [
          { step: '1', title: 'Ledger Extraction', description: 'Export purchase records with GSTIN, invoice no, date, and tax splits.' },
          { step: '2', title: 'Matching Engine', description: 'Execute matching algorithm across GSTIN, invoice number, and values.' },
          { step: '3', title: 'Variance Report', description: 'Generate clear list of matched, unmatched, and portal-only records.' },
          { step: '4', title: 'Corrective Action', description: 'Advise on ITC reversal or addition in subsequent GSTR-3B.' }
        ],
        deliverables: ['Comprehensive Vendor-wise Reconciliation Sheet', 'List of Ineligible/Blocked credits under Sec 17(5)', 'Vendor Action Checklist for payment withholding/release'],
        commonIssues: ['Vendors filing under B2C instead of B2B', 'Typographical errors in invoice numbers causing auto-matching failures'],
        faqs: [
          { question: 'What is the deadline for claiming missed ITC for a financial year?', answer: 'Under current GST law, you can claim missed ITC up to 30th November following the end of the financial year or the date of filing the annual return, whichever is earlier.' }
        ],
        relatedSlugs: ['gst-return-filing', 'gst-notice-assistance']
      },
      {
        id: 'gst-notice-assistance',
        slug: 'gst-notice-assistance',
        title: 'GST Notice Response & Scrutiny Assistance',
        shortDescription: 'Professional legal representation and reply drafting for notices under DRC-01, DRC-01A, ASMT-10, and audit notices.',
        metaTitle: 'GST Notice Reply & DRC-01 Assistance Mumbai | Ambika Consultancy',
        metaDescription: 'Received a GST show cause notice or DRC-01B/C intimation? Accurate replies, document substantiation, and department resolution in Mumbai.',
        targetAudience: ['Taxpayers who received ASMT-10 scrutiny notices', 'Businesses with DRC-01B (GSTR-1 vs 3B difference) or DRC-01C (3B vs 2B difference)', 'Entities receiving cancellation of registration notices (REG-17)'],
        scopeOfWork: [
          'Detailed assessment of allegations and calculations in the notice.',
          'Verification of statutory provisions and relevant GST circulars/notifications.',
          'Drafting structured para-wise replies with supporting invoices, e-way bills, and bank statements.',
          'Online submission via Form DRC-06 or ASMT-11 on the GST portal.',
          'Representation before GST proper officers where personal hearing is scheduled.'
        ],
        requiredDocuments: ['Copy of GST Notice with Reference Number', 'Filed GSTR-1, 3B, and 2B for the relevant period', 'Bank statements showing vendor payments', 'Invoices, delivery challans, and transport proofs'],
        stepByStepProcess: [
          { step: '1', title: 'Scrutiny Analysis', description: 'Identify exact section, allegations, and deadline for response.' },
          { step: '2', title: 'Evidence Collation', description: 'Gather proof of goods receipt, genuine tax invoices, and bank payments.' },
          { step: '3', title: 'Formal Reply Drafting', description: 'Draft comprehensive reply citing applicable law and circulars.' },
          { step: '4', title: 'Portal Filing & Hearing', description: 'Upload response and represent the firm during proceedings.' }
        ],
        deliverables: ['Formally drafted reply with legal citations', 'Portal submission acknowledgement', 'Case status tracking until closure order is issued'],
        commonIssues: ['Delayed replies resulting in ex-parte demand orders with heavy penalties', 'Paying demands prematurely before checking if the notice is factually erroneous'],
        faqs: [
          { question: 'Can my bank account be attached for a GST notice?', answer: 'Provisional attachment of bank accounts is exercised only in extreme cases of fraud or willful evasion. For normal scrutiny and difference intimations (DRC-01B/C), filing a reasoned reply within the statutory timeline protects your business.' }
        ],
        relatedSlugs: ['gst-return-filing', 'gst-reconciliation']
      },
      {
        id: 'gst-refund-assistance',
        slug: 'gst-refund-assistance',
        title: 'GST Refund Assistance (RFD-01)',
        shortDescription: 'Seamless processing of inverted duty structure refunds, export refunds, and excess cash ledger balances.',
        metaTitle: 'GST Refund Application (RFD-01) Mumbai | Ambika Consultancy',
        metaDescription: 'Assistance for GST refunds: zero-rated export of services/goods, inverted duty structure, and excess balance in electronic cash ledger.',
        targetAudience: ['Exporters of services (IT, digital agencies, consultants)', 'Exporters of goods operating under LUT', 'Manufacturers with input tax rates higher than output tax rates (Inverted Duty Structure)'],
        scopeOfWork: [
          'Eligibility evaluation and computation of maximum refund entitlement.',
          'Preparation of Statement 1 / Statement 2 / Statement 3 as mandated by GST rules.',
          'Filing Form GST RFD-01 on the portal with Foreign Inward Remittance Certificates (FIRC) / BRCs.',
          'Responding to deficiency memos (RFD-03) and following up on provisional sanction orders (RFD-04).',
          'Ensuring direct credit of refund into client bank account via PFMS integration.'
        ],
        requiredDocuments: ['Export invoices and shipping bills / Softex forms', 'FIRC / e-BRC from bank', 'Letter of Undertaking (LUT) acknowledgement', 'Inward supply invoices showing GST paid'],
        stepByStepProcess: [
          { step: '1', title: 'Refund Audit', description: 'Verify refund formula and reconcile turnover figures.' },
          { step: '2', title: 'Documentation Indexing', description: 'Compile annexures, invoice copies, and payment confirmations.' },
          { step: '3', title: 'RFD-01 Portal Submission', description: 'Submit online application and generate ARN.' },
          { step: '4', title: 'Officer Coordination', description: 'Address officer clarifications until sanction order (RFD-06) is issued.' }
        ],
        deliverables: ['Filed RFD-01 Application ARN', 'Provisional / Final Refund Sanction Order (RFD-06)', 'Bank account credit confirmation'],
        commonIssues: ['FIRC document mismatches between invoice value and realized amount', 'Errors in turnover of zero-rated supplies calculations'],
        faqs: [
          { question: 'How long does a GST refund take to get credited?', answer: 'Statutorily, refund applications are processed within 60 days of application. For exports, a 90% provisional refund is often sanctioned within 7 days of acknowledgement.' }
        ],
        relatedSlugs: ['gst-return-filing', 'gst-registration']
      }
    ]
  },
  {
    id: 'accounting-audit',
    slug: 'accounting-bookkeeping-audit-services',
    title: 'Accounting, Bookkeeping & Audit Services',
    shortTitle: 'Accounting & Audit',
    tagline: 'Meticulous financial record-keeping, balance sheet preparation, and statutory audit readiness.',
    description: 'Accurate books of accounts are the bedrock of sound financial decisions, bank loan sanctions, and regulatory peace of mind. Ambika Consultancy provides full outsourced bookkeeping, financial statements, and audit support.',
    metaTitle: 'Accounting, Bookkeeping & Audit Services Mumbai | Ambika Consultancy',
    metaDescription: 'Professional bookkeeping, outsourced accounting, balance sheet & P&L preparation, and statutory audit support in Fort & Belapur, Mumbai.',
    iconName: 'Calculator',
    commonProblems: [
      'Disorganized vouchers and backlogged transaction records creating year-end panic.',
      'Unreconciled bank balances and mysterious suspense entries.',
      'Inability to provide bankers with projected or CMA financial statements for credit limits.',
      'Non-compliance with Accounting Standards (AS) and Schedule III requirements.',
      'Panic and penalties during tax audits due to unmaintained inventory or cash records.'
    ],
    benefits: [
      'Up-to-date accounting ledgers in Tally / cloud accounting platforms.',
      'Monthly bank reconciliations eliminating surprise overdrafts or bank charges.',
      'Bank-ready financial statements formatted for loan approvals and working capital.',
      'Seamless audit handoff minimizing audit queries.'
    ],
    processSteps: [
      { step: '01', title: 'Primary Source Collection', description: 'Collect bank statements, sales registers, purchase bills, and petty cash vouchers.' },
      { step: '02', title: 'Journalizing & Classification', description: 'Accurate debit/credit entries, expense categorization, and depreciation calculation.' },
      { step: '03', title: 'Bank & Ledger Reconciliation', description: 'Reconcile bank accounts, debtor balances, and creditor statements.' },
      { step: '04', title: 'Trial Balance & Financial Statements', description: 'Generate Balance Sheet, Profit & Loss account, and notes to accounts.' }
    ],
    requiredDocumentsGeneral: [
      'Bank Statements of all current/CC/OD accounts for the entire period',
      'Sales and Purchase bills with supporting proof',
      'Expense vouchers (Rent, electricity, salaries, professional fees)',
      'Loan account sanction letters and statement of interests',
      'Asset purchase bills and fixed asset registers'
    ],
    faqs: [
      {
        question: 'Who is required to maintain books of accounts under Section 44AA?',
        answer: 'Specified professionals (doctors, lawyers, engineers, accountants) must maintain books if gross receipts exceed ₹1.5 Lakhs. Other businesses must maintain books if income exceeds ₹2.5 Lakhs or total sales/turnover exceeds ₹25 Lakhs (with higher thresholds for individuals/HUFs).'
      },
      {
        question: 'Can you handle our accounting remotely?',
        answer: 'Yes. You can share scanned statements and vouchers periodically via email or secure cloud drive, and our team maintains your books with regular monthly reporting.'
      }
    ],
    subServices: [
      {
        id: 'bookkeeping',
        slug: 'bookkeeping',
        title: 'Bookkeeping & Outsourced Accounting',
        shortDescription: 'Dedicated day-to-day transaction recording, bank reconciliations, vendor ledgers, and monthly management reports.',
        metaTitle: 'Outsourced Bookkeeping & Accounting Services Mumbai | Ambika Consultancy',
        metaDescription: 'Cost-effective outsourced accounting in Fort Mumbai. Tally bookkeeping, monthly bank reconciliation, and expense tracking for SMEs.',
        targetAudience: ['Small business owners who need professional bookkeeping without full-time staff', 'Professional practices (consultants, doctors, designers)', 'Startups requiring structured monthly books'],
        scopeOfWork: [
          'Recording of all purchase, sales, receipt, and payment vouchers.',
          'Monthly bank reconciliation statement (BRS) for all accounts.',
          'Debtors and creditors aging analysis for cash-flow tracking.',
          'Payroll accounting and staff reimbursement processing.',
          'Monthly Profit & Loss summary report for owner review.'
        ],
        requiredDocuments: ['Monthly bank statements in PDF/Excel', 'Sales and purchase bills', 'Petty cash log and expense receipts'],
        stepByStepProcess: [
          { step: '1', title: 'Monthly Batch Intake', description: 'Receive transaction documents by the 5th of each month.' },
          { step: '2', title: 'Voucher Entry', description: 'Systematic accounting entry into accounting software.' },
          { step: '3', title: 'BRS Matching', description: 'Tie down each bank entry to appropriate invoice or receipt.' },
          { step: '4', title: 'Management MIS', description: 'Deliver monthly P&L and balance summary.' }
        ],
        deliverables: ['Updated Tally / Accounting database backup', 'Monthly Bank Reconciliation Statements', 'Debtor/Creditor aging report'],
        commonIssues: ['Mixing personal and business expenses in the same bank account', 'Missing invoices for card transactions leading to suspense entries'],
        faqs: [
          { question: 'What software do you use for accounting?', answer: 'We primarily work on Tally Prime, Busy, and modern cloud platforms, tailoring the setup to your preference.' }
        ],
        relatedSlugs: ['financial-statements', 'audit-services']
      },
      {
        id: 'financial-statements',
        slug: 'financial-statements',
        title: 'Financial Statements & Balance Sheet Preparation',
        shortDescription: 'Statutory Profit & Loss accounts, Balance Sheets, CMA reports, and provisional financials for bank loan applications.',
        metaTitle: 'Balance Sheet Preparation & Financial Statements Mumbai | Ambika Consultancy',
        metaDescription: 'Balance Sheet, P&L, and CMA report preparation for bank CC/OD loans, credit limits, and statutory filings in Mumbai.',
        targetAudience: ['Businesses applying for CC / OD bank facilities or term loans', 'Firms requiring Schedule III compliant financial statements', 'Shareholders and partners evaluating year-end performance'],
        scopeOfWork: [
          'Finalization of trial balance and year-end closing entries.',
          'Calculation of depreciation under Companies Act / Income Tax Act.',
          'Preparation of Balance Sheet and Statement of Profit & Loss.',
          'Preparation of Notes to Accounts and Significant Accounting Policies.',
          'Drafting of Credit Monitoring Arrangement (CMA) data for bank submissions.'
        ],
        requiredDocuments: ['Final trial balance / accounting ledgers', 'Inventory / stock valuation summary at financial year end', 'Loan sanction letters and interest certificates', 'Fixed asset register'],
        stepByStepProcess: [
          { step: '1', title: 'Trial Balance Audit', description: 'Review all ledger accounts and eliminate suspense items.' },
          { step: '2', title: 'Closing Entries', description: 'Account for accrued income, prepaid expenses, and depreciation.' },
          { step: '3', title: 'Draft Financials', description: 'Format statements compliant with regulatory guidelines.' },
          { step: '4', title: 'Final Certification', description: 'Final sign-off with partners/directors.' }
        ],
        deliverables: ['Audited / Unaudited Financial Statements Pack', 'Notes to Accounts & Accounting Policies', 'CMA Data Report for bankers (if requested)'],
        commonIssues: ['Unsubstantiated stock figures causing gross profit distortion', 'Non-depreciation of newly purchased capital assets'],
        faqs: [
          { question: 'Can you help us prepare a balance sheet for a new business loan?', answer: 'Yes, we prepare past financial statements, provisional figures, and projected CMA reports tailored to commercial bank requirements in India.' }
        ],
        relatedSlugs: ['bookkeeping', 'audit-services']
      },
      {
        id: 'audit-services',
        slug: 'audit-services',
        title: 'Audit Assistance & Statutory Compliance',
        shortDescription: 'Guidance and preparation for Tax Audit under Section 44AB, GST Audit, and independent statutory audit requirements.',
        metaTitle: 'Tax Audit & Statutory Audit Assistance Mumbai | Ambika Consultancy',
        metaDescription: 'Assistance for Tax Audit under Section 44AB, Form 3CA/3CB, Form 3CD preparation, and internal compliance review in Fort Mumbai.',
        targetAudience: ['Businesses whose turnover exceeds ₹1 Crore (or ₹10 Crores with digital transactions)', 'Professionals with gross receipts exceeding ₹50 Lakhs (or ₹75 Lakhs with 95% digital receipts)', 'Entities claiming profits lower than presumptive limits under 44AD/44ADA'],
        scopeOfWork: [
          'Pre-audit scrutiny of books of accounts and ledger balances.',
          'Compilation of Form 3CD schedules: Section 40A(3) cash payments, 43B statutory dues, Section 269SS/T loans.',
          'Verification of TDS deduction and timely deposit across all expense ledgers.',
          'Coordination with Statutory Auditors to resolve technical audit observations.',
          'Filing of Tax Audit Report on the Income Tax Department portal.'
        ],
        requiredDocuments: ['Complete finalized books of accounts', 'Bank statements and physical stock inventory sheets', 'Statutory registers (GST, TDS, PF, ESIC challans)', 'Agreements for loans, leases, and major contracts'],
        stepByStepProcess: [
          { step: '1', title: 'Audit Scope & Readiness', description: 'Review trial balance against Section 44AB clauses.' },
          { step: '2', title: 'Voucher Sampling & Verification', description: 'Examine high-value transactions, TDS compliance, and cash entries.' },
          { step: '3', title: 'Form 3CD Drafting', description: 'Populate all statutory particulars and notes.' },
          { step: '4', title: 'Portal Submission', description: 'Upload Tax Audit Report and secure client digital acceptance.' }
        ],
        deliverables: ['Form 3CA / 3CB and Form 3CD Audit Report', 'Management Representation Letter and audit notes', 'Portal filing acknowledgement receipt'],
        commonIssues: ['Cash payments in excess of ₹10,000 attracting disallowance under Section 40A(3)', 'Failure to deposit TDS before the ITR filing due date under Section 40(a)(ia)'],
        faqs: [
          { question: 'What is the due date for filing Tax Audit reports?', answer: 'The statutory due date for filing the Tax Audit Report (Form 3CA/3CB and Form 3CD) is September 30 following the relevant financial year.' }
        ],
        relatedSlugs: ['bookkeeping', 'financial-statements']
      }
    ]
  },
  {
    id: 'tds-tcs',
    slug: 'tds-tcs-return-filing-mumbai',
    title: 'TDS & TCS Advisory & Return Filing',
    shortTitle: 'TDS & TCS',
    tagline: 'End-to-end withholding tax compliance, TAN registration, quarterly returns, and correction statements.',
    description: 'Ensure accurate tax deduction at source, timely challan payments, and quarterly Form 24Q, 26Q, and 27Q filings. Ambika Consultancy prevents TRACES defaults, Section 234E late fees, and Form 16 issuance delays.',
    metaTitle: 'TDS Return Filing & TRACES Correction Mumbai | Ambika Consultancy',
    metaDescription: 'Quarterly TDS return filing (Form 24Q, 26Q, 27Q), TAN registration, challan correction, and TRACES default resolution in Fort, Mumbai.',
    iconName: 'Percent',
    commonProblems: [
      'Late fee of ₹200 per day under Section 234E for delayed quarterly return submission.',
      'Short deduction or short payment demands on TRACES portal due to incorrect PAN.',
      'Mismatched challan numbers or BSR codes leading to unconsumed challan errors.',
      'Employees and vendors unable to claim credit due to delayed Form 16 / 16A generation.',
      'TDS on purchase of immovable property under Section 194-IA (Form 26QB) confusion.'
    ],
    benefits: [
      'Prior-to-payment verification of vendor PAN to avoid 20% mandatory deduction under Sec 206AA.',
      'Quarterly TRACES reconciliation before filing to eliminate default notices.',
      'Timely bulk generation of Form 16 (Part A & B) and Form 16A certificates.',
      'Fast-track challan correction via TRACES online correction facility.'
    ],
    processSteps: [
      { step: '01', title: 'Deduction Ledger Review', description: 'Review monthly deduction registers for salary, contractor, rent, and professional fees.' },
      { step: '02', title: 'Challan ITNS-281 Verification', description: 'Verify payment of deducted tax on or before the 7th of subsequent month.' },
      { step: '03', title: 'Preparation of FVU File', description: 'Generate e-TDS return file using NSDL Return Preparation Utility (RPU).' },
      { step: '04', title: 'Validation & Submission', description: 'Validate with File Validation Utility (FVU) and upload via TIN-FC or E-filing portal.' }
    ],
    requiredDocumentsGeneral: [
      'Tax Deduction Account Number (TAN) details',
      'Salary disbursement sheets with employee PAN and investment declarations',
      'Vendor payment registers with Section codes (194C, 194J, 194I, 194H, 194Q)',
      'Paid ITNS-281 Challan receipts with BSR code, Challan Date, and Tender No'
    ],
    faqs: [
      {
        question: 'What are the due dates for filing quarterly TDS returns?',
        answer: 'The quarterly due dates are: Q1 (April–June) due July 31; Q2 (July–Sept) due October 31; Q3 (Oct–Dec) due January 31; Q4 (Jan–March) due May 31.'
      },
      {
        question: 'What is the rate of interest for delayed deduction vs delayed payment of TDS?',
        answer: 'Under Section 201(1A), delayed deduction attracts interest at 1% per month or part of a month. Delayed deposit of deducted tax attracts interest at 1.5% per month or part of a month.'
      }
    ],
    subServices: [
      {
        id: 'tds-return-filing',
        slug: 'tds-return-filing',
        title: 'Quarterly TDS Return Filing',
        shortDescription: 'Form 24Q (Salary), Form 26Q (Non-salary payments), Form 27Q (Non-residents), and Form 27EQ (TCS).',
        metaTitle: 'Quarterly TDS Return Filing in Mumbai (24Q & 26Q) | Ambika Consultancy',
        metaDescription: 'Accurate filing of Form 24Q and 26Q TDS returns. Zero late fee guarantee with timely FVU generation and TRACES reconciliation in Mumbai.',
        targetAudience: ['Employers paying salaries to staff', 'Businesses paying rent, contractor fees, commission, or professional fees', 'Companies required to deduct TDS under Section 194Q or collect TCS under 206C'],
        scopeOfWork: [
          'Verification of TDS rates under Section 194C (1%/2%), 194J (2%/10%), 194I (10%), and 194H (5%).',
          'Challan matching with CSI file downloaded from TIN-NSDL.',
          'Preparation of quarterly return file in NSDL-prescribed FVU format.',
          'Submission at TIN Facilitation Centre or online through E-filing portal.',
          'Downloading and delivering Form 16 / Form 16A certificates from TRACES.'
        ],
        requiredDocuments: ['TAN allotment letter', 'List of deductees with PAN, amount paid, and deduction date', 'Paid BSR challans (ITNS-281)'],
        stepByStepProcess: [
          { step: '1', title: 'Data Ingestion', description: 'Extract deduction ledgers and verify PAN validity.' },
          { step: '2', title: 'CSI File Match', description: 'Download latest Challan Status Inquiry file.' },
          { step: '3', title: 'FVU Generation', description: 'Run validation utility to ensure zero structural errors.' },
          { step: '4', title: 'Filing & Certificate Download', description: 'File return and download digitally signed Form 16/16A.' }
        ],
        deliverables: ['Official TDS Return Filing Acknowledgement (Provisional Receipt)', 'TRACES Form 16 / Form 16A certificates', 'Deductee-wise credit statement'],
        commonIssues: ['Invalid PANs treated as PAN NOT PRESENT resulting in short deduction defaults', 'Challan over-consumption across quarters'],
        faqs: [
          { question: 'What is the penalty for delayed filing of TDS return?', answer: 'Section 234E imposes a mandatory late fee of ₹200 for every day the return remains delayed, capped at the total amount of TDS deducted in that quarter.' }
        ],
        relatedSlugs: ['tds-correction', 'tan-registration']
      },
      {
        id: 'tds-correction',
        slug: 'tds-correction',
        title: 'TDS Correction Statements & TRACES Defaults',
        shortDescription: 'Resolve TRACES demand notices, fix PAN errors, correct challan allocations, and add unmapped deductee rows.',
        metaTitle: 'TDS Correction Statement & TRACES Default Resolution Mumbai | Ambika Consultancy',
        metaDescription: 'Fix TRACES short deduction notices, incorrect PAN entries, and unconsumed challans through official TDS correction filing in Fort Mumbai.',
        targetAudience: ['Entities with outstanding demands visible on TRACES portal', 'Deductors whose vendors complain that TDS is not showing in Form 26AS', 'Businesses needing PAN corrections (C3 correction) or challan corrections (C1 correction)'],
        scopeOfWork: [
          'Download of TRACES Conso File and Justification Report.',
          'Analysis of specific default reasons: Short Payment, Short Deduction, Late Filing Fee, or Interest.',
          'Preparation of Correction Statement (Type C1, C2, C3, C5, or C9).',
          'Online correction processing on TRACES without requiring paper submissions.',
          'Verification of demand cancellation and status update on portal.'
        ],
        requiredDocuments: ['TRACES login credentials', 'Original TDS return token number and provisional receipt', 'Correct PAN proof of the concerned deductee', 'Additional challan copy if short payment was cleared'],
        stepByStepProcess: [
          { step: '1', title: 'Justification Report Review', description: 'Download and decipher error codes from TRACES portal.' },
          { step: '2', title: 'Conso File Request', description: 'Request consolidated file for the relevant financial year & quarter.' },
          { step: '3', title: 'Correction Execution', description: 'Update invalid PAN or re-map challan balances.' },
          { step: '4', title: 'Validation & Submission', description: 'Validate correction file and submit for department reprocessing.' }
        ],
        deliverables: ['Correction Statement Acknowledgement Receipt', 'Zero-default revised Justification Report', 'Updated Form 16A reflection for deductee'],
        commonIssues: ['Entering incorrect token number of the previously filed return', 'Attempting offline corrections when TRACES online correction is sufficient'],
        faqs: [
          { question: 'How long does TRACES take to process a correction?', answer: 'Online corrections on TRACES are typically processed within 24 to 72 hours, after which the revised credit reflects in the deductee’s Form 26AS.' }
        ],
        relatedSlugs: ['tds-return-filing', 'tan-registration']
      },
      {
        id: 'tan-registration',
        slug: 'tan-registration',
        title: 'New TAN Registration & Allotment',
        shortDescription: 'Fast allotment of Tax Deduction and Collection Account Number (Form 49B) for businesses, firms, and trusts.',
        metaTitle: 'TAN Registration (Form 49B) in Mumbai | Ambika Consultancy',
        metaDescription: 'Get your Tax Deduction Account Number (TAN) issued within 48-72 hours. Online application (Form 49B) and TRACES registration in Mumbai.',
        targetAudience: ['Newly formed proprietorships, LLPs, and companies entering commercial transactions', 'Individuals buying property from non-residents requiring TAN for Section 195 deduction', 'Entities hiring employees where salary TDS is required'],
        scopeOfWork: [
          'Preparation and online submission of Form 49B on TIN-NSDL portal.',
          'Selection of correct deductor category and AO (Assessing Officer) code.',
          'Submission of signed acknowledgement with jurisdictional office if required.',
          'Tracking allotment and obtaining 10-digit alphanumeric TAN.',
          'Initial registration of TAN on the TRACES portal.'
        ],
        requiredDocuments: ['PAN Card of applicant / business entity', 'Proof of registered business address', 'Identity and address proof of authorized signatory'],
        stepByStepProcess: [
          { step: '1', title: 'Application Drafting', description: 'Fill Form 49B with correct deductor classification and AO code.' },
          { step: '2', title: 'Online Payment & Submission', description: 'Submit fee and generate 14-digit acknowledgement number.' },
          { step: '3', title: 'NSDL Processing', description: 'Track status with Income Tax Department allotment database.' },
          { step: '4', title: 'TAN Handover & Setup', description: 'Deliver TAN letter and setup TRACES / e-filing login.' }
        ],
        deliverables: ['Official TAN Allotment Letter', 'TRACES Portal Login Credentials', 'TDS Compliance Guidelines Sheet'],
        commonIssues: ['Selecting incorrect AO code causing processing delays', 'Failure to quote TAN on ITNS-281 challans after allotment'],
        faqs: [
          { question: 'Is TAN mandatory if I already have a PAN?', answer: 'Yes. Every entity deducting or collecting tax at source must obtain a TAN. Quoting PAN instead of TAN on TDS returns or challans attracts a penalty of ₹10,000 under Section 272BB.' }
        ],
        relatedSlugs: ['tds-return-filing', 'tds-correction']
      }
    ]
  },
  {
    id: 'company-registration-compliance',
    slug: 'company-registration-mumbai',
    title: 'Company Registration & Corporate Compliance',
    shortTitle: 'Corporate Compliance',
    tagline: 'Smooth entity incorporation, MCA/ROC secretarial filings, and annual director compliances.',
    description: 'Turn your business vision into a legally recognized corporate entity. Ambika Consultancy manages Private Limited Company incorporation, LLP formation, Annual ROC filing (AOC-4 & MGT-7), DIR-3 KYC, and statutory resolutions.',
    metaTitle: 'Company Incorporation & ROC Compliance Mumbai | Ambika Consultancy',
    metaDescription: 'Private Limited Company registration, LLP formation, annual ROC filing (AOC-4, MGT-7), DIR-3 KYC, and corporate compliance services in Fort, Mumbai.',
    iconName: 'ShieldCheck',
    commonProblems: [
      'Heavy late fees of ₹100 per day for delayed filing of ROC forms AOC-4 and MGT-7.',
      'Disqualification of Directors under Section 164(2) due to non-filing of consecutive returns.',
      'Deactivation of DIN due to non-completion of annual DIR-3 KYC by September 30.',
      'Rejection of proposed company names by the Central Registration Centre (CRC).',
      'Non-compliance with commencement of business declaration (Form INC-20A).'
    ],
    benefits: [
      'End-to-end management from SPICe+ name reservation to final Certificate of Incorporation.',
      'Integrated PAN, TAN, EPFO, ESIC, and Profession Tax registration in a single workflow.',
      'Proactive compliance calendar preventing staggering MCA penalties.',
      'Assistance with statutory registers and Board resolutions.'
    ],
    processSteps: [
      { step: '01', title: 'Structure & Name Advisory', description: 'Select between Pvt Ltd vs LLP and run comprehensive ROC trademark and name checks.' },
      { step: '02', title: 'Digital Signatures (DSC)', description: 'Procure Class-3 Digital Signature Certificates for all directors/partners.' },
      { step: '03', title: 'SPICe+ / FiLLiP Submission', description: 'Draft Memorandum of Association (MOA), Articles of Association (AOA), and file incorporation.' },
      { step: '04', title: 'Incorporation & Post-Setup', description: 'Receive Certificate of Incorporation, PAN, TAN, and file INC-20A within 180 days.' }
    ],
    requiredDocumentsGeneral: [
      'PAN Card of all Directors / Designated Partners',
      'Aadhaar Card / Passport / Voter ID of all Directors',
      'Bank Statement / Utility Bill (less than 2 months old) as Director Address Proof',
      'Passport size photographs of Directors',
      'Registered Office Proof (Electricity Bill + Rent Agreement + Owner NOC)'
    ],
    faqs: [
      {
        question: 'What is the minimum requirement to register a Private Limited Company?',
        answer: 'You need a minimum of 2 directors (at least one Indian resident), 2 shareholders (directors can be shareholders), a registered office address in India, and no minimum paid-up capital requirement.'
      },
      {
        question: 'What is the difference between Private Limited Company and LLP?',
        answer: 'A Private Limited Company is ideal for businesses seeking equity investment, venture capital, and fast scale, but entails higher annual compliance requirements. An LLP is ideal for professional firms and family businesses desiring limited liability with lower secretarial compliance and no dividend distribution tax.'
      }
    ],
    subServices: [
      {
        id: 'company-incorporation',
        slug: 'company-incorporation',
        title: 'Private Limited Company Incorporation',
        shortDescription: 'SPICe+ registration, name approval (RUN), MOA & AOA drafting, Certificate of Incorporation, PAN & TAN.',
        metaTitle: 'Private Limited Company Registration Mumbai | Ambika Consultancy',
        metaDescription: 'Incorporate your Private Limited Company in Mumbai. SPICe+ filing, name approval, MOA/AOA, Certificate of Incorporation with Ambika Consultancy.',
        targetAudience: ['Entrepreneurs launching scalable businesses', 'Founders raising venture capital or angel funding', 'Partnerships converting to corporate structure'],
        scopeOfWork: [
          'Name availability search on MCA portal and trademark registry.',
          'Procurement of Class-3 Digital Signature Certificates (DSC) with encryption.',
          'Drafting of e-MOA (INC-33) and e-AOA (INC-34) with custom business objects.',
          'Submission of SPICe+ Part A and Part B with AGILE-PRO-S.',
          'Issuance of Certificate of Incorporation with CIN, PAN, TAN, and EPFO/ESIC.'
        ],
        requiredDocuments: ['PAN & Aadhaar of all promoters', 'Bank statements showing current address', 'Proof of registered office (utility bill & NOC)', 'Specimen signature cards'],
        stepByStepProcess: [
          { step: '1', title: 'Name Approval', description: 'Submit unique name options matching MCA naming guidelines.' },
          { step: '2', title: 'DSC Issuance', description: 'Complete video verification for Class-3 Digital Signatures.' },
          { step: '3', title: 'SPICe+ Filing', description: 'Submit integrated incorporation forms on MCA V3 portal.' },
          { step: '4', title: 'COI & Bank Opening', description: 'Receive Certificate of Incorporation and open corporate bank account.' }
        ],
        deliverables: ['Certificate of Incorporation (COI) with Corporate Identity Number (CIN)', 'Permanent Account Number (PAN) and TAN of Company', 'Digitally stamped MOA and AOA', 'Class-3 DSC tokens for directors'],
        commonIssues: ['Proposing names identical or phonetically similar to existing trademarks', 'Submitting utility bills older than 2 months'],
        faqs: [
          { question: 'How long does company registration take in Mumbai?', answer: 'Once all KYC documents and name approval are in order, incorporation typically takes 7 to 10 working days on the MCA V3 portal.' }
        ],
        relatedSlugs: ['llp-registration', 'roc-annual-filings']
      },
      {
        id: 'llp-registration',
        slug: 'llp-registration',
        title: 'Limited Liability Partnership (LLP) Registration',
        shortDescription: 'FiLLiP registration, DPIN allotment, customized LLP Agreement drafting, and Form 3 filing.',
        metaTitle: 'LLP Registration Services in Mumbai | Ambika Consultancy',
        metaDescription: 'Form a Limited Liability Partnership (LLP) in Mumbai. FiLLiP filing, custom LLP Agreement drafting, and Form 3 submission with Ambika Consultancy.',
        targetAudience: ['Service professionals (consultants, designers, software agencies)', 'Partners wanting corporate legal identity without heavy audit obligations', 'Small manufacturing or trading partnerships'],
        scopeOfWork: [
          'Name reservation via RUN-LLP on MCA portal.',
          'Class-3 DSC issuance for Designated Partners.',
          'Preparation and filing of FiLLiP (Form for incorporation of LLP).',
          'Drafting comprehensive, customized LLP Agreement tailored to partners’ capital contribution and profit ratios.',
          'Stamping and filing Form 3 on the MCA portal within mandatory 30 days.'
        ],
        requiredDocuments: ['PAN and Aadhaar of all partners', 'Address proofs (voter ID / passport / bank statement)', 'Office premises proof with NOC', 'Capital contribution summary'],
        stepByStepProcess: [
          { step: '1', title: 'Name Reservation', description: 'Submit proposed LLP name on MCA V3 portal.' },
          { step: '2', title: 'FiLLiP Incorporation', description: 'Upload incorporation form and secure Certificate of Incorporation.' },
          { step: '3', title: 'LLP Agreement Drafting', description: 'Draft agreement specifying profit shares, rights, and duties.' },
          { step: '4', title: 'Form 3 Filing', description: 'Execute on non-judicial stamp paper and file with Registrar within 30 days.' }
        ],
        deliverables: ['Certificate of Incorporation issued by Registrar of Companies', 'Allotted Designated Partner Identification Numbers (DPIN)', 'Filed and stamped LLP Agreement (Form 3 copy)'],
        commonIssues: ['Failing to file Form 3 within 30 days attracting ₹100 per day penalty', 'Ambiguous clauses in profit-sharing leading to partner disputes'],
        faqs: [
          { question: 'Is audit mandatory for all LLPs?', answer: 'Audit is mandatory for an LLP only if its turnover exceeds ₹40 Lakhs or its capital contribution exceeds ₹25 Lakhs in any financial year.' }
        ],
        relatedSlugs: ['company-incorporation', 'roc-annual-filings']
      },
      {
        id: 'roc-annual-filings',
        slug: 'roc-annual-filings',
        title: 'ROC Annual Filings & Secretarial Compliance',
        shortDescription: 'Filing of Form AOC-4 (Financials), MGT-7/7A (Annual Return), DIR-3 KYC, and AGM board resolutions.',
        metaTitle: 'Annual ROC Compliance & AOC-4 / MGT-7 Filing Mumbai | Ambika Consultancy',
        metaDescription: 'Annual ROC compliance for Pvt Ltd and LLPs. AOC-4, MGT-7, Form 11, Form 8, DIR-3 KYC, and statutory secretarial support in Fort Mumbai.',
        targetAudience: ['All active Private Limited Companies registered with ROC Mumbai', 'LLPs required to file Form 11 and Form 8', 'Directors needing annual DIR-3 KYC reactivation'],
        scopeOfWork: [
          'Preparation of Director’s Report, Notice of AGM, and Board Meeting minutes.',
          'Filing of Form AOC-4 (Balance Sheet & Profit & Loss) with ROC within 30 days of AGM.',
          'Filing of Form MGT-7 / MGT-7A (Annual Return) with ROC within 60 days of AGM.',
          'Filing of LLP Form 11 (Annual Return) by May 30 and Form 8 (Statement of Accounts) by October 30.',
          'Annual DIR-3 KYC verification for all company directors before September 30.'
        ],
        requiredDocuments: ['Audited Financial Statements with Auditor’s Report', 'Shareholder list with transfer details during the year', 'Director details for KYC (PAN, Aadhaar, verified mobile/email)', 'Bank statements and MCA login credentials'],
        stepByStepProcess: [
          { step: '1', title: 'Secretarial Audit', description: 'Review company register and past year filings on MCA portal.' },
          { step: '2', title: 'AGM Resolution Pack', description: 'Draft notice, board resolutions, and director reports.' },
          { step: '3', title: 'Form Compilation', description: 'Populate AOC-4 and MGT-7 with audited financial attachments.' },
          { step: '4', title: 'DSC Signing & Upload', description: 'Sign with Director & Professional DSC and upload to MCA V3.' }
        ],
        deliverables: ['Filed AOC-4 and MGT-7 Service Request Number (SRN) Challans', 'Annual compliance pack with AGM minutes and Director’s report', 'DIR-3 KYC confirmation receipts for all directors'],
        commonIssues: ['Missing the September 30 DIR-3 KYC deadline triggering ₹5,000 late fee per director', 'Delayed AOC-4 filing accruing ₹100 per day continuing penalty'],
        faqs: [
          { question: 'What happens if a company does not file ROC returns?', answer: 'Continuous non-filing leads to ₹100/day late fees, director disqualification for 5 years, company strike-off by ROC, and freezing of corporate bank accounts.' }
        ],
        relatedSlugs: ['company-incorporation', 'llp-registration']
      }
    ]
  },
  {
    id: 'business-registrations',
    slug: 'business-registration-licensing-mumbai',
    title: 'Business Registrations, Licensing & Advisory',
    shortTitle: 'Business Registrations',
    tagline: 'MSME/Udyam certificates, Shop & Establishment Gumasta, PAN/TAN, and financial advisory.',
    description: 'Ensure your business operates with full legal authority across municipal and statutory bodies. Ambika Consultancy facilitates MSME Udyam registration, Mumbai Shop Act (Gumasta), partnership deed drafting, and LIC financial security.',
    metaTitle: 'Business Registrations & Gumasta License Mumbai | Ambika Consultancy',
    metaDescription: 'MSME Udyam registration, Shop & Establishment (Gumasta) license Mumbai, Partnership setup, and financial advisory by Ambika Consultancy.',
    iconName: 'BadgeCheck',
    commonProblems: [
      'Operating without mandatory BMC Shop & Establishment registration risking local authority fines.',
      'Missing out on priority banking lending, lower loan interest, and government tender exemptions due to lack of Udyam registration.',
      'Unregistered or poorly drafted partnership deeds leading to severe legal disputes and banking roadblocks.',
      'Lack of keyman insurance and financial risk mitigation for business promoters.'
    ],
    benefits: [
      'Comprehensive single-window registration support in Mumbai and Navi Mumbai.',
      'Fast-track MSME Udyam certificate issuance to unlock government benefits.',
      'Professional partnership agreement drafting protecting all partners.',
      'Dual expertise in corporate compliance and financial life protection (LIC).'
    ],
    processSteps: [
      { step: '01', title: 'Entity Profiling', description: 'Assess business nature, location, employee count, and licensing prerequisites.' },
      { step: '02', title: 'Documentation & Drafting', description: 'Prepare affidavits, NOCs, consent letters, and deed agreements.' },
      { step: '03', title: 'Statutory Portal Filing', description: 'Submit applications on Aaple Sarkar / Udyam portal with verified KYC.' },
      { step: '04', title: 'Certificate Delivery', description: 'Deliver permanent registration certificates and compliance guidance.' }
    ],
    requiredDocumentsGeneral: [
      'PAN Card & Aadhaar Card of Proprietor / Partners',
      'Proof of Business Address (Electricity bill / Rent agreement / Property tax receipt)',
      'Photographs of establishment with signboard in local language (for Gumasta)',
      'Bank statement or cancelled cheque of business account'
    ],
    faqs: [
      {
        question: 'Is Udyam registration beneficial for small service providers?',
        answer: 'Yes. Udyam registration entitles your business to lower interest rates on bank loans, protection against delayed payments from buyers under the MSMED Act, and exemption from earnest money deposits in government tenders.'
      },
      {
        question: 'Do I need a Shop and Establishment license in Mumbai if I work from home?',
        answer: 'Under the Maharashtra Shops and Establishments Act, any commercial establishment employing persons or conducting business requires registration or intimation based on employee strength.'
      }
    ],
    subServices: []
  }
];
