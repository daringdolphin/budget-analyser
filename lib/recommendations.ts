export interface Recommendation {
  opportunityTitle: string
  budgetReference: string
  actions: string[]
  relevance: string
}

// Sample recommendations data
const recommendationsData: Record<string, Recommendation[]> = {
  Teacher: [
    {
      opportunityTitle: "Enhanced Professional Development Opportunities",
      budgetReference: "Paragraph 42a & 56b",
      actions: [
        "Apply for the expanded Teacher Growth Initiative",
        "Access funding for advanced certifications",
        "Participate in specialized training programs"
      ],
      relevance: "As a teacher, you can access increased funding for professional development to enhance your teaching skills and career advancement opportunities."
    },
    {
      opportunityTitle: "Digital Classroom Enhancement Grant",
      budgetReference: "Paragraph 78c & 103d",
      actions: [
        "Submit application through your school administration",
        "Request classroom technology upgrades",
        "Apply for digital teaching resources"
      ],
      relevance: "This initiative provides resources to integrate more technology into your teaching methods, enhancing student engagement and learning outcomes."
    },
    {
      opportunityTitle: "Education Research Innovation Fund",
      budgetReference: "Paragraph 91a & 112b",
      actions: [
        "Apply for research grants",
        "Develop innovative teaching methodologies",
        "Participate in classroom practices"
      ],
      relevance: "You can secure funding to conduct research on educational innovations, potentially influencing curriculum development nationwide."
    },
    {
      opportunityTitle: "Teacher Housing Subsidy Enhancement",
      budgetReference: "Paragraph 134b & 156c",
      actions: [
        "Check eligibility",
        "Apply for increased housing subsidies",
        "Access the Ministry of Education portal"
      ],
      relevance: "Enhanced housing benefits help reduce your living costs in Singapore's expensive housing market."
    },
    {
      opportunityTitle: "Work-Life Harmony Grant",
      budgetReference: "Paragraph 167a & 189d",
      actions: [
        "Access resources for flexible work arrangements",
        "Participate in wellness programs"
      ],
      relevance: "This initiative supports better work-life balance through flexible scheduling options and wellness resources."
    },
    {
      opportunityTitle: "Community Engagement Incentive",
      budgetReference: "Paragraph 201c & 223a",
      actions: [
        "Apply for funding",
        "Develop community-based learning projects",
        "Connect classroom learning with real-world applications"
      ],
      relevance: "You can create meaningful learning experiences that extend beyond the classroom while receiving additional compensation for your efforts."
    },
  ],
  "Software Engineer": [
    {
      opportunityTitle: "Digital Economy Skills Enhancement Credit",
      budgetReference: "Paragraph 37b & 62c",
      actions: [
        "Claim tax credits for advanced technology certifications",
        "Apply for professional development in emerging technologies",
        "Submit claims for eligible training expenses"
      ],
      relevance: "As a software engineer, you can offset the costs of staying current with rapidly evolving technologies and enhance your market value."
    },
    {
      opportunityTitle: "Tech Startup Founder Support Program",
      budgetReference: "Paragraph 83a & 97d",
      actions: [
        "Apply for seed funding",
        "Access mentorship",
        "Participate in regulatory sandboxes"
      ],
      relevance: "This initiative provides resources if you're interested in launching your own tech venture while reducing the financial risks."
    },
    {
      opportunityTitle: "AI and Quantum Computing Research Grants",
      budgetReference: "Paragraph 112c & 128b",
      actions: [
        "Submit proposals for research funding",
        "Work on cutting-edge technology projects"
      ],
      relevance: "You can secure resources to work on cutting-edge technology projects that might otherwise be difficult to pursue in commercial settings."
    },
    {
      opportunityTitle: "Remote Work Infrastructure Support",
      budgetReference: "Paragraph 143a & 159c",
      actions: [
        "Claim allowances for home office equipment",
        "Access high-speed internet connections"
      ],
      relevance: "This helps offset the costs of maintaining an effective remote work setup, which is increasingly common in software development."
    },
    {
      opportunityTitle: "Open Source Contribution Incentive",
      budgetReference: "Paragraph 172b & 186a",
      actions: [
        "Register your open source contributions",
        "Receive recognition and financial incentives"
      ],
      relevance: "Your contributions to open source projects can now be recognized financially while enhancing Singapore's technology ecosystem."
    },
    {
      opportunityTitle: "Digital Security Excellence Program",
      budgetReference: "Paragraph 204c & 217b",
      actions: [
        "Apply for specialized cybersecurity training",
        "Participate in certification programs with subsidized rates"
      ],
      relevance: "Enhancing your security expertise makes you more valuable in an increasingly security-conscious technology landscape."
    },
  ],
  "Sales Executive": [
    {
      opportunityTitle: "Sales Digitalization Transformation Grant",
      budgetReference: "Paragraph 45c & 67a",
      actions: [
        "Apply for funding",
        "Adopt advanced CRM systems",
        "Implement sales analytics tools"
      ],
      relevance: "As a sales executive, you can leverage better tools to track customer interactions and improve conversion rates."
    },
    {
      opportunityTitle: "Global Market Access Program",
      budgetReference: "Paragraph 89b & 104c",
      actions: [
        "Register for subsidized international trade missions",
        "Participate in virtual sales exhibitions"
      ],
      relevance: "This initiative helps you connect with international clients and expand your sales territory beyond Singapore."
    },
    {
      opportunityTitle: "Sales Excellence Certification Pathway",
      budgetReference: "Paragraph 118a & 132d",
      actions: [
        "Enroll in subsidized professional sales certification programs",
        "Participate in Workforce Singapore"
      ],
      relevance: "Enhanced credentials can help you advance your sales career and command higher compensation."
    },
    {
      opportunityTitle: "Commission Tax Relief Enhancement",
      budgetReference: "Paragraph 147b & 163a",
      actions: [
        "Utilize the expanded tax deductions",
        "Claim more business development expenses"
      ],
      relevance: "This allows you to reduce your taxable income by claiming more business development expenses."
    },
    {
      opportunityTitle: "Customer Experience Innovation Fund",
      budgetReference: "Paragraph 178c & 192b",
      actions: [
        "Apply for grants",
        "Implement innovative customer engagement strategies",
        "Test new approaches to customer engagement"
      ],
      relevance: "You can secure resources to test new approaches to customer engagement that could improve your sales performance."
    },
    {
      opportunityTitle: "Industry Transformation - Sales Track",
      budgetReference: "Paragraph 209a & 224c",
      actions: [
        "Participate in the industry transformation program",
        "Adapt your sales approach"
      ],
      relevance: "This program helps you adapt your sales approach to changing customer behaviors in an increasingly digital marketplace."
    },
  ],
  "Business Development Manager": [
    {
      opportunityTitle: "Strategic Partnership Development Grant",
      budgetReference: "Paragraph 41b & 63c",
      actions: [
        "Apply for funding",
        "Develop strategic business partnerships",
        "Forge valuable business relationships"
      ],
      relevance: "As a business development manager, you can access resources to expand your company's reach."
    },
    {
      opportunityTitle: "Market Expansion Incentive Program",
      budgetReference: "Paragraph 82c & 98a",
      actions: [
        "Utilize enhanced tax incentives",
        "Claim grants for expanding into new markets"
      ],
      relevance: "This initiative supports your efforts to identify and develop business opportunities in high-growth regional markets."
    },
    {
      opportunityTitle: "Business Innovation and Transformation Support",
      budgetReference: "Paragraph 117a & 133b",
      actions: [
        "Apply for co-funding",
        "Implement innovative business models",
        "Lead transformative projects"
      ],
      relevance: "You can secure significant resources to lead transformative projects that position your company for future growth."
    },
    {
      opportunityTitle: "Executive Leadership Development Program",
      budgetReference: "Paragraph 149c & 164b",
      actions: [
        "Enroll in subsidized executive education programs",
        "Participate at leading business schools and institutions"
      ],
      relevance: "This helps you develop advanced leadership skills necessary for higher management positions."
    },
    {
      opportunityTitle: "Sustainability Business Development Fund",
      budgetReference: "Paragraph 176a & 193c",
      actions: [
        "Access grants",
        "Develop business opportunities in sustainable products, services, and practices"
      ],
      relevance: "You can lead your company's efforts in the growing sustainability sector while accessing dedicated funding."
    },
    {
      opportunityTitle: "Cross-Border E-Commerce Facilitation",
      budgetReference: "Paragraph 207b & 221a",
      actions: [
        "Utilize simplified regulatory processes",
        "Access financial incentives"
      ],
      relevance: "This initiative makes it easier and more financially viable to develop online sales channels in international markets."
    },
  ],
  Hawker: [
    {
      opportunityTitle: "Hawker Digitalization Support Package",
      budgetReference: "Paragraph 23a & 47b",
      actions: [
        "Apply for subsidies",
        "Adopt digital payment systems",
        "Participate in the NEA Hawker Go Digital program"
      ],
      relevance: "As a hawker, you can modernize your operations with minimal cost, potentially increasing your customer base and efficiency."
    },
    {
      opportunityTitle: "Promote and Facilitate CDC and SG60 Voucher Usage",
      budgetReference: "Paragraph 23a & 147a i ii",
      actions: [
        "Register to accept CDC Vouchers",
        "Participate in the simple onboarding process"
      ],
      relevance: "This allows you to tap into additional customer spending power through government-issued vouchers."
    },
    {
      opportunityTitle: "Hawker Centre Productivity Grant",
      budgetReference: "Paragraph 86b & 102c",
      actions: [
        "Apply for co-funding",
        "Purchase productivity-enhancing equipment",
        "Like automated cookers, food processors, and smart inventory systems"
      ],
      relevance: "This helps you reduce labor intensity and increase your operational efficiency."
    },
    {
      opportunityTitle: "Hawker Succession Program",
      budgetReference: "Paragraph 119c & 134a",
      actions: [
        "Participate in the apprenticeship support program",
        "If you're looking to pass on your business or recipes to the next generation"
      ],
      relevance: "This initiative provides financial support during the training period for your successor, ensuring your culinary legacy continues."
    },
    {
      opportunityTitle: "Energy Efficiency Upgrade Subsidy",
      budgetReference: "Paragraph 152a & 168c",
      actions: [
        "Apply for subsidies",
        "Upgrade to energy-efficient equipment",
        "Participate in the NEA Green Hawker Program"
      ],
      relevance: "This helps you reduce your utility bills while contributing to environmental sustainability."
    },
    {
      opportunityTitle: "Hawker Skills Future Credit Top-up",
      budgetReference: "Paragraph 183b & 197a",
      actions: [
        "Utilize the additional SkillsFuture credits",
        "Specifically allocated for food preparation and business management courses"
      ],
      relevance: "You can enhance your culinary and business skills to attract more customers and operate more efficiently."
    },
  ],
  Student: [
    {
      opportunityTitle: "Enhanced Education Support Scheme",
      budgetReference: "Paragraph 29b & 51c",
      actions: [
        "Apply for increased subsidies",
        "Tuition fees and educational materials"
      ],
      relevance: "As a student, you can reduce your educational expenses and focus more on your studies."
    },
    {
      opportunityTitle: "Digital Learning Resource Access",
      budgetReference: "Paragraph 74a & 99b",
      actions: [
        "Register for free access",
        "Premium digital learning platforms and resources"
      ],
      relevance: "This gives you access to high-quality learning materials that might otherwise be expensive or inaccessible."
    },
    {
      opportunityTitle: "Student Entrepreneurship Seed Fund",
      budgetReference: "Paragraph 113b & 129c",
      actions: [
        "Apply for micro-grants",
        "Develop innovative projects or startup ideas"
      ],
      relevance: "You can test entrepreneurial ideas with minimal financial risk while developing valuable skills."
    },
    {
      opportunityTitle: "Overseas Exposure Program Expansion",
      budgetReference: "Paragraph 144b & 162a",
      actions: [
        "Apply for enhanced subsidies",
        "Overseas exchange programs, internships, and study trips"
      ],
      relevance: "This makes international exposure more accessible, enhancing your global perspective and employability."
    },
    {
      opportunityTitle: "Student Mental Wellness Support",
      budgetReference: "Paragraph 177c & 191b",
      actions: [
        "Access expanded mental health resources",
        "Including counseling services and wellness programs"
      ],
      relevance: "This initiative helps you maintain good mental health during academically challenging periods."
    },
    {
      opportunityTitle: "Industry Immersion Program",
      budgetReference: "Paragraph 208c & 222b",
      actions: [
        "Register for structured industry attachment programs",
        "Leading companies in your field of study"
      ],
      relevance: "You can gain valuable work experience and industry connections before graduation, enhancing your employability."
    },
  ],
  Accountant: [
    {
      opportunityTitle: "Professional Accounting Qualification Support",
      budgetReference: "Paragraph 36a & 59c",
      actions: [
        "Claim enhanced subsidies for professional accounting qualifications",
        "Like CPA, ACCA, or CA"
      ],
      relevance: "As an accountant, you can reduce the cost of obtaining or maintaining professional certifications that enhance your career prospects."
    },
    {
      opportunityTitle: "Accounting Technology Adoption Grant",
      budgetReference: "Paragraph 81a & 96b",
      actions: [
        "Apply for co-funding",
        "Implement advanced accounting software",
        "Automation tools and data analytics capabilities"
      ],
      relevance: "This helps you modernize your accounting practices and develop valuable technical skills in emerging areas."
    },
    {
      opportunityTitle: "Financial Forensics Specialization Track",
      budgetReference: "Paragraph 116b & 131a",
      actions: [
        "Enroll in subsidized training programs",
        "Financial forensics, fraud detection, and investigation skills"
      ],
      relevance: "You can develop specialized skills in a high-demand area of accounting that typically commands premium compensation."
    },
    {
      opportunityTitle: "ESG Reporting Capability Development",
      budgetReference: "Paragraph 148a & 165c",
      actions: [
        "Access training and resources",
        "Environmental, social, and governance (ESG) reporting and assurance"
      ],
      relevance: "This helps you develop expertise in the rapidly growing field of sustainability reporting and compliance."
    },
    {
      opportunityTitle: "Small Practice Digitalization Package",
      budgetReference: "Paragraph 175b & 194a",
      actions: [
        "Apply for comprehensive support",
        "Digitalize small accounting practices"
      ],
      relevance: "If you run or work in a small accounting firm, this helps you compete more effectively with larger firms through digital capabilities."
    },
    {
      opportunityTitle: "International Accounting Standards Adaptation Support",
      budgetReference: "Paragraph 206a & 219c",
      actions: [
        "Access resources and training",
        "Adapting to evolving international accounting standards and regulatory requirements"
      ],
      relevance: "This helps you stay current with complex regulatory changes that impact your work and clients."
    },
  ],
  "Retail Sales Associate": [
    {
      opportunityTitle: "Retail Skills Upgrade Credit",
      budgetReference: "Paragraph 39c & 61a",
      actions: [
        "Utilize enhanced SkillsFuture credits",
        "Specifically for retail skills training"
      ],
      relevance: "As a retail sales associate, you can develop specialized skills that make you more valuable to employers and enhance your career progression."
    },
    {
      opportunityTitle: "Retail Digitalization Assistance",
      budgetReference: "Paragraph 84b & 101a",
      actions: [
        "Participate in training programs",
        "Digital retail tools, e-commerce platforms, and omnichannel customer engagement"
      ],
      relevance: "This helps you develop relevant skills for the evolving retail landscape where digital and physical retail are increasingly integrated."
    },
    {
      opportunityTitle: "Retail Career Progression Framework",
      budgetReference: "Paragraph 115c & 130b",
      actions: [
        "Enroll in the structured career development program",
        "Clear pathways from associate to management positions"
      ],
      relevance: "This initiative provides a clear roadmap for career advancement in the retail sector with corresponding skill development."
    },
    {
      opportunityTitle: "Flexible Work Arrangement Incentive",
      budgetReference: "Paragraph 146c & 161b",
      actions: [
        "Work with your employer",
        "Implement flexible scheduling options supported by government incentives"
      ],
      relevance: "This helps create more accommodating work schedules that can improve your work-life balance in the retail sector."
    },
    {
      opportunityTitle: "Retail Service Excellence Recognition",
      budgetReference: "Paragraph 179a & 195c",
      actions: [
        "Participate in the national retail service excellence recognition program",
        "Receive monetary rewards for outstanding performance"
      ],
      relevance: "You can receive public recognition and financial rewards for delivering exceptional customer service."
    },
    {
      opportunityTitle: "Retail Worker Support Package",
      budgetReference: "Paragraph 205c & 218b",
      actions: [
        "Access comprehensive support",
        "Including transport subsidies, meal allowances, and healthcare benefits"
      ],
      relevance: "This helps reduce your daily expenses and provides additional benefits that enhance your overall compensation package."
    },
  ],
  // Default recommendations for other professions
  default: [
    {
      opportunityTitle: "SkillsFuture Credit Top-up",
      budgetReference: "Paragraph 35a & 58b",
      actions: [
        "Check your SkillsFuture account for additional credits",
        "Browse eligible training programs",
        "Apply credits to relevant skills training"
      ],
      relevance: "You can use these credits to develop new skills or enhance existing ones to remain competitive in your field."
    },
    {
      opportunityTitle: "Workfare Income Supplement Enhancement",
      budgetReference: "Paragraph 72b & 94c",
      actions: [
        "Check eligibility",
        "Ensure your employment details are updated with CPF",
        "Receive the enhanced supplements automatically"
      ],
      relevance: "If eligible, you'll receive additional income supplements that boost your take-home pay and CPF savings."
    },
    {
      opportunityTitle: "GST Voucher Scheme Expansion",
      budgetReference: "Paragraph 109a & 127b",
      actions: [
        "Ensure your household details are updated with the government",
        "Receive the enhanced GST vouchers automatically"
      ],
      relevance: "This helps offset the impact of GST on your household expenses, particularly for essential items."
    },
    {
      opportunityTitle: "CDC Vouchers Distribution",
      budgetReference: "Paragraph 142c & 160a",
      actions: [
        "Check your eligibility",
        "Claim your CDC vouchers through the official government portal"
      ],
      relevance: "These vouchers can be used at participating heartland merchants and supermarkets, reducing your daily expenses."
    },
    {
      opportunityTitle: "MediSave Top-up",
      budgetReference: "Paragraph 174c & 190b",
      actions: [
        "No action required",
        "Eligible individuals will receive the top-up automatically in their MediSave accounts"
      ],
      relevance: "This strengthens your healthcare financing, providing additional resources for medical expenses."
    },
    {
      opportunityTitle: "Public Transport Fare Concession",
      budgetReference: "Paragraph 203b & 216a",
      actions: [
        "Apply for the expanded public transport concession",
        "Through TransitLink if you fall under the newly eligible categories"
      ],
      relevance: "This reduces your daily commuting costs, particularly if you rely heavily on public transportation."
    },
  ],
}

export function getRecommendations(profession: string): Recommendation[] {
  // Return profession-specific recommendations if available, otherwise return default
  return recommendationsData[profession] || recommendationsData["default"]
}

