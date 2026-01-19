# Business Tools - SEO Strategy & Implementation

## Overview

**Site:** getfigured.co  
**Launch:** 19 calculators (all KD <24)  
**Target:** 5,500 monthly searches in Phase 1  
**Timeline:** 8 weeks to launch

## SEO Foundation

### Site Structure
```
getfigured.co/
├── / (homepage)
├── /freelance/
│   ├── consulting-rate-calculator
│   ├── consulting-fee-calculator
│   ├── pricing-calculator
│   ├── contractor-rate-calculator
│   ├── contractor-hourly-rate-calculator
│   ├── estimate-generator
│   ├── proforma-invoice-generator
│   └── invoice-generator-google-docs
├── /hr/
│   ├── pto-calculator-hourly
│   ├── time-off-accrual
│   ├── vacation-accrual
│   ├── sick-leave-accrual
│   └── pto-accrual
├── /time/
│   ├── work-hours-with-lunch
│   └── overtime-hours
├── /finance/
│   ├── restaurant-profit-margin
│   ├── profit-loss
│   ├── markup-percentage
│   └── margin-from-markup
├── /about
├── /privacy
└── /terms
```

### Technical SEO Checklist

**Core Web Vitals:**
- LCP < 2.5s (Largest Contentful Paint)
- FID < 100ms (First Input Delay)
- CLS < 0.1 (Cumulative Layout Shift)

**Performance:**
- Static generation for all calculator pages
- Font preloading (Inter)
- Image optimization (next/image)
- Minimal JavaScript (calculator logic only)
- No external dependencies where possible

**Mobile:**
- Responsive design (mobile-first)
- Touch targets ≥ 44x44px
- Viewport meta tag
- No horizontal scroll

**Indexing:**
- Sitemap.xml (auto-generated)
- Robots.txt (allow all, sitemap reference)
- Canonical URLs on all pages
- No duplicate content

---

## Keyword Mapping

### Phase 1: Freelance Tools (Launch)

#### 1. Consulting Rate Calculator
**Primary:** consulting rate calculator (170 vol, KD 2)
**Secondary:**
- how to calculate consulting rate (50 vol, KD 15)
- consultant hourly rate calculator (30 vol, KD 8)
- consulting rate formula (20 vol, KD 10)

**Long-tail:**
- calculate hourly consulting rate from salary
- what should I charge as a consultant
- freelance consultant rate calculator

**LSI Keywords:**
- billable hours, utilization rate, day rate, project rate
- overhead costs, profit margin, business expenses
- W2 to consulting conversion

**URL:** `/freelance/consulting-rate-calculator`
**Title:** Consulting Rate Calculator | Calculate Your Hourly Rate - BizCalc
**Meta:** Calculate your consulting rate based on desired salary, billable hours, and expenses. Free tool for consultants and freelancers. Get accurate hourly, daily, and project rates.

---

#### 2. Consulting Fee Calculator
**Primary:** consulting fee calculator (140 vol, KD 7)
**Secondary:**
- consulting project fee calculator (20 vol, KD 5)
- how to calculate consulting fees (40 vol, KD 12)
- consultant fee structure (30 vol, KD 18)

**Long-tail:**
- calculate total consulting project fee
- fixed price vs hourly consulting
- consulting fee with expenses

**LSI Keywords:**
- project pricing, retainer fee, payment terms
- value-based pricing, fixed fee, time and materials
- statement of work, scope of work

**URL:** `/freelance/consulting-fee-calculator`
**Title:** Consulting Fee Calculator | Project Pricing Tool for Consultants
**Meta:** Calculate consulting project fees with hourly, fixed, or value-based pricing. Include expenses and retainers. Free tool for independent consultants.

---

#### 3. Freelance Pricing Calculator
**Primary:** freelance pricing calculator (140 vol, KD 7)
**Secondary:**
- how much should I charge as a freelancer (90 vol, KD 15)
- freelance rate calculator (50 vol, KD 10)
- freelancer hourly rate calculator (30 vol, KD 12)

**Long-tail:**
- freelance developer pricing calculator
- freelance designer rate calculator
- how to price freelance services

**LSI Keywords:**
- freelance rates by experience, market rates
- freelance pricing strategy, competitive rates
- beginner vs expert rates

**URL:** `/freelance/pricing-calculator`
**Title:** Freelance Pricing Calculator | Find Your Freelance Rate by Industry
**Meta:** Calculate your freelance rate based on experience, industry, and location. Compare with market rates. Free tool for designers, developers, writers, and consultants.

---

#### 4. Contractor Rate Calculator
**Primary:** contractor rate calculator (90 vol, KD 12)
**Secondary:**
- contractor hourly rate calculator (90 vol, KD 12)
- W2 to 1099 calculator (70 vol, KD 15)
- how to calculate contractor rate (40 vol, KD 18)

**Long-tail:**
- convert salary to contractor rate
- W2 salary to contractor hourly rate
- 1099 rate calculator from W2

**LSI Keywords:**
- self-employment tax, contractor vs employee
- 1099 contractor, benefits value, health insurance
- contractor multiplier, 1.5x rule

**URL:** `/freelance/contractor-rate-calculator`
**Title:** Contractor Rate Calculator | Convert W2 Salary to 1099 Hourly Rate
**Meta:** Calculate your 1099 contractor rate from W2 salary. Includes benefits, taxes, and expenses. Find out what to charge as an independent contractor.

---

#### 5. Estimate Generator
**Primary:** estimate generator free (110 vol, KD 15)
**Secondary:**
- free estimate generator (50 vol, KD 18)
- estimate template free (40 vol, KD 20)
- create estimate online (30 vol, KD 22)

**Long-tail:**
- free estimate generator no sign up
- online estimate maker free
- estimate generator for contractors

**LSI Keywords:**
- estimate template, quotation, proposal
- line item estimate, professional estimate
- PDF estimate, email estimate

**URL:** `/freelance/estimate-generator`
**Title:** Free Estimate Generator | Create Professional Estimates Online
**Meta:** Generate professional estimates with line items, tax, and discounts. Download PDF or share link. Free estimate generator, no signup required.

---

#### 6. Contractor Hourly Rate Calculator
**Primary:** contractor hourly rate calculator (90 vol, KD 12)
**Secondary:**
- hourly contractor rate (20 vol, KD 10)
- 1099 hourly rate calculator (15 vol, KD 12)

**URL:** `/freelance/contractor-hourly-rate-calculator`
**Title:** Contractor Hourly Rate Calculator | Convert Salary to 1099 Rate
**Meta:** Calculate your contractor hourly rate from W2 salary. Includes taxes, benefits, and expenses. Free 1099 rate calculator.

---

#### 7. Proforma Invoice Generator
**Primary:** proforma invoice generator (70 vol, KD 15)
**Secondary:**
- free proforma invoice generator (20 vol, KD 18)
- proforma invoice template (110 vol, KD 25)
- what is a proforma invoice (260 vol, KD 20)

**URL:** `/freelance/proforma-invoice-generator`
**Title:** Free Proforma Invoice Generator | Create Proforma Invoices Online
**Meta:** Generate professional proforma invoices for international shipments. Include customs info, HS codes. Free tool, no signup required.

---

#### 8. Invoice Generator Google Docs
**Primary:** invoice generator Google Docs (30 vol, KD 20)
**Secondary:**
- Google Docs invoice template (140 vol, KD 30)
- create invoice in Google Docs (50 vol, KD 22)

**URL:** `/freelance/invoice-generator-google-docs`
**Title:** Invoice Generator for Google Docs | Free Invoice Template
**Meta:** Create invoices compatible with Google Docs. Download as .docx or open in Google Drive. Free invoice generator.

---

### Phase 1: Time/Payroll Tools

#### 9. Work Hours with Lunch Break
**Primary:** work hours calculator with lunch break (70 vol, KD 20)
**Secondary:**
- calculate work hours minus lunch (30 vol, KD 18)
- hours worked calculator with break (20 vol, KD 15)
- timesheet with lunch deduction (15 vol, KD 20)

**URL:** `/time/work-hours-with-lunch`
**Title:** Work Hours Calculator with Lunch Break | Calculate Net Hours
**Meta:** Calculate total work hours minus unpaid lunch breaks. Perfect for hourly employees and timesheets. Free hours calculator.

---

#### 10. Calculate Overtime Hours
**Primary:** calculate overtime hours (90 vol, KD 21)
**Secondary:**
- overtime calculator (1,900 vol, KD 35) - stretch target
- overtime pay calculator (880 vol, KD 40) - stretch target
- how to calculate overtime (170 vol, KD 25)

**URL:** `/time/overtime-hours`
**Title:** Calculate Overtime Hours | Overtime Pay Calculator
**Meta:** Calculate overtime pay based on federal or California rules. Includes 1.5x and 2x rates. Free overtime calculator.

---

### Phase 1: Finance Tools (Already mapped above)

#### 11. Margin from Markup
**Primary:** calculate margin from markup (50 vol, KD 23)
**Secondary:**
- markup to margin calculator (40 vol, KD 20)
- margin to markup calculator (40 vol, KD 22)
- convert markup to margin (30 vol, KD 18)

**URL:** `/finance/margin-from-markup`
**Title:** Calculate Margin from Markup | Markup to Margin Converter
**Meta:** Convert markup percentage to profit margin (and vice versa). Understand the difference between markup and margin. Free calculator.

---



#### 6. PTO Calculator - Hourly
**Primary:** PTO calculator for hourly employees (90 vol, KD 12)
**Secondary:**
- PTO accrual for hourly employees (30 vol, KD 15)
- calculate PTO for hourly workers (20 vol, KD 18)
- hourly PTO calculator (20 vol, KD 10)

**Long-tail:**
- PTO earned per hour worked
- calculate PTO cash value hourly
- hourly employee vacation calculator

**LSI Keywords:**
- accrual rate, hours worked, earned time off
- PTO balance, PTO payout, cash out PTO

**URL:** `/hr/pto-calculator-hourly`
**Title:** PTO Calculator for Hourly Employees | Calculate PTO Accrual
**Meta:** Calculate PTO earned based on hours worked. See cash value and annual projections. Free tool for hourly employees and HR managers.

---

#### 7. Time Off Accrual Calculator
**Primary:** time off accrual calculator (480 vol, KD 16)
**Secondary:**
- PTO accrual schedule (50 vol, KD 20)
- calculate time off accrual (40 vol, KD 18)
- paid time off accrual (30 vol, KD 15)

**Long-tail:**
- calculate PTO accrual by pay period
- time off accrual policy calculator
- when will I reach max PTO

**LSI Keywords:**
- accrual schedule, accrual method, accrual cap
- rollover policy, use it or lose it
- carryover limit, PTO expiration

**URL:** `/hr/time-off-accrual`
**Title:** Time Off Accrual Calculator | Track PTO Balance & Schedule
**Meta:** Calculate time off accrual with customizable policies. See accrual schedule and projected balance. Free calculator for employees and HR.

---

#### 8. Vacation Accrual Calculator
**Primary:** vacation accrual calculator (590 vol, KD 18)
**Secondary:**
- how to calculate vacation accrual (70 vol, KD 20)
- vacation time accrual calculator (50 vol, KD 18)
- vacation accrual by pay period (30 vol, KD 22)

**Long-tail:**
- calculate vacation days earned per year
- vacation accrual rate calculator
- vacation balance calculator

**LSI Keywords:**
- vacation policy, accrual by tenure
- vacation days per year, annual leave
- vacation rollover, vacation payout

**URL:** `/hr/vacation-accrual`
**Title:** Vacation Accrual Calculator | Calculate Annual Vacation Time
**Meta:** Calculate vacation accrual by pay period, tenure, or hours worked. See annual days available and cash value. Free vacation calculator.

---

#### 9. PTO Accrual Calculator ⭐ HIGH VOLUME
**Primary:** PTO accrual calculator (1,900 vol, KD 20)
**Secondary:**
- calculate PTO accrual (210 vol, KD 22)
- PTO calculator (1,300 vol, KD 25)
- paid time off calculator (720 vol, KD 23)

**Long-tail:**
- PTO accrual rate calculator
- calculate PTO balance
- how much PTO have I accrued

**LSI Keywords:**
- PTO policy, accrual rate, PTO balance
- PTO payout, PTO rollover, PTO cap
- accrual by pay period, accrual schedule

**URL:** `/hr/pto-accrual`
**Title:** PTO Accrual Calculator | Calculate Paid Time Off Balance
**Meta:** Calculate PTO accrual with any policy (hourly, biweekly, monthly, upfront). Track balance, rollovers, and forfeiture. Free PTO calculator.

---

#### 10. Sick Leave Accrual Calculator
**Primary:** sick leave accrual calculator (70 vol, KD 19)
**Secondary:**
- calculate sick leave accrual (20 vol, KD 18)
- sick time accrual calculator (15 vol, KD 20)
- sick leave calculator (50 vol, KD 22)

**Long-tail:**
- California sick leave calculator
- sick leave accrual by state
- paid sick leave calculator

**LSI Keywords:**
- sick leave law, sick leave policy
- sick time balance, sick days earned
- state sick leave requirements

**URL:** `/hr/sick-leave-accrual`
**Title:** Sick Leave Accrual Calculator | State-Specific Sick Time Calculator
**Meta:** Calculate sick leave accrual by state law (CA, NY, IL). Check compliance and track balance. Free sick leave calculator for employees and employers.

---

### Phase 3: Business Finance Tools

#### 11. Markup Percentage Calculator
**Primary:** markup percentage calculator (880 vol, KD 23)
**Secondary:**
- calculate markup percentage (390 vol, KD 25)
- markup calculator (720 vol, KD 28)
- how to calculate markup (260 vol, KD 30)

**Long-tail:**
- calculate markup from cost and price
- markup percentage formula
- markup vs margin calculator

**LSI Keywords:**
- markup formula, cost to price, profit margin
- selling price calculator, gross profit
- retail markup, wholesale markup

**URL:** `/finance/markup-percentage`
**Title:** Markup Percentage Calculator | Calculate Markup & Margin
**Meta:** Calculate markup percentage from cost and selling price. See equivalent margin percentage. Free markup calculator for retail and business.

---

#### 12. Profit and Loss Calculator
**Primary:** profit and loss calculator (260 vol, KD 23)
**Secondary:**
- P&L calculator (90 vol, KD 25)
- calculate profit and loss (110 vol, KD 28)
- profit loss statement calculator (50 vol, KD 30)

**Long-tail:**
- simple profit and loss calculator
- small business profit calculator
- calculate net profit from revenue

**LSI Keywords:**
- P&L statement, income statement
- gross profit, net income, operating expenses
- COGS, revenue, expenses, EBITDA

**URL:** `/finance/profit-loss`
**Title:** Profit and Loss Calculator | Free P&L Statement Tool
**Meta:** Calculate profit and loss with revenue, COGS, and expenses. Generate P&L statement. Free calculator for small businesses.

---

#### 13. Restaurant Profit Margin Calculator
**Primary:** restaurant profit margin calculator (170 vol, KD 21)
**Secondary:**
- calculate restaurant profit margin (50 vol, KD 25)
- restaurant profit calculator (70 vol, KD 28)
- food cost percentage calculator (480 vol, KD 30)

**Long-tail:**
- restaurant prime cost calculator
- calculate food cost percentage
- restaurant break even calculator

**LSI Keywords:**
- prime cost, food cost %, labor cost %
- restaurant profitability, CoGS
- break-even analysis, profit margin

**URL:** `/finance/restaurant-profit-margin`
**Title:** Restaurant Profit Margin Calculator | Food Cost & Prime Cost
**Meta:** Calculate restaurant profit margin, food cost %, labor cost %, and prime cost. Compare with industry benchmarks. Free calculator for restaurants.

---

#### 14. Gross Profit Calculator ⭐ HIGH VOLUME
**Primary:** gross profit calculator (3,600 vol, KD 34)
**Secondary:**
- calculate gross profit (880 vol, KD 36)
- how to calculate gross profit (590 vol, KD 38)
- gross profit formula calculator (140 vol, KD 32)

**Long-tail:**
- gross profit from revenue and COGS
- calculate gross profit per unit
- gross profit vs net profit

**LSI Keywords:**
- revenue, cost of goods sold, COGS
- gross margin, contribution margin
- profit per unit, markup

**URL:** `/finance/gross-profit`
**Title:** Gross Profit Calculator | Calculate Gross Profit & Margin
**Meta:** Calculate gross profit from revenue and COGS. See gross margin percentage and markup. Free calculator for businesses.

---

#### 15. Gross Profit Margin Calculator ⭐ HIGHEST VOLUME
**Primary:** gross profit margin calculator (5,400 vol, KD 43)
**Secondary:**
- calculate gross profit margin (1,600 vol, KD 45)
- gross margin calculator (2,400 vol, KD 40)
- how to calculate gross profit margin (720 vol, KD 48)

**Long-tail:**
- gross profit margin formula calculator
- calculate gross margin percentage
- improve gross profit margin

**LSI Keywords:**
- gross margin %, profit margin, revenue
- COGS percentage, markup equivalent
- industry benchmarks, margin analysis

**URL:** `/finance/gross-profit-margin`
**Title:** Gross Profit Margin Calculator | Free Margin Calculator
**Meta:** Calculate gross profit margin from revenue and COGS. See markup equivalent and compare with industry benchmarks. Free margin calculator.

---

## Content Templates

### Calculator Page Template (All Pages)

```markdown
# [H1: Primary Keyword + Benefit]
Example: "Consulting Rate Calculator - Calculate Your Hourly Rate"

[Brief 2-3 sentence intro]
Calculate your [specific result] based on [inputs]. This free calculator helps [target audience] determine [benefit]. Get accurate [output types] in seconds.

[CALCULATOR INTERFACE]

---

## How to Use the [Tool Name] (H2)

**Step 1: Enter [Primary Input]**
[Explanation of what to enter, why it matters, examples]
*Example: "Enter $100,000 if you want to earn six figures annually."*

**Step 2: Set [Secondary Input]**
[Explanation, defaults, common ranges]
*Tip: Most consultants bill 1,500-1,800 hours per year.*

**Step 3: Review Your Results**
[What the outputs mean, how to interpret them]

**Common Mistakes to Avoid:**
- ❌ [Mistake 1] - [Why it's wrong]
- ❌ [Mistake 2] - [Why it's wrong]
- ✅ [Correct approach] - [Why it works]

*[300-400 words]*

---

## Why Use a [Tool Name]? (H2)

**Benefits:**
- **Accurate Pricing** - [Explanation]
- **Save Time** - [Explanation]
- **Professional** - [Explanation]
- **Free & Private** - No signup, your data stays on your device

**Who Should Use This Calculator:**
- [Persona 1: e.g., New freelancers setting rates]
- [Persona 2: e.g., Experienced consultants raising rates]
- [Persona 3: e.g., Agencies pricing client projects]

**Real-World Scenarios:**
1. [Scenario 1 with example numbers]
2. [Scenario 2 with example numbers]
3. [Scenario 3 with example numbers]

*[400-500 words]*

---

## Understanding [Key Concept] (H2)

[Educational content about the main concept]

**[Sub-concept 1] (H3)**
[Explanation with examples, formulas, industry standards]

**[Sub-concept 2] (H3)**
[Explanation with examples, best practices]

**[Sub-concept 3] (H3)**
[Explanation with data, benchmarks]

**Industry Benchmarks:**
| Industry | [Metric] | Range |
|----------|----------|-------|
| [Industry 1] | [Value] | [Range] |
| [Industry 2] | [Value] | [Range] |

*[500-600 words]*

---

## Frequently Asked Questions (H2)

### [Question 1 using secondary keyword]? (H3)
[Answer in 50-100 words]

### [Question 2 from Google PAA]? (H3)
[Answer in 50-100 words]

### [Question 3 addressing common objection]? (H3)
[Answer in 50-100 words]

### [Question 4 about related topic]? (H3)
[Answer in 50-100 words]

### [Question 5 comparing alternatives]? (H3)
[Answer in 50-100 words]

*[500-800 words total]*

---

## Related Calculators (H2)

[Grid of 4-6 related calculator cards with:]
- Calculator name
- Brief description (1 sentence)
- Internal link
- Icon/visual

---

## Share This Calculator

[Social share buttons: Twitter, LinkedIn, Email]
[Copy link button]

---

*Last updated: [Date] | Created by [Author Name]*
```

---

## Schema Markup

### WebApplication Schema (All Calculators)
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "[Calculator Name]",
  "description": "[Calculator Description]",
  "url": "https://bizcalc.io/[url-path]",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  }
}
```

### FAQ Schema (On Every Calculator Page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question from FAQ section]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text]"
      }
    }
    // ... 5-8 questions
  ]
}
```

### HowTo Schema (Optional, for complex calculators)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate [X]",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1",
      "text": "[Step description]"
    }
    // ... all steps
  ]
}
```

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://bizcalc.io"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Freelance Tools",
      "item": "https://bizcalc.io/freelance"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Consulting Rate Calculator"
    }
  ]
}
```

---

## Internal Linking Strategy

### Link Patterns

**From Homepage:**
- Link to category pages (/freelance, /hr, /finance)
- Link to top 5 calculators by volume
- "Popular Calculators" section

**From Category Pages:**
- Link to all calculators in that category
- Cross-link to related categories
- "Most Used" section for top performers

**From Calculator Pages:**
- "Related Calculators" grid (4-6 links)
- Contextual links in content (2-3 per page)
- Breadcrumb navigation

**Related Calculator Groupings:**

**Freelance Tools:**
- Consulting Rate ↔ Consulting Fee ↔ Freelance Pricing
- Contractor Rate ↔ Consulting Rate
- Estimate Generator ↔ Consulting Fee

**PTO Tools:**
- PTO Accrual ↔ Vacation Accrual ↔ Time Off Accrual
- PTO (Hourly) ↔ PTO Accrual
- Sick Leave ↔ Time Off Accrual

**Finance Tools:**
- Markup ↔ Gross Profit ↔ Gross Profit Margin
- Profit & Loss ↔ Gross Profit
- Restaurant Margin ↔ Profit & Loss

**Cross-Category Links:**
- Consulting Rate → Gross Profit (pricing strategy)
- PTO Accrual → Contractor Rate (benefits value)
- Estimate Generator → Markup Calculator (pricing projects)

### Anchor Text Strategy
- Exact match: 30% (e.g., "PTO accrual calculator")
- Partial match: 40% (e.g., "calculate your PTO")
- Branded: 20% (e.g., "BizCalc PTO tool")
- Generic: 10% (e.g., "this calculator")

---

## Content Guidelines

### Writing Style
- **Active voice:** "Calculate your rate" not "Your rate can be calculated"
- **Second person:** "You should charge" not "One should charge"
- **Conversational:** Write like you're advising a friend
- **Concise:** No fluff, get to the point
- **Examples:** Real numbers, specific scenarios

### Keyword Density
- Primary keyword: 2-3% of content
- Use naturally in: H1, first paragraph, H2s, conclusion
- Don't force - maintain readability

### Content Length by Section
- Intro: 50-75 words
- How to Use: 300-400 words
- Why Use: 400-500 words
- Understanding [Concept]: 500-600 words
- FAQ: 500-800 words (5-8 questions)
- **Total: 1,750-2,375 words per page**

### Readability
- Flesch Reading Ease: 60-70 (8th-9th grade)
- Average sentence length: 15-20 words
- Average paragraph: 2-4 sentences
- Use subheadings every 200-300 words

---

## Image SEO

### Image Requirements Per Calculator

1. **Hero Image** (calculator interface screenshot)
   - Size: 1200x630px (Open Graph)
   - Alt: "[Calculator Name] interface with sample calculation"
   - Filename: `[calculator-name]-hero.jpg`

2. **How-To Screenshots** (3-4 images)
   - Size: 800x600px
   - Alt: "Step [X]: [Specific action being shown]"
   - Filename: `[calculator-name]-step-[X].jpg`

3. **Chart/Visual** (output visualization)
   - Size: 800x600px
   - Alt: "[Specific data visualization] showing [what it shows]"
   - Filename: `[calculator-name]-chart.jpg`

4. **Open Graph Image** (social sharing)
   - Size: 1200x630px
   - Include: Calculator name, brief description, logo
   - Alt: "[Calculator Name] - Free [Type] Calculator"
   - Filename: `[calculator-name]-og.jpg`

### Image Optimization
- Format: WebP with JPG fallback
- Compression: 80% quality
- Lazy loading: Yes (except above fold)
- Dimensions: Explicitly set width/height
- CDN: Use Vercel's Image Optimization

---

## Author E-E-A-T Strategy

### Author Bio (All Calculators)
```markdown
**About the Author**
[Author Name] is a [credential] with [X years] experience in [relevant field]. [He/She/They] has helped [number] [target audience] with [specific outcome]. [Author] specializes in [expertise areas] and regularly consults with [types of clients].

*Connect on [LinkedIn] | [Twitter] | [Website]*
```

### Author Schema Markup
```json
{
  "@type": "Person",
  "name": "[Author Name]",
  "jobTitle": "[Job Title]",
  "description": "[Short bio]",
  "url": "[LinkedIn or personal site]",
  "sameAs": [
    "[LinkedIn URL]",
    "[Twitter URL]"
  ]
}
```

### Expertise Signals
- Real examples with specific numbers
- Industry benchmarks cited with sources
- "In my X years of consulting..." personal anecdotes
- Case studies: "A client increased revenue 40% by..."
- Warnings about common mistakes
- Nuanced advice, not just calculator instructions

---

## Link Building Strategy

### Initial Outreach (Month 1-3)

**Target 1: Freelance Communities**
- r/freelance, r/consulting, r/sidehustle (Reddit)
- Indie Hackers forums
- Hacker News "Ask HN" threads
- Approach: "I built this free tool for..."

**Target 2: Tool Directories**
- Product Hunt (launch with story)
- BetaList (if pre-launch phase)
- Free-for.dev (developer tools)
- AlternativeTo (list as alternative to paid tools)

**Target 3: Newsletter Mentions**
- TLDR Newsletter (submit tool)
- Indie Hackers newsletter
- Freelance-focused newsletters
- Approach: "Your readers might find this useful..."

### Content Partnerships (Month 3-6)

**Target 1: Freelance Blogs**
- FreshBooks blog (guest post)
- QuickBooks blog
- Freelancers Union blog
- Approach: "I have data from 10K users showing..."

**Target 2: HR/Benefits Sites**
- BambooHR blog
- Gusto blog
- Namely blog
- Approach: "PTO calculator could help your readers..."

**Target 3: Finance Blogs**
- Small Business Trends
- SCORE
- Inc.com
- Approach: Expert roundup participation

### Resource Page Links (Ongoing)

**Search Queries:**
- "freelance resources" + "calculator"
- "small business tools" + "free"
- "HR resources" + "calculator"
- "[niche] resources" intitle:"resources"

**Outreach Template:**
```
Subject: Free [Tool Type] for Your Resources Page

Hi [Name],

I noticed your excellent resource page at [URL]. I recently built a free [calculator name] that helps [target audience] [benefit].

It's at [URL] and includes:
- [Feature 1]
- [Feature 2]
- [Feature 3]

Would this be a good fit for your resources page? It's completely free, no signup required.

Thanks for considering!
[Your Name]
```

---

## Google Search Console Strategy

### Initial Setup (Day 1)
- Add property (bizcalc.io)
- Verify ownership (DNS or meta tag)
- Submit sitemap.xml
- Request indexing for homepage + 5 Phase 1 calculators

### Monitoring (Weekly)
- Check impressions/clicks per calculator
- Identify ranking keywords (position 11-20)
- Find high-impression, low-CTR pages (optimize meta)
- Monitor Core Web Vitals

### Optimization Targets
- Pages ranking 11-20: Improve content, get backlinks
- High impressions, low CTR: Rewrite meta descriptions
- Low impressions: Check if indexed, improve internal links
- Pages with issues: Fix mobile usability, speed

---

## Competitor Analysis

### Monthly Tracking

**Competitors:**
1. Calculator.net (DR 77)
2. Omni Calculator (DR 76)
3. GoodCalculators.com (DR 61)
4. CalculatorSoup.com (DR 56)

**Track:**
- Which calculators they rank for
- Their content length (aim for +20%)
- Their internal linking patterns
- New calculators they add
- Their backlink sources (Ahrefs)

**Differentiation:**
- Better UX (modern design vs their 2005 look)
- More content depth (2,000 words vs their 500)
- Specific audience (freelance/SMB vs generic)
- Better monetization placement (less intrusive)

---

## Traffic Projections

### Conservative Estimates (Avg CTR 3%, 25% of keyword vol)

**Phase 1 Launch (Month 1-2):**
- 19 calculators live
- 5,500 search vol × 25% × 3% = **41 clicks/day** = 1,250/month
- With indexing lag: 500-1,000 visits/month realistic

**Phase 1 Mature (Month 3-4):**
- Same 19 calculators, fully indexed
- Backlinks starting to flow
- 5,500 search vol × 30% × 5% = **83 clicks/day** = 2,500/month
- Realistic: 3,000-5,000 visits/month

**Phase 2 Added (Month 6):**
- 30+ calculators (Phase 1 + 10-15 from Phase 2)
- 12,000+ search vol covered
- Target: 8,000-12,000 visits/month
- Revenue: $300-800/month

**Phase 3 Complete (Month 9-12):**
- 40+ calculators
- 20,000+ search vol covered
- Target: 15,000-25,000 visits/month
- Revenue: $1,000-2,000/month

---

## Content Production SOP

### Per Calculator (6-8 hours)

**Hour 1-2: Research**
- Google keyword variations
- Analyze top 10 results
- Note unique angles/gaps
- Check "People Also Ask"
- Screenshot competitor calculators

**Hour 3-4: Outline + First Draft**
- Write H1, meta description
- Draft intro (2-3 sentences)
- Write "How to Use" section
- Write "Why Use" section

**Hour 5-6: Deep Content**
- Write "Understanding [Concept]" section
- Research industry benchmarks
- Add data/statistics (cite sources)
- Write FAQ (5-8 questions)

**Hour 7: Polish**
- Add internal links (4-6 per page)
- Optimize keyword placement
- Check readability (Hemingway)
- Add schema markup

**Hour 8: Images + Final**
- Create/source images
- Add alt text
- Screenshot calculator for OG image
- Final proofread

### Quality Checklist
- [ ] Primary keyword in H1, intro, conclusion
- [ ] 1,750-2,375 words total
- [ ] 5-8 FAQ questions (with schema)
- [ ] 4-6 internal links
- [ ] 3-4 images with alt text
- [ ] Readability score 60-70
- [ ] No keyword stuffing (2-3% density)
- [ ] Unique value vs competitors
- [ ] Schema markup (WebApplication + FAQ)
- [ ] Meta title <60 chars, description <160 chars

---

## Advanced SEO Tactics

### Featured Snippet Optimization

**Target Questions (Use H3 for questions):**
```markdown
### What is a good consulting rate?
A good consulting rate is typically 2-3x your previous W2 hourly rate, or $150-300/hour for most industries. Beginners might charge $75-125/hour, while experts command $300-500/hour. Your rate should cover your desired salary plus 30-40% for taxes, benefits, and business expenses.
```

**Format for Snippets:**
- Direct answer first (40-60 words)
- Then elaborate below
- Use lists/tables where Google shows them
- Check "People Also Ask" for question format

### Video Embeds (Future)

**YouTube Shorts (60 seconds):**
- "How to Calculate Your Consulting Rate"
- "PTO Accrual Explained in 60 Seconds"
- "Markup vs Margin: What's the Difference?"
- Embed on calculator pages
- Helps with engagement metrics

### Comparison Pages (Phase 4)

**Create Comparison Articles:**
- Markup vs Margin Calculator (combines 2 calculators)
- PTO vs Vacation Accrual (what's the difference?)
- Hourly vs Project Pricing for Consultants
- W2 vs 1099: Should You Go Contractor?

**Format:**
- Definition of each
- Key differences (table)
- When to use each
- "Calculate Both" (link to both calculators)

---

## Local SEO (Optional)

If targeting specific states/cities:

**URL Structure:**
- `/hr/california-sick-leave-calculator`
- `/hr/new-york-pto-calculator`

**Content Additions:**
- State-specific laws
- Local benchmarks
- Compliance requirements

**Schema:**
```json
{
  "@type": "LocalBusiness",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CA"
  }
}
```

---

## Mistakes to Avoid

### Content Mistakes
- ❌ Thin content (<1,000 words)
- ❌ Keyword stuffing
- ❌ Duplicate content across calculators
- ❌ No unique value vs competitors
- ❌ Ignoring user intent

### Technical Mistakes
- ❌ Slow page speed (>3s LCP)
- ❌ No mobile optimization
- ❌ Missing schema markup
- ❌ No sitemap/robots.txt
- ❌ Broken internal links

### Link Building Mistakes
- ❌ Buying links
- ❌ Spammy directory submissions
- ❌ Over-optimized anchor text
- ❌ No genuine outreach
- ❌ Ignoring broken link opportunities

---

## Success Metrics Dashboard

### Track Weekly
- **Traffic:** GA4 sessions, users
- **Rankings:** GSC average position for top 20 keywords
- **Conversions:** Calculations completed (GA4 event)
- **Speed:** Core Web Vitals (GSC)

### Track Monthly
- **Backlinks:** New referring domains (Ahrefs/free tools)
- **Revenue:** AdSense earnings, affiliate clicks
- **Engagement:** Avg session duration, bounce rate
- **Content:** New calculators published

### KPIs by Month
| Month | Traffic Goal | Calculators | Revenue Goal |
|-------|--------------|-------------|--------------|
| 1 | 200-400 | 5 | $0 (setup) |
| 3 | 1,500-3,000 | 15 | $50-150 |
| 6 | 7,000-10,000 | 20 | $200-500 |
| 12 | 20,000+ | 30+ | $1,000+ |

---

## Launch Sequence

### Pre-Launch (Weeks 1-8)
- Domain purchased (getfigured.co)
- Site deployed on Vercel
- All 19 Phase 1 calculators built + tested
- All content written (19 × 2,000 words = 38,000 words)
- GSC + Analytics setup
- Reusable component library built

### Launch Week (Week 9)
- **Monday:** Soft launch, submit sitemap to GSC
- **Tuesday:** Request indexing for all 19 pages
- **Wednesday:** Product Hunt launch
- **Thursday:** Reddit posts (r/freelance, r/consulting, r/smallbusiness)
- **Friday:** Indie Hackers + Twitter/X announcement

### Weeks 10-12 (Post-Launch Optimization)
- Monitor GSC for indexing
- Fix any issues found
- Respond to feedback
- Start building backlinks
- Begin Phase 2 planning

### Months 3-6 (Scale to Phase 2)
- Add 10-15 Phase 2 calculators (KD 25-40)
- Focus on high-volume targets (Gross Profit, ROI calculators)
- Continue link building
- Guest posts on freelance/business blogs

---

## Final Checklist: Pre-Launch

**Technical:**
- [ ] All 19 Phase 1 calculators working perfectly
- [ ] Mobile responsive tested on real devices
- [ ] Page speed >90 (PageSpeed Insights)
- [ ] All images optimized (WebP)
- [ ] Schema markup on all 19 pages
- [ ] Sitemap.xml with all 19 calculators submitted to GSC
- [ ] Robots.txt configured
- [ ] Analytics installed + tested (track "calculation_completed" event)

**Content:**
- [ ] All 19 calculator pages have 1,750-2,375 words
- [ ] FAQs on every page (5-8 questions each)
- [ ] Internal links between related calculators
- [ ] Author bio on all pages
- [ ] About page written
- [ ] Privacy + Terms pages
- [ ] Homepage with all 19 calculators listed

**SEO:**
- [ ] Meta titles/descriptions (all 19 pages)
- [ ] H1 tags with primary keywords
- [ ] Alt text on all images
- [ ] Canonical URLs set
- [ ] Open Graph images (19 unique)
- [ ] 4 category hub pages (/freelance, /hr, /time, /finance)

**Marketing:**
- [ ] Product Hunt draft ready (emphasize 19 free tools)
- [ ] Reddit posts written (show value, not spammy)
- [ ] Twitter thread drafted (one tweet per category)
- [ ] Email to personal network
- [ ] Indie Hackers launch post ready

**Total Content Produced:** 38,000+ words (19 calculators × 2,000 words)

---

**You're ready to launch with 19 calculators covering 5,500 monthly searches!** 🚀
