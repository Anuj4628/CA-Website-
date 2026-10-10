export interface CompliancePackage {
  id: string;
  badge: string;
  title: string;
  targetBusiness: string;
  idealFor: string;
  frequency: string;
  inclusions: string[];
  limitations: string[];
  deliverables: string[];
}

export const compliancePackages: CompliancePackage[] = [
  {
    id: 'proprietorship-starter',
    badge: 'Sole Proprietors',
    title: 'Proprietorship Compliance Retainer',
    targetBusiness: 'Sole Proprietorships & Independent Consultants',
    idealFor: 'Small traders, retail shop owners, digital consultants, and freelance service providers operating under a trade name.',
    frequency: 'Monthly / Quarterly Support',
    inclusions: [
      'Monthly / Quarterly GSTR-1 and GSTR-3B return filing',
      'Continuous GSTR-2B Input Tax Credit reconciliation',
      'Quarterly advance tax computation and challan generation',
      'Annual Income Tax Return filing (ITR-3 or ITR-4 presumptive)',
      'Basic bank statement entry and profit & loss summary',
      'Year-round telephone advisory for business tax queries'
    ],
    limitations: [
      'Excludes statutory audit under Section 44AB if turnover exceeds statutory limits',
      'Department notice representation billed separately based on complexity'
    ],
    deliverables: [
      'Monthly GST acknowledgements & ITC statement',
      'Annual ITR-V acknowledgement and computation sheet',
      'Advance tax payment schedule'
    ]
  },
  {
    id: 'partnership-llp',
    badge: 'Firms & LLPs',
    title: 'Partnership & LLP Annual Compliance',
    targetBusiness: 'Partnership Firms & Limited Liability Partnerships (LLP)',
    idealFor: 'Professional firms, trading agencies, small manufacturing units, and multi-partner enterprises.',
    frequency: 'Monthly Retainer with Annual Secretarial Filing',
    inclusions: [
      'Monthly GSTR-1 and GSTR-3B filings with multi-vendor 2B reconciliation',
      'Quarterly TDS deduction check, challan payment, and 26Q return filing',
      'Annual LLP Form 11 (Annual Return) filing with MCA',
      'Annual LLP Form 8 (Statement of Account & Solvency) filing',
      'Firm Income Tax Return filing (ITR-5)',
      'Partners capital account interest & remuneration computation under Section 40(b)'
    ],
    limitations: [
      'Excludes statutory audit fee if turnover exceeds ₹40 Lakhs or capital contribution exceeds ₹25 Lakhs',
      'Government MCA portal statutory filing fees payable at actuals'
    ],
    deliverables: [
      'Monthly GST & Quarterly TDS filing tokens',
      'MCA SRN receipts for Form 11 and Form 8',
      'Form 16A certificates for vendors and landlords'
    ]
  },
  {
    id: 'private-limited-corporate',
    badge: 'Private Limited Companies',
    title: 'Corporate Secretarial & Tax Retainer',
    targetBusiness: 'Private Limited Companies (Startups & SMEs)',
    idealFor: 'Incorporated companies requiring combined ROC secretarial, GST, TDS, and financial statement assistance.',
    frequency: 'Dedicated Monthly Retainer & Annual Closing',
    inclusions: [
      'Monthly GST filings, E-way bill guidance, and 2B ITC mismatch tracking',
      'Quarterly TDS return filing (Form 24Q Salary & Form 26Q Non-salary)',
      'Annual ROC filing: Form AOC-4 (Financial Statements) & Form MGT-7/7A (Annual Return)',
      'Annual Director KYC (DIR-3 KYC) for up to 2 directors',
      'Drafting of Annual General Meeting (AGM) notice, Director’s report, and board minutes',
      'Company Income Tax Return filing (ITR-6)'
    ],
    limitations: [
      'Statutory auditor’s independent audit report is conducted by practicing CA; advisory support included',
      'MCA portal late fees or penalty fees (if any) payable at actuals'
    ],
    deliverables: [
      'Annual Secretarial Compliance dossier (AGM resolutions + Director Report)',
      'AOC-4 and MGT-7 MCA challans with SRN tracking',
      'Quarterly TDS certificates (Form 16 & 16A)',
      'Corporate ITR acknowledgement'
    ]
  },
  {
    id: 'salaried-hni-investor',
    badge: 'Individual Taxpayers',
    title: 'HNI & Multi-Source Tax Package',
    targetBusiness: 'Salaried Executives, NRIs, and Capital Market Investors',
    idealFor: 'Individuals with salary income, multiple house properties, capital gains from shares/mutual funds/crypto, and foreign remittances.',
    frequency: 'Annual Retainer with Advance Tax Checks',
    inclusions: [
      'Exhaustive AIS / TIS reconciliation against broker statements and bank books',
      'Capital gains computation for domestic equities, mutual funds, and real estate',
      'Advisory on reinvestment in residential property or Capital Gain Bonds (54EC)',
      'Advance tax quarterly installments calculation to prevent Section 234B/C interest',
      'Filing of comprehensive ITR-2 or ITR-3 return with e-verification assistance',
      'Verification of Form 26AS TDS credits and refund tracking'
    ],
    limitations: [
      'Excludes scrutiny assessment appearances before appellate authorities if selected for faceless review'
    ],
    deliverables: [
      'Detailed Schedule-wise computation of total income',
      'Capital Gains summary report across all asset classes',
      'Official ITR-V acknowledgement receipt'
    ]
  }
];
