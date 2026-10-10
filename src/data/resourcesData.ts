export interface ResourceArticle {
  slug: string;
  category: 'Income Tax' | 'GST' | 'TDS & TCS' | 'Accounting & Audit' | 'Corporate Compliance';
  title: string;
  summary: string;
  publishedDate: string;
  lastUpdated: string;
  readingTime: string;
  author: string;
  contentMarkdown: string;
  keyTakeaways: string[];
  tags: string[];
}

export const resourcesData: ResourceArticle[] = [
  {
    slug: 'new-vs-old-tax-regime-guide',
    category: 'Income Tax',
    title: 'New vs Old Tax Regime: Practical Comparative Analysis for Taxpayers',
    summary: 'A clear walkthrough of slab rates, standard deductions, Section 80C/80D implications, and how to determine which tax regime minimizes your actual cash outflow.',
    publishedDate: 'January 15, 2025',
    lastUpdated: 'February 1, 2025',
    readingTime: '5 min read',
    author: 'Dinesh H. Maurya',
    tags: ['Income Tax', 'Tax Planning', 'ITR Filing', 'Section 80C'],
    keyTakeaways: [
      'The New Tax Regime is the default regime under Section 115BAC, offering lower slab rates but disallowing chapter VI-A deductions.',
      'Salaried taxpayers retain the flexibility to switch between New and Old regimes annually at the time of filing their ITR.',
      'Taxpayers with business income can opt out of the new regime only once in their lifetime using Form 10-IEA.',
      'If total deductions (HRA + 80C + 80D + home loan interest) exceed ₹3.75 Lakhs to ₹4 Lakhs, the Old Regime frequently proves advantageous.'
    ],
    contentMarkdown: `
### Understanding the Core Difference
The Indian Income Tax Act offers two parallel taxation structures: the **Old Tax Regime** with higher tax slabs but generous exemptions (80C, 80D, HRA, LTA, Home Loan Interest), and the **New Tax Regime (Section 115BAC)** with simplified, lower slab rates and a higher rebate under Section 87A.

### Revised Slab Rates under New Tax Regime
For individual taxpayers, the revised slab structure offers:
- Up to ₹3,00,000: **NIL**
- ₹3,00,001 to ₹7,00,000: **5%**
- ₹7,00,001 to ₹10,00,000: **10%**
- ₹10,00,001 to ₹12,00,000: **15%**
- ₹12,00,001 to ₹15,00,000: **20%**
- Above ₹15,00,000: **30%**

Furthermore, the standard deduction for salaried individuals under the New Regime provides effective relief, meaning taxable income up to ₹7.75 Lakhs incurs zero net tax due to the Section 87A rebate.

### When Does the Old Regime Win?
If you have significant legitimate deductions, such as:
1. **Section 80C**: Life insurance, PPF, ELSS, EPF (Up to ₹1,50,000)
2. **Section 80D**: Mediclaim health insurance for self and senior citizen parents (Up to ₹75,000 or ₹1,00,000)
3. **Section 24(b)**: Home loan interest for self-occupied property (Up to ₹2,00,000)
4. **HRA / LTA**: House rent allowance exemption based on actual rent paid

When these cumulative deductions cross the break-even threshold (typically ₹3.75 Lakhs to ₹4.25 Lakhs depending on gross income), the Old Regime delivers a lower total tax liability.

### Action Plan Before Filing
Before submitting your ITR, compile your actual rent receipts, mediclaim premiums, and interest certificates. At Ambika Consultancy, we prepare a comparative tax computation sheet under both regimes side by side so you can select the optimal route with complete clarity.
    `
  },
  {
    slug: 'gst-2b-reconciliation-preventing-itc-loss',
    category: 'GST',
    title: 'GSTR-2B Reconciliation: Preventing Input Tax Credit Loss & DRC-01C Notices',
    summary: 'Why monthly invoice-level matching between internal purchase registers and auto-generated GSTR-2B is essential to protect working capital and maintain compliance.',
    publishedDate: 'November 10, 2024',
    lastUpdated: 'January 20, 2025',
    readingTime: '6 min read',
    author: 'Dinesh H. Maurya',
    tags: ['GST Compliance', 'ITC', 'GSTR-2B', 'DRC-01C'],
    keyTakeaways: [
      'Availing ITC in GSTR-3B that is not reflected in GSTR-2B triggers automatic Form DRC-01C intimations.',
      'GSTR-2B is a static statement generated on the 14th of every month, freezing available credit for that period.',
      'Withholding supplier payments until invoices appear in GSTR-2B protects your business from cash flow reversals.',
      'Missed ITC can only be claimed up to November 30 of the following financial year.'
    ],
    contentMarkdown: `
### The New Reality of Input Tax Credit
Gone are the days when provisional or estimated Input Tax Credit (ITC) could be claimed on self-assessment basis in GSTR-3B. Under Rule 36(4) and Section 16(2)(aa) of the CGST Act, a registered business is strictly entitled to ITC only if the supplier has filed their GSTR-1 and the invoice appears in the buyer's auto-populated **GSTR-2B**.

### Understanding GSTR-2B vs GSTR-2A
Unlike GSTR-2A, which changes dynamically whenever a supplier files an old return, **GSTR-2B is a static statement** generated once every month on the 14th. It clearly demarcates:
- **ITC Available**: Active supplies where all conditions are met.
- **ITC Not Available**: Ineligible items, interstate supplies where POS does not match, or suppliers registered under composition scheme.

### Automatic Intimations in Form DRC-01C
If the ITC claimed in Table 4A of your GSTR-3B exceeds the ITC available in GSTR-2B by a predefined percentage or value, the GST portal automatically issues **Form DRC-01C**.
The taxpayer has only **7 days** to either:
1. Pay the differential tax along with interest through Form DRC-03, or
2. Submit a detailed explanation justifying the variance.

Failure to respond within 7 days results in automatic blocking of subsequent GSTR-1 generation.

### Best Practice Workflow
1. Download GSTR-2B Excel/JSON on the 14th of every month.
2. Reconcile against your internal purchase ledger down to invoice number, date, taxable value, and GST rate.
3. Generate a non-compliant vendor list and follow up prior to releasing payment.
4. Claim only validated credit in GSTR-3B filed on the 20th.
    `
  },
  {
    slug: 'capital-gains-tax-property-shares-mumbai',
    category: 'Income Tax',
    title: 'Capital Gains on Real Estate & Equities: Tax Rates, Indexation & Exemptions',
    summary: 'A detailed guide for property sellers and stock investors navigating Section 54, Section 54EC capital gain bonds, and recent budget amendments.',
    publishedDate: 'December 5, 2024',
    lastUpdated: 'February 10, 2025',
    readingTime: '7 min read',
    author: 'Dinesh H. Maurya',
    tags: ['Capital Gains', 'Property Sale', 'Section 54', '54EC Bonds'],
    keyTakeaways: [
      'Holding period for immovable property must exceed 24 months to qualify as Long-Term Capital Asset.',
      'Section 54 allows complete or partial capital gain exemption when re-investing in a residential house in India.',
      'Section 54EC allows investment of up to ₹50 Lakhs in specified infrastructure bonds (REC, PFC, NHAI) within 6 months.',
      'Failure to utilize capital gains before the ITR filing due date requires deposit in the Capital Gains Account Scheme (CGAS).'
    ],
    contentMarkdown: `
### Overview of Capital Gains Taxation
In Mumbai's vibrant real estate and equity markets, transactions in residential flats, commercial properties, and listed stocks frequently generate substantial capital gains that require precise calculation and timely reinvestment planning.

### Immovable Property: Long-Term vs Short-Term
- **Holding Period**: An immovable property (residential apartment, land, or commercial unit) held for **more than 24 months** is classified as a Long-Term Capital Asset (LTCA).
- **Taxation**: Long-term capital gains on property are taxed at statutory rates under current amendments, with indexation availability determined by specific transition rules.

### Tax Saving Exemption Strategies
1. **Section 54 (Residential House to Residential House)**:
   - Applicable to Individuals and HUFs selling a long-term residential property.
   - You must invest the capital gain amount into purchasing another residential property (1 year before or 2 years after the transfer date) or constructing a house within 3 years.
   - Capped at ₹10 Crores under recent Finance Act provisions.

2. **Section 54EC (Capital Gain Bonds)**:
   - Invest capital gains into notified bonds issued by **NHAI, REC, or PFC**.
   - Maximum investment limit: **₹50 Lakhs** per financial year.
   - Lock-in period: 5 years with fixed coupon interest.
   - **Crucial Rule**: Investment must be completed within **6 months** from the date of transfer of the capital asset.

3. **Capital Gains Account Scheme (CGAS)**:
   - If the investment in a new property cannot be made before the due date of filing the Income Tax Return (July 31 / October 31), the unutilized amount must be deposited in a designated CGAS account with an authorized bank to claim Section 54 exemption in the current assessment year.

### Mandatory Buyer TDS under Section 194-IA
Remember that when selling property in Mumbai valued at ₹50 Lakhs or more, the buyer is legally obligated to deduct **1% TDS** on the entire sale consideration and deposit it via Form 26QB. Ensure this credit reflects accurately in your Form 26AS.
    `
  },
  {
    slug: 'annual-roc-compliance-checklist-pvt-ltd',
    category: 'Corporate Compliance',
    title: 'Annual ROC Compliance Checklist for Private Limited Companies in Mumbai',
    summary: 'A definitive guide to statutory secretarial filings, AGM requirements, AOC-4, MGT-7, and avoiding director disqualification under the Companies Act 2013.',
    publishedDate: 'October 25, 2024',
    lastUpdated: 'January 5, 2025',
    readingTime: '5 min read',
    author: 'Dinesh H. Maurya',
    tags: ['MCA Compliance', 'AOC-4', 'MGT-7', 'DIR-3 KYC', 'Pvt Ltd'],
    keyTakeaways: [
      'Every active company must hold an Annual General Meeting (AGM) on or before September 30 each year.',
      'Form AOC-4 (Financial Statements) must be filed within 30 days of the AGM.',
      'Form MGT-7 / 7A (Annual Return) must be filed within 60 days of the AGM.',
      'DIR-3 KYC is mandatory for every DIN holder annually before September 30 to prevent DIN deactivation.'
    ],
    contentMarkdown: `
### Why Corporate Compliance Cannot Be Ignored
Operating a Private Limited Company provides limited liability and institutional credibility, but it entails non-negotiable statutory obligations governed by the Ministry of Corporate Affairs (MCA) and Registrar of Companies (ROC).

### Key Annual Filings Calendar
1. **Form AOC-4 (Financial Statements)**:
   - Contains the Balance Sheet, Profit & Loss Account, Auditor's Report, Director's Report, and Notes to Accounts.
   - **Due Date**: Within 30 days of AGM (typically October 29).
   - **Penalty**: Severe penalty of **₹100 per day** of continuing default with no upper cap.

2. **Form MGT-7 / MGT-7A (Annual Return)**:
   - Discloses shareholding pattern, indebtedness, board meetings held, and directors' remuneration.
   - **Due Date**: Within 60 days of AGM (typically November 28).

3. **DIR-3 KYC for All Directors**:
   - Mandatory annual verification of director contact details and OTP authentication.
   - **Due Date**: On or before **September 30**.
   - **Late Fee**: Mandatory ₹5,000 per director if missed, causing DIN status to become 'Deactivated due to non-filing of DIR-3 KYC'.

4. **Commencement of Business (INC-20A)**:
   - For newly incorporated companies: Must be filed within 180 days of incorporation confirming receipt of subscription money in the corporate bank account.

### How Ambika Consultancy Supports
We manage the entire secretarial lifecycle—from drafting board resolutions, notice of AGM, and Director's Reports to uploading digitally signed forms on the MCA V3 portal.
    `
  },
  {
    slug: 'tds-rates-and-compliance-rules-for-businesses',
    category: 'TDS & TCS',
    title: 'TDS Rates, Thresholds & Monthly Deposit Rules: A Practical Business Guide',
    summary: 'A reference guide for business owners on common TDS sections: 194C, 194J, 194I, 194H, payment deadlines, and avoiding Section 40(a)(ia) disallowance.',
    publishedDate: 'November 28, 2024',
    lastUpdated: 'February 12, 2025',
    readingTime: '6 min read',
    author: 'Dinesh H. Maurya',
    tags: ['TDS', 'TRACES', 'Section 194C', 'Section 194J', 'Tax Compliance'],
    keyTakeaways: [
      'TDS deducted in any month must be deposited on or before the 7th of the following month (April 30 for March deductions).',
      'Non-deduction or non-deposit of TDS attracts a 30% expenditure disallowance under Section 40(a)(ia).',
      'Section 194J distinguishes between technical services (2%) and professional fees (10%).',
      'Form 16 and 16A certificates must be issued within 15 days from the due date of quarterly returns.'
    ],
    contentMarkdown: `
### Crucial TDS Sections for Businesses
Every enterprise making commercial payments in India must strictly adhere to the withholding tax regime under Chapter XVII-B of the Income Tax Act.

### Key Sections Summary:
- **Section 194C (Contractors & Sub-contractors)**:
  - 1% for payments to individuals/HUFs; 2% for other entities.
  - Threshold: Single payment exceeding ₹30,000 or aggregate annual payments exceeding ₹1,00,000.
- **Section 194J (Fees for Professional / Technical Services)**:
  - 2% for Technical Services, Call Center operations, or Royalty (cinematographic films).
  - 10% for Professional Services (legal, accounting, architectural, medical).
  - Threshold: ₹30,000 per financial year.
- **Section 194I (Rent)**:
  - 2% for plant, machinery, or equipment.
  - 10% for land, building, or furniture.
  - Threshold: ₹2,40,000 per financial year.
- **Section 194H (Commission & Brokerage)**:
  - 5% rate for payments exceeding ₹15,000 per financial year.

### The Cost of Non-Compliance
1. **Expenditure Disallowance (Section 40(a)(ia))**: 30% of the expense on which TDS was not deducted or not deposited will be added back to your taxable business profits.
2. **Interest Penalty (Section 201(1A))**: 1% per month for delay in deduction; 1.5% per month for delay in deposit.
3. **Late Fee (Section 234E)**: Mandatory ₹200/day for delayed quarterly return filing.
    `
  }
];
