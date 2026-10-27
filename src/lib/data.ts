import {
  Building2, TrendingUp, Shield, Users, Clock, Award, Calculator, BarChart3, Search,
  Receipt, Target, ShieldCheck, Zap, MapPin, UserCircle2, Briefcase, Clapperboard,
  ClipboardList, Compass, FileSearch, Rocket, HeartHandshake, Lightbulb, UserCheck,
  Settings, SearchCheck, BookOpen, Brain, Medal, MessageCircle,
} from 'lucide-react'

import { ADDRESS, EMAIL } from './theme'

import hiteshPhoto from '@/assets/team/hitesh-kumar-arora.jpg'
import dineshPhoto from '@/assets/team/dinesh-singhal.png'
import jyotsanaPhoto from '@/assets/team/jyotsana-arora.png'

import testimonialArjunKapoor from '@/assets/testimonials/arjun-kapoor.png'
import testimonialSunitaReddy from '@/assets/testimonials/sunita-reddy.png'
import testimonialVikramSingh from '@/assets/testimonials/vikram-singh.png'
import testimonialMeeraJoshi from '@/assets/testimonials/meera-joshi.png'

import blogNewTaxRegime from '@/assets/blog/new-tax-regime.png'
import blogGstItcReconciliation from '@/assets/blog/gst-itc-reconciliation.png'
import blogComplianceCalendar from '@/assets/blog/compliance-calendar.png'
import blogTdsOnRent from '@/assets/blog/tds-on-rent.png'
import blogGst2Reform from '@/assets/blog/gst-2-0-rate-reform.png'

export const services = [
  { icon: Receipt, title: 'Taxation & GST', desc: 'Comprehensive tax planning, compliance & advisory services.' },
  { icon: Calculator, title: 'Accounting & Bookkeeping', desc: 'Accurate bookkeeping and accounting to keep your business financially strong.' },
  { icon: BarChart3, title: 'Audit & Assurance', desc: 'Statutory audit, internal audit & assurance services with integrity and transparency.' },
  { icon: Building2, title: 'Registration Services', desc: 'Company incorporation, GST, MSME, IEC, LEI & other business registrations.' },
  { icon: Shield, title: 'Insurance Solutions', desc: 'Life, health, motor, business & other insurance solutions for a secure future.' },
  { icon: TrendingUp, title: 'Mutual Funds & Wealth Planning', desc: 'Smart investment solutions for wealth creation & financial freedom.' },
]

export const whyUs = [
  { icon: Target, title: 'Client Focused', desc: 'We understand your business and deliver solutions tailored to your goals.' },
  { icon: ShieldCheck, title: 'Integrity & Transparency', desc: 'We believe in ethical practices and complete transparency in every engagement.' },
  { icon: Users, title: 'Experienced Professionals', desc: 'Our team of qualified experts ensures the highest quality of service.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'We value your time and ensure timely delivery of all commitments.' },
  { icon: Zap, title: 'Technology Driven', desc: 'We use advanced technology and systems for accuracy and efficiency.' },
  { icon: Award, title: 'One Stop Solution', desc: 'All your financial, tax, compliance & advisory needs under one roof.' },
]

// Each founder gets the same rich "founder profile" template (photo, quals, experience,
// software, core expertise, values bar). Add another object here to add another founder —
// no new component needed.
export const founders = [
  {
    key: 'hitesh', type: 'founder' as const,
    name: 'Hitesh Kumar Arora', tag: 'Advocate', title: 'Founder & Managing Partner',
    photo: hiteshPhoto,
    servicesLine: 'Taxation  |  Accounting  |  GST  |  Audit  |  Business Advisory\nInsurance  |  Mutual Funds',
    academicQuals: ['LL.B (Bachelor of Laws)', 'MBA (Finance)', 'M.Com (Master of Commerce)', 'B.Com (Bachelor of Commerce)'],
    experienceYears: 21,
    experienceDesc: 'Over 21 years of extensive experience in Taxation, Accounting, Compliance, Audit, Advisory and Financial Management.',
    software: ['SAP', 'Tally ERP', 'QuickBooks', 'ZOHO', 'Oracle NetSuite', 'Busy', 'Computax', 'Spectrum'],
    expertise: [
      { icon: Receipt, title: 'Taxation & Compliance' },
      { icon: SearchCheck, title: 'Audit & Assurance' },
      { icon: BookOpen, title: 'Accounting & Bookkeeping' },
      { icon: Briefcase, title: 'Business Advisory' },
      { icon: Calculator, title: 'GST & Indirect Tax' },
      { icon: TrendingUp, title: 'Financial Planning' },
    ],
    values: [
      { icon: ShieldCheck, title: 'Integrity', desc: 'We operate with honesty and transparency.' },
      { icon: Award, title: 'Professionalism', desc: 'We follow highest standards of ethics and quality.' },
      { icon: Users, title: 'Client Focused', desc: 'Your success is our priority.' },
      { icon: Lightbulb, title: 'Innovation', desc: 'We adopt technology for better solutions.' },
      { icon: Target, title: 'Excellence', desc: 'We deliver accurate results, every time.' },
    ],
  },
]

// Each team member gets the same "team member profile" template (photo, qualification,
// certification, experience, expertise, about box, key strengths, quote bar). Add another
// object here to add another team member — no new component needed.
export const members = [
  {
    key: 'dinesh', type: 'member' as const,
    name: 'Dinesh Singhal', designation: 'CA', title: 'Senior Chartered Accountant',
    photo: dineshPhoto,
    qualification: 'Chartered Accountant (CA)', certification: 'ICAI Member',
    experienceLabel: '16+ Years of', experienceSub: 'Professional Experience',
    bio: 'Experienced finance professional with a strong track record in accounting, taxation, audit and business advisory, delivering value-driven solutions to help businesses grow and comply.',
    about: 'CA Dinesh Singhal is a results-oriented professional with over 16 years of extensive experience in financial reporting, taxation, audit and advisory across Manufacturing and Services sectors. He is committed to delivering high-quality financial solutions, ensuring compliance and driving business excellence.',
    quote: 'My goal is to provide accurate, timely and reliable financial solutions that create long-term value for clients.',
    expertise: ['Manufacturing', 'Services', 'Financial Reporting', 'Taxation', 'Audit', 'Business Advisory'],
    strengths: [
      { icon: Brain, title: 'Analytical Thinking' },
      { icon: Lightbulb, title: 'Problem Solving' },
      { icon: Search, title: 'Attention to Detail' },
      { icon: Clock, title: 'Timely Delivery' },
      { icon: Users, title: 'Client-Centric Approach' },
      { icon: ShieldCheck, title: 'Integrity & Confidentiality' },
    ],
    values: [
      { icon: ShieldCheck, title: 'Trust', desc: 'We build lasting relationships' },
      { icon: Users, title: 'Commitment', desc: 'We are dedicated to client success' },
      { icon: Medal, title: 'Excellence', desc: 'We deliver quality in everything we do' },
      { icon: HeartHandshake, title: 'Support', desc: 'We are always here to help you' },
    ],
  },
  {
    key: 'jyotsana', type: 'member' as const,
    name: 'Jyotsana Arora', designation: 'Admin & Insurance Advisor', title: 'Admin & Insurance Advisor',
    photo: jyotsanaPhoto,
    qualification: 'M.Com, MBA in HR', certification: 'NISM Certified',
    experienceLabel: '5+ Years', experienceSub: 'in Administration & Insurance Advisory',
    bio: 'Dedicated professional with expertise in administration management and insurance advisory, committed to client satisfaction and organizational excellence.',
    about: 'Jyotsana Arora plays a vital role in managing administrative operations efficiently and providing expert guidance in insurance solutions. With a strong academic background and industry certification, she brings professionalism, attention to detail, and a client-centric approach to every responsibility.',
    quote: 'My goal is to deliver the best solutions in administration and insurance advisory with integrity, efficiency and care.',
    expertise: ['Administration Management', 'Insurance Advisory', 'Client Relationship Management', 'Policy Consultation', 'Renewals & Claims Support'],
    strengths: [
      { icon: ClipboardList, title: 'Strong Organizational Skills' },
      { icon: Lightbulb, title: 'Problem Solving' },
      { icon: MessageCircle, title: 'Effective Communication' },
      { icon: Clock, title: 'Time Management' },
      { icon: Users, title: 'Client-Focused Approach' },
      { icon: ShieldCheck, title: 'Trust & Confidentiality' },
    ],
    values: [
      { icon: ShieldCheck, title: 'Trust', desc: 'Building lasting relationships' },
      { icon: Users, title: 'Commitment', desc: 'Dedicated to client success' },
      { icon: Medal, title: 'Excellence', desc: 'Delivering quality in everything' },
      { icon: HeartHandshake, title: 'Support', desc: 'Always available to help clients' },
    ],
  },
]

export type Founder = typeof founders[number]
export type Member = typeof members[number]
export type TeamProfile = Founder | Member

export const teamProfiles: TeamProfile[] = [...founders, ...members]

export const industries = [
  {
    icon: BarChart3, title: 'Traders',
    img: 'photo-1611162617474-5b21e879e113',
    bullets: ['Tax Planning From Day One', 'Income Tax & GST Compliance', 'Bookkeeping & Profit Tracking', 'Capital Gains & TDS Support'],
  },
  {
    icon: UserCircle2, title: 'Individuals',
    img: 'photo-1573496359142-b8d87734a5a2',
    bullets: ['ITR Filing & Tax Planning', 'Investment & Insurance Advisory', 'Financial Planning', 'Compliance & Documentation'],
  },
  {
    icon: Briefcase, title: 'Corporates',
    img: 'photo-1486406146926-c627a92ad1ab',
    bullets: ['Corporate Taxation', 'Accounting & Bookkeeping', 'GST & TDS Compliance', 'Audit & Financial Reporting'],
  },
  {
    icon: Settings, title: 'Manufacturing',
    img: 'photo-1581091226825-a6a2a5aee158',
    bullets: ['CMA Data & Costing', 'Inventory & Stock Management', 'GST & Excise Compliance', 'Payroll & Statutory Compliance'],
  },
  {
    icon: Users, title: 'Services',
    img: 'photo-1522071820081-009f0129c71c',
    bullets: ['Accounting & Bookkeeping', 'TDS & GST Returns', 'Payroll Management', 'Business Advisory & Support'],
  },
  {
    icon: Clapperboard, title: 'YouTubers / Content Creators',
    img: 'photo-1616469829581-73993eb86b02',
    bullets: ['Income Tax Filing', 'GST Registration (if applicable)', 'Cost Tracking & Expense Review', 'Financial Guidance for Growth'],
  },
]

export const industryStrip = [
  { icon: Shield, label: 'Tailored Solutions', sub: 'For Every Industry' },
  { icon: Target, label: 'Compliance', sub: 'You Can Trust' },
  { icon: TrendingUp, label: 'Financial Clarity', sub: 'Better Decisions' },
  { icon: Users, label: 'Your Success', sub: 'Our Priority' },
  { icon: Award, label: 'Building a Stronger', sub: 'Financial Future' },
]

export const process = [
  { icon: Compass, title: 'Consultation', desc: 'We understand your financial situation, goals, and challenges through a detailed discovery call.' },
  { icon: FileSearch, title: 'Document Collection', desc: 'We collect and organise all relevant financial documents securely, in-person or online.' },
  { icon: ClipboardList, title: 'Planning', desc: 'Our experts design a tailored tax, compliance, or investment strategy specific to you.' },
  { icon: Rocket, title: 'Execution', desc: 'We execute filings, registrations, or investments accurately and within deadlines.' },
  { icon: HeartHandshake, title: 'Support', desc: 'Ongoing advisory, reminders, and support to keep you compliant and growing year-round.' },
]

export const stats = [
  { icon: Users, target: 1000, suffix: '+', label: 'Happy Clients' },
  { icon: Award, target: 21, suffix: '+', label: 'Years Experience' },
  { icon: MapPin, target: 4, suffix: '', label: 'Branches' },
  { icon: ShieldCheck, target: 98, suffix: '%', label: 'Client Retention' },
  { icon: Clock, target: 24, suffix: ' Hrs', label: 'Response Time' },
]

export const testimonials = [
  {
    name: 'Arjun Kapoor', company: 'TechVenture Pvt Ltd', industry: 'Technology',
    text: "Hitesh and his team transformed our financial operations. From GST compliance to company restructuring, they handled everything flawlessly. Our tax liability reduced by 40% in the first year.",
    img: testimonialArjunKapoor,
  },
  {
    name: 'Sunita Reddy', company: 'Reddy Exports', industry: 'Manufacturing',
    text: "Their accounting and GST compliance support has been outstanding. Timely filings, accurate books, and proactive advice helped us avoid penalties and stay audit-ready year-round.",
    img: testimonialSunitaReddy,
  },
  {
    name: 'Vikram Singh', company: 'Singh Developers', industry: 'Real Estate',
    text: "Managing GST and TDS across multiple project sites used to be chaotic. Their team streamlined our accounting and compliance completely — we finally have real-time visibility into our finances.",
    img: testimonialVikramSingh,
  },
  {
    name: 'Meera Joshi', company: 'BloomFood Startups', industry: 'F&B / FMCG',
    text: "As a first-time founder, I was overwhelmed by compliance requirements. Their startup onboarding package covered company registration, GST, accounting setup, and the right business insurance — all in one month.",
    img: testimonialMeeraJoshi,
  },
]

export const blogPosts = [
  {
    cat: 'GST', title: 'GST 2.0 Explained: What the New 5% / 18% / 40% Slabs Mean for Your Business',
    summary: 'A plain-English breakdown of the simplified GST rate structure — what got cheaper, what got costlier, and how to reprice and re-file correctly.',
    time: '8 min read', img: blogGst2Reform,
  },
  {
    cat: 'Income Tax', title: 'New Income Tax Rules, 2026: What Changes From FY 2026-27',
    summary: 'CBDT replaced the decades-old 1962 Rules — updated exemption limits, revised PAN thresholds, new ITR forms, and what it means for your filing this year.',
    time: '7 min read', img: blogNewTaxRegime,
  },
  {
    cat: 'GST', title: 'ITC Reconciliation Made Simple: GSTR-2B vs Books Matching Guide',
    summary: 'Step-by-step walkthrough of ITC reconciliation, common mismatches, and how to handle them without notices.',
    time: '9 min read', img: blogGstItcReconciliation,
  },
  {
    cat: 'Compliance', title: 'Annual Compliance Calendar for Private Limited Companies — FY 2026-27',
    summary: 'All MCA, income tax, GST, and statutory deadlines in one downloadable calendar.',
    time: '5 min read', img: blogComplianceCalendar,
  },
  {
    cat: 'TDS', title: 'TDS on Rent: Section 194-IB Explained for Landlords and Tenants',
    summary: 'When to deduct, how to deposit, and how to file Form 26QC without errors.',
    time: '6 min read', img: blogTdsOnRent,
  },
]

export const regulations = [
  { date: '20 Mar 2026', authority: 'CBDT', tag: 'Income Tax', title: 'Income Tax Rules, 2026 Notified — Replaces the 1962 Rules from 1 April 2026', summary: 'CBDT notified the new Income Tax Rules, 2026 to operationalise the Income Tax Act, 2025, effective FY 2026-27. Expect updated exemption limits, revised PAN quoting thresholds, HRA exemption extended to more cities, and new ITR forms.' },
  { date: '22 Sep 2025', authority: 'GST Council', tag: 'GST', title: 'GST 2.0: Rate Slabs Simplified to 5%, 18% and 40%', summary: 'The 56th GST Council meeting replaced the old five-slab structure with a simplified three-slab regime. Daily essentials and healthcare items moved to nil/5%, most goods sit at 18%, and sin/luxury goods now attract 40%.' },
  { date: 'FY 2025-26', authority: 'CBDT', tag: 'Income Tax', title: 'ITR Filing Due Dates for AY 2026-27', summary: '31 July 2026 for salaried individuals (ITR-1/ITR-2, non-audit); 31 August 2026 for ITR-3/ITR-4 without audit; 31 October 2026 for accounts requiring audit; belated returns accepted till 31 December 2026.' },
]

export const faqs = [
  { q: 'What is the last date to file ITR for FY 2025-26?', a: 'For individuals and HUFs not liable to audit (ITR-1/ITR-2), the due date is 31 July 2026. ITR-3/ITR-4 filers without audit get until 31 August 2026. Businesses requiring an audit must file by 31 October 2026, and belated returns can be filed up to 31 December 2026 with a late fee.' },
  { q: 'Is GST registration mandatory for freelancers and consultants?', a: 'GST registration is mandatory if your annual turnover exceeds ₹20 lakh (₹10 lakh for special category states) or if you provide services to clients outside India (export of services). Voluntary registration is also possible.' },
  { q: 'How do I choose between Pvt Ltd and LLP for my startup?', a: 'A Pvt Ltd company is preferable for venture-funded startups due to equity flexibility and investor credibility. LLPs are better for professional services and partnership-based businesses due to lower compliance burden and pass-through taxation.' },
  { q: 'What does a statutory audit involve and who needs one?', a: 'A statutory audit is a legally mandated examination of financial records. All companies (regardless of turnover) and businesses/professions with annual gross receipts exceeding ₹1 crore (businesses) or ₹50 lakh (professionals) must get their accounts audited under the Income Tax Act.' },
  { q: 'Do you help with insurance and mutual fund investments?', a: 'Yes. We help individuals and businesses choose the right life, health, motor and business insurance policies, and offer guided mutual fund investment planning aligned with your financial goals and risk profile.' },
  { q: 'What is included in your online bookkeeping service?', a: 'Our cloud bookkeeping service includes daily transaction recording, bank reconciliation, GST data preparation, monthly MIS reports, payroll processing, and real-time dashboard access. You retain full visibility without doing the legwork.' },
]

export const filterChips = ['All', 'Income Tax', 'GST', 'TDS', 'Compliance', 'Company Registration', 'Insurance', 'Mutual Funds']

export const branches = [
  {
    city: 'Jaipur (Head Office)',
    img: 'photo-1477587458883-47145ed94245',
    address: ADDRESS,
    email: EMAIL,
  },
  {
    city: 'Dubai (UAE)',
    img: 'photo-1512453979798-5ea266f8880c',
    address: 'Office No. 1501, BB1, Mazaya Business Avenue, Jumeirah Lake Towers, Dubai, UAE',
    email: EMAIL,
  },
  {
    city: 'Noida',
    img: 'photo-1497366754035-f200968a6e72',
    address: 'Sector 62, Noida, Uttar Pradesh - 201301, India',
    email: EMAIL,
  },
  {
    city: 'Faridabad',
    img: 'photo-1486406146926-c627a92ad1ab',
    address: '2/G, 20, NIT, Faridabad - 121001, Haryana, India',
    email: EMAIL,
  },
  {
    city: 'Ghaziabad',
    img: 'photo-1541746972996-4e0b0f43e02a',
    address: 'Kaushambi, Ghaziabad, Uttar Pradesh - 201010, India',
    email: EMAIL,
  },
]

export const contactStrip = [
  { icon: UserCheck, title: 'Experienced Professionals', sub: 'Expert support you can trust' },
  { icon: Building2, title: 'One Stop Financial Solutions', sub: 'All your financial needs under one roof' },
  { icon: ShieldCheck, title: 'Client Confidentiality', sub: 'Your data is safe with us' },
  { icon: Clock, title: 'Timely & Reliable Service', sub: 'We value your time' },
]
