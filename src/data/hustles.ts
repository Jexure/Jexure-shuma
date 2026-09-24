import { SideHustle } from '../types';

export const SAMPLE_SIDE_HUSTLES: SideHustle[] = [
  {
    id: 'digital-product-business',
    name: 'Digital Product Business',
    category: 'E-commerce & Content',
    tagline: 'Create once, sell infinitely: Notion templates, planners, cheat sheets & toolkits',
    explanation: 'Package your knowledge or curated workflows into high-utility digital downloads like Notion system templates, Canva brand kits, financial spreadsheets, or industry swipe files. Zero shipping, zero inventory, and near-zero ongoing fulfillment cost.',
    whyItMatches: 'Perfect for creators with modest starting capital who want passive scalability. You can build these completely on free software during evenings and weekends.',
    matchScore: 96,
    difficulty: 'Beginner',
    startingBudget: '$10 – $30',
    budgetNumericMax: 30,
    estimatedEarnings: '$400 – $2,500/month',
    earningsNumericMin: 400,
    timeRequired: '5 – 10 hours/week',
    timeNumericHours: 8,
    workType: 'Online',
    requiredSkills: ['Writing', 'Design', 'Organizing', 'Social Media'],
    toolsNeeded: [
      { name: 'Canva / Notion', category: 'Creation', cost: 'Free tier', purpose: 'Designing templates, graphics and workspace documents', freeTier: true },
      { name: 'Gumroad / LemonSqueezy', category: 'Checkout & Delivery', cost: 'Free (take small fee per sale)', purpose: 'Hosting files and processing Stripe/PayPal payments', freeTier: true },
      { name: 'X / Pinterest / TikTok', category: 'Distribution', cost: 'Free', purpose: 'Short-form visual demonstrations of the template in action', freeTier: true }
    ],
    targetCustomers: {
      persona: 'Busy professionals, students, and freelancers seeking organized life/work systems',
      painPoint: 'Overwhelmed by messy spreadsheets and lack time to build structured productivity workflows from scratch',
      whereToFind: 'Reddit (r/Notion, r/Productivity), Twitter/X productivity tech circles, Pinterest boards'
    },
    howToGetFirstCustomer: {
      headline: 'The "Free Value Drop" to First Paying Buyer Playbook',
      steps: [
        'Post a sleek screen recording showing your template solving a specific problem (e.g., "How I track 15 freelance clients in 5 minutes").',
        'Offer a 100% free "Lite" version in exchange for email signups or feedback.',
        'Include an exclusive 50% launch coupon code inside the free version for your full "Pro System".',
        'Direct message 10 users who engaged with your post asking for honest critique and offering them the full version.'
      ],
      outreachTemplate: 'Hey [Name]! Noticed you were asking about better ways to track client invoices in Notion. I built a clean, automated system that solved this for my own freelance work. Here is a free copy with zero strings attached: [Link]. Would love any quick thoughts!'
    },
    stepByStepGuide: {
      phase1Setup: [
        'Survey 3 existing best-sellers on Gumroad and Etsy to identify unfilled gaps',
        'Design a clean, frictionless MVP in Notion or Canva with clear user onboarding',
        'Set up a Gumroad store with preview mockups and transparent feature bullet points'
      ],
      phase2Launch: [
        'Record 3 30-second loom or TikTok screen recordings demonstrating before vs. after',
        'Publish your free starter resource to relevant subreddits with value-first commentary',
        'Follow up with early downloaders for testimonials and social proof screenshots'
      ],
      phase3Scale: [
        'Bundle multiple niche templates into a discounted "Master Suite"',
        'Reach out to micro-influencers in your niche to offer 40% affiliate commissions',
        'Automate email sequence offering follow-up templates 4 days after initial download'
      ]
    },
    sevenDayActionPlan: [
      {
        id: 'dp-day-1',
        dayNumber: 1,
        title: 'Choose a profitable niche & validate demand',
        objective: 'Identify an urgent problem people already pay to solve rather than guessing.',
        tasks: [
          'Search Etsy and Gumroad for "Notion template" or "Canva kit" sorted by most reviews',
          'Select one distinct vertical: e.g., real estate agent CRM, college student semester planner, or freelance invoice tracker',
          'Document 3 common complaints or missing features in 3-star reviews of competitors'
        ],
        estimatedHours: 1.5,
        deliverable: 'A 1-page Niche Brief specifying target audience, core pain point, and competitive differentiator.',
        tips: 'Specific beats broad every time. "Fitness planner for night-shift nurses" outsells generic "workout journal".',
        templatesOrPrompts: ['Prompt: "Act as an e-commerce market researcher. Give me 5 underserved niche digital product concepts for [industry] with high search volume."']
      },
      {
        id: 'dp-day-2',
        dayNumber: 2,
        title: 'Choose your first flagship product & draft outline',
        objective: 'Define the minimum viable deliverable that delivers an instant "aha!" moment in under 10 minutes.',
        tasks: [
          'List the top 3 core features your digital product must contain',
          'Write step-by-step instructions for the end-user so they never get stuck',
          'Decide between a spreadsheet, Notion dashboard, or Canva editable kit'
        ],
        estimatedHours: 2,
        deliverable: 'Feature roadmap & user journey document mapped out from download to first win.',
        tips: 'Keep the MVP concise. A customer wants clarity and time savings, not 40 confusing sub-pages.'
      },
      {
        id: 'dp-day-3',
        dayNumber: 3,
        title: 'Build and refine the digital product',
        objective: 'Create the actual asset and stress-test every formula, link, and visual element.',
        tasks: [
          'Build out the layout with minimalist, modern aesthetics (consistent font & spacing)',
          'Add sample dummy data so the user instantly visualizes how it works when populated',
          'Have a friend test duplicate or download the file and verify permissions'
        ],
        estimatedHours: 2.5,
        deliverable: '100% finished digital product file ready for instant one-click delivery.',
        tips: 'Include a 2-minute Loom video link at the top: "Welcome! Watch this 120s walkthrough to get started."'
      },
      {
        id: 'dp-day-4',
        dayNumber: 4,
        title: 'Set the price & setup your payment storefront',
        objective: 'Deploy a high-converting storefront on Gumroad or LemonSqueezy.',
        tasks: [
          'Create high-resolution product mockup covers using Canva or Shots.so',
          'Write a benefit-driven description (Problem -> Solution -> What is Included -> Guarantee)',
          'Set a primary launch price of $19 with a "LAUNCH50" promo code for early adopters'
        ],
        estimatedHours: 1.5,
        deliverable: 'Live, publicly shareable checkout URL with active payment processor.',
        tips: 'Underpricing ($3) hurts perceived value. Start at $15 - $29 so customers treat it seriously.'
      },
      {
        id: 'dp-day-5',
        dayNumber: 5,
        title: 'Create 3 high-impact marketing assets',
        objective: 'Produce compelling demonstration content that showcases the product in action.',
        tasks: [
          'Record a 45-second screen recording showing: Problem -> My Solution -> End Result',
          'Create a 3-slide visual carousel for LinkedIn/Instagram or a high-contrast Pinterest pin',
          'Draft a value-first story thread for X / Facebook Group detailing why you built this'
        ],
        estimatedHours: 2,
        deliverable: '3 scheduled/ready-to-post content pieces with direct CTA to free sample or paid link.',
        tips: 'Focus on transformation: "I used to spend 4 hours on client onboarding, now it takes 6 minutes."'
      },
      {
        id: 'dp-day-6',
        dayNumber: 6,
        title: 'Promote the product in relevant community hubs',
        objective: 'Put your solution in front of 50+ warm prospects where they congregate.',
        tasks: [
          'Join 3 niche communities (Reddit, Discord, LinkedIn Groups, Facebook Groups)',
          'Answer 5 existing questions thoughtfully without dropping spam links',
          'DM or reply to users who expressed frustration: "Built a free cheat sheet that might help you"'
        ],
        estimatedHours: 2,
        deliverable: 'Direct engagement with at least 15 target users and 30+ link clicks tracked.',
        tips: 'Never paste just a link. Offer free value first; people will check your profile link naturally.'
      },
      {
        id: 'dp-day-7',
        dayNumber: 7,
        title: 'Launch day, analyze initial feedback & close first sale',
        objective: 'Activate your launch campaign, review analytics, and secure your first revenue.',
        tasks: [
          'Send your announcement email or publish your primary launch post during peak hours',
          'Check Gumroad analytics for view-to-cart conversion rates',
          'Offer 1-on-1 personalization support to the first 5 buyers to earn raving 5-star testimonials'
        ],
        estimatedHours: 2,
        deliverable: 'First live sales transaction notifications and verified customer feedback logged.',
        tips: 'Celebrate your first dollar! Once you make $1 online, you realize it is just a repeatable loop.'
      }
    ],
    proTips: [
      'Offer a free "Mini" version to build an email list of thousands of interested buyers.',
      'Partner with micro-creators by offering a 50% affiliate link so they sell for you.',
      'Regularly update the template and announce "v2.0" to re-engage past buyers.'
    ],
    risksAndMitigation: [
      'Risk: Piracy or template link sharing. Mitigation: Store value in unique community access and continuous updates.',
      'Risk: Traffic stall. Mitigation: Focus on evergreen SEO platforms like Pinterest and YouTube tutorials.'
    ],
    pricingSuggestion: {
      starter: '$12 for Single Template',
      standard: '$29 for Complete Workspace + Video Guides',
      premium: '$69 for Full System + 30-min 1-on-1 Notion Setup Call'
    },
    marketDemandScore: 94,
    isFeatured: true
  },
  {
    id: 'ai-content-agency',
    name: 'AI Content Repurposing & Short-Form Studio',
    category: 'Marketing & AI Services',
    tagline: 'Turn 1 podcast episode or long YouTube video into 15 viral TikToks, Reels & LinkedIn carousels',
    explanation: 'B2B founders, podcasters, and YouTube creators have great ideas but no time to chop them into short-form vertical video and punchy LinkedIn text posts. You use modern AI video tools to slice, caption, B-roll, and package their content for maximum engagement.',
    whyItMatches: 'Capitalizes on the massive demand for short-form video without requiring you to film yourself. Fast learning curve with cutting-edge tools.',
    matchScore: 92,
    difficulty: 'Beginner',
    startingBudget: '$0 – $20',
    budgetNumericMax: 20,
    estimatedEarnings: '$600 – $3,500/month',
    earningsNumericMin: 600,
    timeRequired: '6 – 12 hours/week',
    timeNumericHours: 9,
    workType: 'Online',
    requiredSkills: ['Video Editing', 'Writing', 'Social Media', 'Sales/Marketing'],
    toolsNeeded: [
      { name: 'OpusClip / Klap', category: 'AI Clipping', cost: 'Free tier / $15/mo', purpose: 'Auto-detecting viral hooks, faces, and animated captions', freeTier: true },
      { name: 'CapCut / Descript', category: 'Video Polish', cost: 'Free', purpose: 'Quick cuts, smooth transitions, sound effects, and B-roll overlay', freeTier: true },
      { name: 'Notion / Google Drive', category: 'Client Delivery', cost: 'Free', purpose: 'Organized asset delivery dashboard for client approval', freeTier: true }
    ],
    targetCustomers: {
      persona: 'Podcasters, agency owners, business coaches, and YouTube creators with 5k–50k followers',
      painPoint: 'Producing great long-form podcasts but missing 90% of prospective reach because they cannot edit daily TikToks/Reels',
      whereToFind: 'Apple Podcasts top charts, YouTube channel "About" tabs, LinkedIn creator profiles'
    },
    howToGetFirstCustomer: {
      headline: 'The "Free Spec Clip" Outreach Technique',
      steps: [
        'Find a business podcast or creator who rarely posts on Instagram Reels or TikTok.',
        'Take one of their YouTube videos, extract the most captivating 45-second insight, and edit it with dynamic captions and B-roll.',
        'Send them a Loom video or email with the finished clip attached: "I loved your episode on X. I turned this 45-second gem into a viral Reel ready to post. No charge—if you like it, post it! If you want 10 of these every week, here is my rate."',
        'Repeat this with 15 creators. At least 2–3 will immediately ask to hire you.'
      ],
      outreachTemplate: 'Hi [Creator Name]! Big fan of your recent talk on [Topic]. Noticed your team has not repurposed it for TikTok/Reels yet, so I made this finished clip for you: [Drive Link]. Dynamic subtitles, 9:16 vertical crop, and color-graded. Feel free to post it! If you want 12 of these per month, I would love to handle it for you.'
    },
    stepByStepGuide: {
      phase1Setup: [
        'Master CapCut and OpusClip keyboard shortcuts to edit a clip in under 12 minutes',
        'Create a 3-sample portfolio folder demonstrating hook style, typography, and pacing',
        'Define a simple flat monthly package: e.g., 12 ready-to-post short clips for $450/month'
      ],
      phase2Launch: [
        'Conduct targeted cold outreach to 20 creators per week using custom sample clips',
        'Offer a 7-day test trial at half-price with zero long-term commitment',
        'Deliver turnaround within 48 hours to establish unmatched reliability'
      ],
      phase3Scale: [
        'Hire a student or junior editor to handle initial clipping while you manage client communication',
        'Upsell written LinkedIn carousels and email newsletters alongside video clips',
        'Transition from per-clip pricing to $1,500/month recurring retainer contracts'
      ]
    },
    sevenDayActionPlan: [
      {
        id: 'ai-day-1',
        dayNumber: 1,
        title: 'Master the AI short-form workflow',
        objective: 'Test OpusClip, CapCut, and Submagic to build an ultra-fast production assembly line.',
        tasks: [
          'Download a public YouTube podcast interview via free downloader',
          'Run it through OpusClip or CapCut auto-captioning',
          'Experiment with animated keyword highlights, sound effects (whoosh, pop), and zooms'
        ],
        estimatedHours: 2,
        deliverable: 'Your first completed 30-second polished vertical clip in 9:16 format.',
        tips: 'The first 3 seconds decide everything. Ensure the text hook appears on the screen in 0.2 seconds.'
      },
      {
        id: 'ai-day-2',
        dayNumber: 2,
        title: 'Build your 3-clip showcase portfolio',
        objective: 'Create tangible proof of your skill across 3 distinct formats (Business, Fitness, Storytelling).',
        tasks: [
          'Edit 3 different clips showcasing variety: 1 high-energy hook, 1 narrative story, 1 educational tutorial',
          'Upload files to a clean, unlisted Google Drive folder or Notion portfolio page',
          'Write a 2-line case study for each: "Original timestamp -> Hook crafted -> Retention style"'
        ],
        estimatedHours: 2.5,
        deliverable: 'A sleek portfolio link you can paste into client emails without looking amateur.',
        tips: 'Keep file names clean: "[CreatorName]_Sample_ViralHook_Final.mp4".'
      },
      {
        id: 'ai-day-3',
        dayNumber: 3,
        title: 'Build your targeted prospect list of 25 creators',
        objective: 'Identify creators who publish weekly long-form audio/video but have weak short-form presence.',
        tasks: [
          'Search YouTube for podcasts in niches like Real Estate, SaaS, Fitness, or Personal Finance with 5k–30k subs',
          'Check their Instagram and TikTok to confirm they are NOT actively posting polished clips',
          'Find the direct email address or Twitter DM of the host or producer'
        ],
        estimatedHours: 2,
        deliverable: 'Spreadsheet with 25 verified prospects, channel links, and best episode timestamps.',
        tips: 'Do not target Joe Rogan or MrBeast. Target mid-tier founders who feel guilty about neglecting TikTok.'
      },
      {
        id: 'ai-day-4',
        dayNumber: 4,
        title: 'Craft 5 personalized spec clips',
        objective: 'Create 5 tailor-made finished gifts that make saying no nearly impossible.',
        tasks: [
          'Pick the top 5 prospects from your spreadsheet',
          'Select the best 40-second punchline from their latest episode',
          'Edit a finished, watermark-free masterpiece for each of them'
        ],
        estimatedHours: 3,
        deliverable: '5 custom video links hosted on Google Drive or Loom ready for delivery.',
        tips: 'Zero risk for them. When you give them finished work for free, reciprocity kicks in.'
      },
      {
        id: 'ai-day-5',
        dayNumber: 5,
        title: 'Send high-touch personalized outreach',
        objective: 'Deliver the 5 custom gifts with a polite, non-pushy commercial proposal.',
        tasks: [
          'Email or DM the 5 prospects using the Free Spec Clip template',
          'Include a direct viewable preview link (no weird file downloads)',
          'Mention one specific thing you genuinely learned from their show to prove authenticity'
        ],
        estimatedHours: 1.5,
        deliverable: '5 sent personalized pitches logged in your tracker.',
        tips: 'Send on Tuesday or Wednesday morning between 8:30 AM and 10:00 AM in their timezone.'
      },
      {
        id: 'ai-day-6',
        dayNumber: 6,
        title: 'Follow-up & handle client inquiries',
        objective: 'Respond promptly, offer a trial package, and set up invoicing.',
        tasks: [
          'Reply to reactions: "Glad you liked it! Want me to do 8 more this month for $350?"',
          'If no reply after 48 hours, send a courteous 1-line nudge',
          'Set up Stripe or PayPal invoice account with standard service terms'
        ],
        estimatedHours: 1.5,
        deliverable: 'At least 1 active conversation with a qualified buyer or signed pilot agreement.',
        tips: 'Never send a 10-page contract for a $350 trial. Send a simple 3-bullet confirmation email.'
      },
      {
        id: 'ai-day-7',
        dayNumber: 7,
        title: 'Deliver your first paid batch & systematize onboarding',
        objective: 'Deliver on time, delight the client, and secure a monthly retainer.',
        tasks: [
          'Receive the client\'s raw long-form footage or podcast feed',
          'Produce and deliver the first 2 clips ahead of the agreed deadline',
          'Ask for their feedback and propose a monthly recurring subscription'
        ],
        estimatedHours: 2.5,
        deliverable: 'First paid invoice settled and recurring retainer proposal submitted.',
        tips: 'The secret to agency growth is retention: 3 recurring clients at $500/mo = reliable $1,500/mo side income.'
      }
    ],
    proTips: [
      'Offer to directly upload and schedule the posts for them via Buffer or Metricool for an extra $150/mo.',
      'Provide subtitle styling that matches their exact brand colors and typography.',
      'Use ChatGPT to automatically generate 3 viral hook variations for each clip.'
    ],
    risksAndMitigation: [
      'Risk: Client asks for infinite revisions. Mitigation: State upfront: "Includes 1 round of adjustments per clip batch."',
      'Risk: Software costs. Mitigation: Free tiers of CapCut and DaVinci Resolve provide infinite production power.'
    ],
    pricingSuggestion: {
      starter: '$299/mo for 8 Repurposed Clips',
      standard: '$599/mo for 16 Clips + Custom Hooks + Thumbnails',
      premium: '$1,199/mo for Full Content Repurposing (Video + 12 LinkedIn Posts + Newsletter)'
    },
    marketDemandScore: 97,
    isFeatured: true
  },
  {
    id: 'local-seo-google-maps',
    name: 'Local Business Google Maps & Review Optimization',
    category: 'Local B2B Consulting',
    tagline: 'Help local plumbers, dentists, and cafes rank #1 in the Google Maps 3-Pack and gather 5-star reviews',
    explanation: 'Over 80% of local customers choose businesses from the top 3 Google Maps recommendations. Yet countless local contractors, auto mechanics, and dentists have unclaimed profiles, misspelled hours, low-res photos, and zero review strategy. You audit and optimize their Google Business Profile in 2 hours.',
    whyItMatches: 'Perfect if you want high-margin local or hybrid work. Business owners instantly understand the ROI: one extra dental patient or roof repair pays for your fee tenfold.',
    matchScore: 90,
    difficulty: 'Beginner',
    startingBudget: '$0 – $50',
    budgetNumericMax: 50,
    estimatedEarnings: '$800 – $4,000/month',
    earningsNumericMin: 800,
    timeRequired: '4 – 8 hours/week',
    timeNumericHours: 6,
    workType: 'Hybrid',
    requiredSkills: ['Organizing', 'Sales/Marketing', 'Writing'],
    toolsNeeded: [
      { name: 'Google Business Profile Manager', category: 'Platform', cost: '100% Free', purpose: 'Claiming, updating hours, services, and photo galleries', freeTier: true },
      { name: 'Canva', category: 'Graphic Design', cost: 'Free', purpose: 'Designing printable QR code counter cards for instant Google Reviews', freeTier: true },
      { name: 'Loom', category: 'Audit Video', cost: 'Free', purpose: 'Recording 3-minute video audits pointing out lost revenue opportunities', freeTier: true }
    ],
    targetCustomers: {
      persona: 'Local service businesses: plumbers, HVAC technicians, dentists, chiropractors, specialty bakeries',
      painPoint: 'Losing high-value local calls to competitors because their profile is buried on page 2 or has fewer reviews',
      whereToFind: 'Google Maps searching "[Service] in [City]" and scrolling to results #7 through #20'
    },
    howToGetFirstCustomer: {
      headline: 'The 3-Minute Video Audit Outreach',
      steps: [
        'Open Google Maps and search "emergency plumber in [nearby town]" or "pest control".',
        'Find a business with 12 reviews, missing photos, and no listed service menu.',
        'Record a 3-minute Loom video walking through their listing and showing 3 simple fixes that would boost their call volume.',
        'Call or email the owner: "Hi [Owner], made a quick 180s screen recording showing why competitors are taking calls in your neighborhood and 3 quick things you can fix today. Mind if I send you the link?"'
      ],
      outreachTemplate: 'Hi [Owner Name], I was searching for [Service] near [City] and noticed your Google Maps profile is missing your emergency service menu and high-res photos. I recorded a quick 2-minute video showing how fixing this can get you 5-10 extra phone calls per week: [Loom Link]. Would love to set this up for you this Friday if helpful!'
    },
    stepByStepGuide: {
      phase1Setup: [
        'Study Google\'s official Google Business Profile guidelines and category taxonomy',
        'Build a standardized 15-point Local SEO Audit Checklist',
        'Design a high-converting QR code template: "Love our service? Tap here to leave a quick Google review"'
      ],
      phase2Launch: [
        'Perform 10 free video audits for service contractors in your county',
        'Offer an introductory $199 "Complete Google Maps Revival & Review Kit"',
        'Ask the owner to recommend you to other local business owners in their chamber of commerce'
      ],
      phase3Scale: [
        'Package monthly maintenance: $149/mo to post weekly updates, respond to reviews, and upload fresh geotagged photos',
        'Partner with local web designers who build websites but ignore Google Maps SEO',
        'Expand to surrounding cities using automated email sequences'
      ]
    },
    sevenDayActionPlan: [
      {
        id: 'seo-day-1',
        dayNumber: 1,
        title: 'Learn the Google Maps ranking signals',
        objective: 'Understand the 3 core ranking factors: Relevance, Distance, and Prominence.',
        tasks: [
          'Read Google\'s guide on optimizing your local business ranking',
          'Create a 15-point audit checklist (Primary category, Secondary categories, Geocoded photos, Products, Q&A section, Review velocity)',
          'Inspect the #1 ranking competitor in your city to see what they do right'
        ],
        estimatedHours: 2,
        deliverable: 'A ready-to-use 15-point Google Business Audit Spreadsheet.',
        tips: 'Primary business category accounts for over 20% of your ranking power. Picking the wrong category kills visibility.'
      },
      {
        id: 'seo-day-2',
        dayNumber: 2,
        title: 'Find 15 low-hanging fruit local businesses',
        objective: 'Identify local businesses with active operations but neglected profiles.',
        tasks: [
          'Search for 3 high-ticket niches: Roofers, cosmetic dentists, and auto detailing',
          'Look for listings ranking rank 8 to 20 with good ratings (4.5+) but fewer than 25 total reviews',
          'Log owner names, email, phone number, and primary flaws into your spreadsheet'
        ],
        estimatedHours: 1.5,
        deliverable: 'A curated prospect list of 15 high-intent local businesses.',
        tips: 'Prioritize businesses with expensive services ($500+ ticket size). They have budget and care deeply about leads.'
      },
      {
        id: 'seo-day-3',
        dayNumber: 3,
        title: 'Record 3 personalized Loom audits',
        objective: 'Produce 3 compelling, consultative screen recordings highlighting quick revenue wins.',
        tasks: [
          'Open the business\'s profile alongside the #1 competitor',
          'Show how the competitor has 40 photos, updated FAQ, and review keyword tags',
          'Keep your tone humble, respectful, and focused on helping them gain more customer calls'
        ],
        estimatedHours: 2,
        deliverable: '3 personalized Loom video links (under 3 minutes each).',
        tips: 'Do not shame their current page. Say: "You clearly do phenomenal work with 4.9 stars, your profile just isn\'t showing Google how great you are."'
      },
      {
        id: 'seo-day-4',
        dayNumber: 4,
        title: 'Deliver audits & follow up with owners',
        objective: 'Reach the decision-maker directly via phone, email, or a quick friendly in-person stop.',
        tasks: [
          'Send the video link with a brief, friendly summary email',
          'For local stores, consider printing a sample QR review card and dropping by: "Brought you a free gift for your counter"',
          'Follow up within 24 hours to ask if they had questions'
        ],
        estimatedHours: 2,
        deliverable: '3 delivered audits and confirmed receipt by at least 1 owner.',
        tips: 'If calling: "Hi, I don\'t want to sell you anything right now, I just sent a 2-minute video about your Google page that will save you money on ads."'
      },
      {
        id: 'seo-day-5',
        dayNumber: 5,
        title: 'Sign first client & obtain manager access',
        objective: 'Close your first audit & optimization package for $250 – $350.',
        tasks: [
          'Walk client through how to grant "Manager" access via Google Business Profile settings (they keep full ownership)',
          'Send a 1-page agreement outlining deliverables and timeline (48 hours)',
          'Collect 50% deposit via Stripe invoice or Venmo for Business'
        ],
        estimatedHours: 1.5,
        deliverable: 'Signed client onboarding document and backend manager access secured.',
        tips: 'Never ask for their Google password! Always request manager access through business.google.com.'
      },
      {
        id: 'seo-day-6',
        dayNumber: 6,
        title: 'Execute complete profile transformation',
        objective: 'Implement all optimizations to trigger positive Google algorithm signals.',
        tasks: [
          'Update primary and secondary categories accurately',
          'Write a keyword-rich 750-character business description highlighting city names and service guarantees',
          'Populate all service items with descriptions and prices',
          'Upload 15 high-res photos (team, exterior, interior, work in progress)'
        ],
        estimatedHours: 2.5,
        deliverable: '100% complete, optimized profile with a verified health score of 95%+.',
        tips: 'Add 5 common customer questions and comprehensive answers to the public Q&A section.'
      },
      {
        id: 'seo-day-7',
        dayNumber: 7,
        title: 'Deliver review-generation kit & pitch monthly retainer',
        objective: 'Hand over custom review assets and establish a recurring monthly relationship.',
        tasks: [
          'Print or email custom laminated QR code review stands for their checkout desk',
          'Provide the owner with a 2-sentence SMS template they can text happy customers immediately after service',
          'Pitch ongoing monthly management ($149/mo) to keep them at the top of local search'
        ],
        estimatedHours: 2,
        deliverable: 'Final presentation delivered, client testimonial captured, and recurring proposal pending.',
        tips: 'When their customer reviews jump by 5 in week one, they will happily pay you month after month.'
      }
    ],
    proTips: [
      'Encourage customers to mention specific services in their reviews: e.g. "great water heater installation" boosts keyword ranking.',
      'Always respond to both positive and negative reviews within 24 hours using polite, professional keywords.',
      'Add weekly "Google Updates" (like a micro blog post) to show Google the business is vibrant and open.'
    ],
    risksAndMitigation: [
      'Risk: Google verification delays. Mitigation: Advise owner in advance that video verification may take 3-5 days.',
      'Risk: Client expects instant rank 1 tomorrow. Mitigation: Set expectations that local rankings update over 2 to 4 weeks.'
    ],
    pricingSuggestion: {
      starter: '$249 One-Time Complete Profile Overhaul',
      standard: '$499 Overhaul + Custom Review System + 30 Geotagged Photos',
      premium: '$179/month Ongoing Local SEO Maintenance & Review Management'
    },
    marketDemandScore: 95
  },
  {
    id: 'notion-template-studio',
    name: 'Notion Systems Architect & Workspace Designer',
    category: 'Productivity & Tech',
    tagline: 'Build bespoke productivity, CRM, and operating workspaces for startups and busy solopreneurs',
    explanation: 'Freelancers and small agencies waste hours toggling between messy Google Docs, Trello boards, and Slack notes. You build centralized, beautifully formatted Notion "second brains" and project management systems that streamline their operations.',
    whyItMatches: 'Ideal for analytical, organized thinkers who love digital structure and visual tidiness. High hourly effective rate with reusable modular databases.',
    matchScore: 89,
    difficulty: 'Intermediate',
    startingBudget: '$0 (Zero Cost)',
    budgetNumericMax: 0,
    estimatedEarnings: '$500 – $3,000/month',
    earningsNumericMin: 500,
    timeRequired: '5 – 10 hours/week',
    timeNumericHours: 7,
    workType: 'Online',
    requiredSkills: ['Organizing', 'Design', 'Coding'],
    toolsNeeded: [
      { name: 'Notion (Plus Plan)', category: 'Core App', cost: 'Free tier available', purpose: 'Building relational databases, formulas, and rollups', freeTier: true },
      { name: 'Loom', category: 'Handover', cost: 'Free', purpose: 'Recording custom 5-minute training videos for client teams', freeTier: true },
      { name: 'Figma', category: 'Icons & Banners', cost: 'Free', purpose: 'Crafting minimalist brand-matched Notion covers and icon sets', freeTier: true }
    ],
    targetCustomers: {
      persona: 'Solopreneurs, freelance copywriters, boutique design agencies, and creators scaling their client load',
      painPoint: 'Drowning in disjointed notes and missing client deadlines because their project tracking is scattered across 5 tools',
      whereToFind: 'Twitter/X building-in-public community, IndieHackers, LinkedIn operations discussions'
    },
    howToGetFirstCustomer: {
      headline: 'The Free Workspace Audit in Exchange for a Review',
      steps: [
        'Post on Twitter/X or LinkedIn: "Giving away 3 free Notion workspace audits for creative agency founders feeling overwhelmed by client deadlines."',
        'Jump on a 20-minute Zoom call or review their current setup asynchronously.',
        'Deliver a clean wireframe solving their #1 bottleneck (e.g. centralized client portal).',
        'Offer to build out the full system for an introductory fee of $300.'
      ],
      outreachTemplate: 'Hey [Name], saw your post about managing 8 client projects at once. I built a Notion client portal system that cuts weekly status update emails by 50%. Would love to share a free clone link with you to see if it simplifies your week.'
    },
    stepByStepGuide: {
      phase1Setup: [
        'Master Notion formulas 2.0, relational databases, rollups, and synced blocks',
        'Build a standardized "Master Operating System" template you can duplicate and adapt in 30 minutes',
        'Create a clean personal portfolio Notion page showing interactive sandbox demos'
      ],
      phase2Launch: [
        'Engage daily in #Notion and #BuildInPublic conversations sharing useful formula snippets',
        'List your starter templates on Notion\'s official template gallery for organic discovery',
        'Land your first 2 custom client builds through direct community referrals'
      ],
      phase3Scale: [
        'Transition from hourly billing to flat-rate $750 – $1,500 "Notion VIP Days"',
        'Add automation integrations with Make.com to sync Notion with Gmail and Stripe',
        'Create recurring maintenance retainers for monthly database cleanups'
      ]
    },
    sevenDayActionPlan: [
      {
        id: 'notion-day-1',
        dayNumber: 1,
        title: 'Master advanced database relations & formulas',
        objective: 'Ensure complete technical fluency with Notion Formulas 2.0 and automated buttons.',
        tasks: [
          'Review Notion\'s official documentation on dynamic dates and relation rollups',
          'Build a modular project/task database with automatic progress bars',
          'Configure instant one-click automation buttons: "Create New Client Project"'
        ],
        estimatedHours: 2,
        deliverable: 'A bulletproof Master Task & Project Engine template.',
        tips: 'Clients love visual progress bars and automated countdowns until project launch.'
      },
      {
        id: 'notion-day-2',
        dayNumber: 2,
        title: 'Design a reusable "Agency OS" prototype',
        objective: 'Construct a flagship operating system template tailored to creative freelancers.',
        tasks: [
          'Include 4 essential dashboards: Client CRM, Project Kanban, Invoice Tracker, and Resource Hub',
          'Apply minimalist, cohesive color palettes and custom SVGs or icons',
          'Test mobile responsiveness on Notion\'s smartphone app'
        ],
        estimatedHours: 3,
        deliverable: 'Full "Agency OS" MVP ready to demonstrate to prospective clients.',
        tips: 'A dark-mode optimized aesthetic immediately communicates high-end professionalism.'
      },
      {
        id: 'notion-day-3',
        dayNumber: 3,
        title: 'Create an interactive public portfolio',
        objective: 'Build a public Notion page where potential buyers can click around in a test sandbox.',
        tasks: [
          'Set up a public Notion page with "Duplicate" disabled for protected views',
          'Embed interactive gif previews and video walkthroughs',
          'Add a clear Calendly booking widget: "Book a 15-minute Workspace Discovery Call"'
        ],
        estimatedHours: 2,
        deliverable: 'Live public portfolio URL with interactive preview.',
        tips: 'Showing is 10x better than telling. Let them click through a real test dashboard.'
      },
      {
        id: 'notion-day-4',
        dayNumber: 4,
        title: 'Execute targeted outreach to 10 overwhelmed founders',
        objective: 'Connect with solopreneurs actively complaining about disorganization or tool fatigue.',
        tasks: [
          'Search X and LinkedIn for "tired of ClickUp", "Asana is too clunky", or "messy Trello"',
          'Leave thoughtful suggestions and offer a free 10-minute video review of their workflow',
          'Send direct messages offering your starter client portal template'
        ],
        estimatedHours: 2,
        deliverable: '10 personalized messages sent to warm prospects.',
        tips: 'Position yourself as an Operations Partner, not just a software tutor.'
      },
      {
        id: 'notion-day-5',
        dayNumber: 5,
        title: 'Conduct discovery call & draft proposal',
        objective: 'Uncover the client\'s daily operational bottlenecks and propose a fixed-scope build.',
        tasks: [
          'Ask: "What task takes you 30 minutes every morning that should take 30 seconds?"',
          'Map their current manual steps to automated Notion views',
          'Send a 1-page proposal with a single package: $450 flat fee with 48-hour delivery'
        ],
        estimatedHours: 1.5,
        deliverable: 'Agreed client scope with 50% deposit received.',
        tips: 'Keep scope locked: specify exactly what databases and pages are included.'
      },
      {
        id: 'notion-day-6',
        dayNumber: 6,
        title: 'Build the custom workspace & record Loom guide',
        objective: 'Construct the client\'s private environment and document how to use it.',
        tasks: [
          'Duplicate your base template and customize properties to the client\'s branding and nomenclature',
          'Migrate up to 10 sample active projects to ensure it is immediately useful from minute one',
          'Record a 5-minute Loom walkthrough explaining the logic and shortcut keys'
        ],
        estimatedHours: 3,
        deliverable: 'Completed workspace transferred to client workspace with video instructions.',
        tips: 'A clear handover video eliminates 95% of client confusion and questions.'
      },
      {
        id: 'notion-day-7',
        dayNumber: 7,
        title: 'Handover, client review & submit to template gallery',
        objective: 'Complete final signoff, collect testimonial, and repurpose into a public digital product.',
        tasks: [
          'Hold a 15-minute live Q&A handover session or send celebratory handover email',
          'Request a 2-sentence written recommendation or Twitter shoutout',
          'Strip out proprietary client data and publish the generic architecture to Gumroad for passive sales'
        ],
        estimatedHours: 2,
        deliverable: 'Final payment received, 5-star testimonial secured, and template listed for passive income.',
        tips: 'Every custom consulting job can be turned into an evergreen $29 template download.'
      }
    ],
    proTips: [
      'Package your services as "The 1-Day Notion Makeover" for a flat $600.',
      'Embed Make.com automations so new Stripe sales auto-create client cards in their Notion.',
      'Submit your templates to Notion\'s official curated creators program for massive distribution.'
    ],
    risksAndMitigation: [
      'Risk: Client team resists using Notion. Mitigation: Build a super simple "My Daily Dashboard" view so non-tech users only see their 3 daily tasks.',
      'Risk: Scope creep. Mitigation: Limit consulting to one primary department at a time (e.g. Sales CRM first, HR later).'
    ],
    pricingSuggestion: {
      starter: '$350 Starter Workflow Setup',
      standard: '$750 Complete Agency Operating System + Video Training',
      premium: '$1,500 Full Business OS with Make.com Automations + 30 Days Support'
    },
    marketDemandScore: 91
  },
  {
    id: 'niche-curated-newsletter',
    name: 'Niche Curated Newsletter & Sponsorships',
    category: 'Media & Publishing',
    tagline: 'Curate the top 5 industry news pieces, tools, and insights into a 5-minute weekly email',
    explanation: 'Professionals in fields like Climate Tech, AI tools, Remote Work, or Boutique Hospitality are inundated with information. By reading 50 articles and summarizing the top 5 with witty, actionable bullet points once a week, you build a loyal, high-income subscriber audience that sponsors pay $200–$1,000 per issue to reach.',
    whyItMatches: 'Great for writers, researchers, and voracious readers who enjoy learning. Minimal technical overhead with zero inventory.',
    matchScore: 88,
    difficulty: 'Beginner',
    startingBudget: '$0 (Zero Cost)',
    budgetNumericMax: 0,
    estimatedEarnings: '$300 – $2,500/month',
    earningsNumericMin: 300,
    timeRequired: '4 – 8 hours/week',
    timeNumericHours: 5,
    workType: 'Online',
    requiredSkills: ['Writing', 'Organizing', 'Social Media'],
    toolsNeeded: [
      { name: 'Beehiiv / Substack', category: 'Newsletter Engine', cost: '100% Free tier', purpose: 'Email broadcasting, subscriber management, and analytics', freeTier: true },
      { name: 'Canva', category: 'Branding', cost: 'Free', purpose: 'Header graphics, logo, and social promo cards', freeTier: true },
      { name: 'Feedly / Google Alerts', category: 'Curation', cost: 'Free', purpose: 'Aggregating industry news sources into a single daily reading stream', freeTier: true }
    ],
    targetCustomers: {
      persona: 'High-earning niche professionals, founders, and enthusiasts with limited reading time',
      painPoint: 'Information overload; wanting the signal without 4 hours of doomscrolling industry Twitter',
      whereToFind: 'LinkedIn topic feeds, Subreddits, Hacker News, industry conferences'
    },
    howToGetFirstCustomer: {
      headline: 'The First 100 Subscribers via Organic High-Value Curation',
      steps: [
        'Pick a razor-sharp angle: e.g. "AI tools specifically for boutique law firms" rather than generic "AI news".',
        'Write Issue #0 featuring the 5 biggest takeaways and 1 actionable cheat sheet.',
        'Post the breakdown as an educational Twitter thread or LinkedIn carousel with a link to subscribe for the full issue.',
        'Comment on top influencer posts in your niche sharing 1 helpful insight from your issue.'
      ],
      outreachTemplate: 'Hey [Name], saw you were discussing [Topic]. We just published a 3-minute breakdown of the top 5 tools solving this in this week\'s issue of [Newsletter Name]. Free read here: [Link]. Hope it is helpful for your team!'
    },
    stepByStepGuide: {
      phase1Setup: [
        'Set up a free Beehiiv or Substack account with a memorable, punchy publication name',
        'Configure your welcome email to ask a question to train Gmail spam filters ("What is your biggest hurdle with [Topic]?")',
        'Design a clean, 1-column responsive email layout with scannable bold headings'
      ],
      phase2Launch: [
        'Publish consistently on the exact same day and hour every single week (e.g. Tuesday 8:00 AM EST)',
        'Cross-promote with other similarly sized newsletters using Beehiiv\'s recommendation network',
        'Gather feedback and testimonials from your first 250 engaged readers'
      ],
      phase3Scale: [
        'Reach out to SaaS companies and products in your vertical once you hit 1,000 subscribers',
        'Charge $150 – $350 per classified or header sponsor spot',
        'Add a premium paid tier or exclusive monthly deep-dive report for $10/month'
      ]
    },
    sevenDayActionPlan: [
      {
        id: 'news-day-1',
        dayNumber: 1,
        title: 'Choose a high-sponsor-value niche',
        objective: 'Select an audience with high purchasing power that advertisers eagerly pay to reach.',
        tasks: [
          'Evaluate 3 verticals: B2B SaaS, Health & Longevity, or Niche Real Estate Investing',
          'Verify that sponsors actively advertise in this space by checking competitor newsletters on SponsorGap',
          'Define your unique editorial voice: witty, data-dense, or no-nonsense executive'
        ],
        estimatedHours: 2,
        deliverable: 'Newsletter Concept Sheet: Name, tagline, target reader, and monetization vision.',
        tips: 'Business professionals have corporate credit cards. B2B newsletters earn 5x higher sponsorship CPMs than entertainment.'
      },
      {
        id: 'news-day-2',
        dayNumber: 2,
        title: 'Configure publication & welcome sequence on Beehiiv',
        objective: 'Set up your landing page and deliverability infrastructure.',
        tasks: [
          'Create a free publication on Beehiiv or Substack',
          'Write a high-converting signup landing page: "Get the 5-minute weekly briefing read by 2,000+ [Professionals]"',
          'Craft an automated Welcome Email that lands in Primary inbox'
        ],
        estimatedHours: 1.5,
        deliverable: 'Live landing page URL ready to collect reader emails.',
        tips: 'Ask readers to reply "YES" to your first email. This signals to Gmail that you are a trusted friend, not promo spam.'
      },
      {
        id: 'news-day-3',
        dayNumber: 3,
        title: 'Set up your automated research feed',
        objective: 'Build an information engine that surfaces hidden gems without hours of manual searching.',
        tasks: [
          'Set up Feedly or RSS feeds for 10 high-quality niche blogs, research portals, and newsletters',
          'Create Google Alerts for key emerging industry keywords',
          'Bookmark 5 subreddits and create a curated Twitter/X list of top 20 thinkers'
        ],
        estimatedHours: 1.5,
        deliverable: 'A centralized daily reading hub with 20+ verified data streams.',
        tips: 'Save articles throughout the week in a Notion folder so writing the email takes under 90 minutes.'
      },
      {
        id: 'news-day-4',
        dayNumber: 4,
        title: 'Write and polish Issue #1',
        objective: 'Produce a masterclass introductory edition packed with high utility.',
        tasks: [
          'Select the 3 best news stories, 1 tool of the week, and 1 actionable career tip',
          'Write concise summaries: Why it matters + The data + What to do next',
          'Send a test email to your own phone and verify layout, images, and links'
        ],
        estimatedHours: 2.5,
        deliverable: 'Draft of Issue #1 scheduled for publication.',
        tips: 'Use bullet points and bold text generously. 70% of readers will scan on mobile while drinking coffee.'
      },
      {
        id: 'news-day-5',
        dayNumber: 5,
        title: 'Publish Issue #1 & get your first 30 readers',
        objective: 'Launch publicly and recruit your founding reader circle.',
        tasks: [
          'Publish Issue #1 to the web and send to your initial contacts',
          'Post a summary thread on LinkedIn and X highlighting the #1 surprising takeaway',
          'Personally message 20 colleagues and friends interested in the subject'
        ],
        estimatedHours: 2,
        deliverable: 'First official send broadcasted and initial 30+ subscribers acquired.',
        tips: 'Never add people to your email list without their explicit consent. Always let them opt-in willingly.'
      },
      {
        id: 'news-day-6',
        dayNumber: 6,
        title: 'Engage niche communities & participate in discussions',
        objective: 'Drive viral organic subscribers through authentic value sharing.',
        tasks: [
          'Find 3 active Reddit threads or LinkedIn posts debating this week\'s news topic',
          'Leave an insightful 3-paragraph comment summarizing your research',
          'Include a tasteful sign-off: "Covered the full breakdown in our weekly briefing for [Audience]"'
        ],
        estimatedHours: 2,
        deliverable: 'Engagement on 5 community platforms and measurable subscriber bump.',
        tips: 'Provide 90% of the value in the comment itself so readers feel grateful and crave more.'
      },
      {
        id: 'news-day-7',
        dayNumber: 7,
        title: 'Analyze open rates & compile prospective sponsor list',
        objective: 'Review initial deliverability metrics and build your future advertiser database.',
        tasks: [
          'Check open rate (aim for 45%+) and click-through rate',
          'List 10 relevant software tools or job boards that sell to your exact audience',
          'Set a target subscriber milestone (e.g. 500 readers) to pitch your first $100 sponsor spot'
        ],
        estimatedHours: 1.5,
        deliverable: 'Analytics report logged and 10 sponsor targets mapped out for future outreach.',
        tips: 'A tightly targeted list of 1,000 engaged VP-level subscribers can charge more than 20,000 random teenagers.'
      }
    ],
    proTips: [
      'Activate Beehiiv\'s "Recommendations" feature to automatically swap subscribers with other creators.',
      'Add a "Classified Ads" section for $35/week as a low barrier for early sponsors.',
      'Host monthly AMAs or roundups with guest experts to expand into their networks.'
    ],
    risksAndMitigation: [
      'Risk: Burning out on writing. Mitigation: Keep the format strictly templated (3 insights, 1 tool, 1 quote) so it never takes more than 2 hours to write.',
      'Risk: Email deliverability drops. Mitigation: Authenticate your custom domain with DKIM and SPF records.'
    ],
    pricingSuggestion: {
      starter: 'Free to build initial 500 subscribers',
      standard: '$150 per Sponsored Issue (at 1,000 subscribers)',
      premium: '$500 Monthly Sponsor Package (4 Issues + Dedicated Blast)'
    },
    marketDemandScore: 89
  },
  {
    id: 'b2b-lead-generation',
    name: 'B2B Cold Outreach & Lead Pipeline Specialist',
    category: 'Sales & Growth',
    tagline: 'Book qualified discovery calls on founder calendars using targeted email & LinkedIn campaigns',
    explanation: 'Every agency, software startup, and consultant needs sales calls to survive, but most hate cold calling and lack time to build prospect lists. You build verified lead lists, write compelling cold emails, and deliver warm sales appointments directly onto their Calendly.',
    whyItMatches: 'Ideal if you have strong communication and persuasion skills. One of the highest earning side hustles because you tie directly to client revenue.',
    matchScore: 87,
    difficulty: 'Intermediate',
    startingBudget: '$30 – $80',
    budgetNumericMax: 80,
    estimatedEarnings: '$1,000 – $5,000/month',
    earningsNumericMin: 1000,
    timeRequired: '6 – 12 hours/week',
    timeNumericHours: 9,
    workType: 'Online',
    requiredSkills: ['Sales/Marketing', 'Writing', 'Organizing'],
    toolsNeeded: [
      { name: 'Apollo.io', category: 'Lead Sourcing', cost: 'Free tier / $49', purpose: 'Finding verified business emails and decision-maker job titles', freeTier: true },
      { name: 'Instantly.ai', category: 'Cold Email', cost: '$37/mo or Free Trial', purpose: 'Email warmup and automated sequence sending', freeTier: false },
      { name: 'Google Workspace', category: 'Secondary Domains', cost: '$6/mo', purpose: 'Setting up dedicated outreach domains that protect main domain reputation', freeTier: false }
    ],
    targetCustomers: {
      persona: 'B2B service providers: web development shops, SEO agencies, fractional CFOs, cybersecurity consultants',
      painPoint: 'Feast-or-famine referral cycles; empty sales pipelines with no predictable way to generate new client calls',
      whereToFind: 'Clutch.co directories, LinkedIn Sales Navigator, Upwork agency profiles'
    },
    howToGetFirstCustomer: {
      headline: 'The "Pay-Per-Qualified-Call" Risk-Free Offer',
      steps: [
        'Identify 10 boutique agencies with case studies but small sales teams.',
        'Pitch a 100% performance model: "I will book 3 qualified sales calls with your ideal clients. You only pay $150 per call that actually attends and fits your budget."',
        'Because there is zero upfront risk, agency owners will jump at the opportunity.',
        'Once you prove you can deliver calls, convert them into a $1,500/month retainer.'
      ],
      outreachTemplate: 'Hi [Founder], noticed your agency builds incredible Shopify stores for luxury apparel brands. Are you looking to add 2-3 qualified brand meetings to your calendar this month? We work strictly on performance—you only pay for meetings that actually show up and meet your revenue criteria. Worth a quick 5-min chat?'
    },
    stepByStepGuide: {
      phase1Setup: [
        'Set up a secondary domain (e.g. get[yourbrand].com) with SPF, DKIM, and DMARC records to protect deliverability',
        'Learn Apollo.io filters: company size, industry, revenue, and active hiring signals',
        'Master the 4-sentence cold email formula: Trigger -> Problem -> Solution -> Soft CTA'
      ],
      phase2Launch: [
        'Run warm-up on email accounts for 14 days before launching outreach',
        'A/B test two subject lines and two value propositions on a 200-contact sample list',
        'Respond to positive replies within 15 minutes to book calendar slots while intent is high'
      ],
      phase3Scale: [
        'Automate lead scraping and AI personalization using clay.com or OpenAI API',
        'Increase price per booked call to $250 – $400 for high-ticket industries like legal or enterprise software',
        'Sign 3 clients on $2,000/mo retainer + commission deals'
      ]
    },
    sevenDayActionPlan: [
      {
        id: 'b2b-day-1',
        dayNumber: 1,
        title: 'Master modern cold email deliverability rules',
        objective: 'Learn how to avoid spam folders and maintain pristine email reputation.',
        tasks: [
          'Understand why sending cold emails from your primary business domain is dangerous',
          'Learn the technical setup for SPF, DKIM, DMARC, and custom tracking domains',
          'Study the 2024 Google and Yahoo sender compliance requirements'
        ],
        estimatedHours: 2,
        deliverable: 'Deliverability Checklist and domain setup roadmap.',
        tips: 'Never send 500 emails on day 1. Gradual warmup over 2 weeks is mandatory for success.'
      },
      {
        id: 'b2b-day-2',
        dayNumber: 2,
        title: 'Learn Apollo.io prospect search & filtering',
        objective: 'Learn to extract ultra-targeted lists of buyers who are currently experiencing acute pain.',
        tasks: [
          'Create a free Apollo.io account',
          'Practice filtering by: Title (e.g. VP Marketing), Headcount (11-50), and Tech Stack',
          'Extract and clean a test batch of 25 leads, verifying email bounce status'
        ],
        estimatedHours: 2,
        deliverable: 'Clean spreadsheet of 25 validated decision-maker contacts.',
        tips: 'Filtering by companies that recently hired or raised funds signals active budget to spend.'
      },
      {
        id: 'b2b-day-3',
        dayNumber: 3,
        title: 'Write high-converting cold email scripts',
        objective: 'Draft concise, human outreach copy that reads like an email from a peer, not marketing spam.',
        tasks: [
          'Write a 4-sentence email: 1) Relevant observation, 2) Core pain point, 3) Proof point, 4) Low-friction ask',
          'Draft 2 follow-up messages providing additional value (case study snippet, quick observation)',
          'Eliminate buzzwords like "synergy", "revolutionary", or "quick 30-min sync"'
        ],
        estimatedHours: 2,
        deliverable: '3-stage cold email sequence template ready for customization.',
        tips: 'Low friction CTAs win: "Open to seeing a 60-second video on how we did this?" converts 3x higher than "Can we book a 30-minute call?"'
      },
      {
        id: 'b2b-day-4',
        dayNumber: 4,
        title: 'Find and pitch 5 target agency clients',
        objective: 'Pitch your lead generation service to founders with high average contract values.',
        tasks: [
          'Identify 5 agencies (Web Design, Video Production, or Cyber Consulting) with 5–20 employees',
          'Reach out via LinkedIn or email with the "Pay-Per-Qualified-Call" risk-free offer',
          'Offer to prove your system with a pilot batch of 3 calls'
        ],
        estimatedHours: 2,
        deliverable: '5 agency pitches delivered with positive response tracking.',
        tips: 'Agency founders know that closing one client for $5,000 makes paying you $200 for a meeting an absolute no-brainer.'
      },
      {
        id: 'b2b-day-5',
        dayNumber: 5,
        title: 'Sign pilot agreement & define Ideal Customer Profile',
        objective: 'Finalize client qualification criteria so you only target high-fit leads.',
        tasks: [
          'Define the exact qualification rules: e.g. "Must have at least $1M annual revenue and 10 employees"',
          'Collect the client\'s best case study and testimonial numbers',
          'Set up Calendly routing with qualification survey questions'
        ],
        estimatedHours: 1.5,
        deliverable: 'Signed Pilot Agreement and agreed Ideal Customer Profile document.',
        tips: 'A qualified call requires the prospect to have budget, authority, need, and urgency.'
      },
      {
        id: 'b2b-day-6',
        dayNumber: 6,
        title: 'Build campaign & launch 100 targeted touches',
        objective: 'Deploy the campaign with verified contacts and monitor early open/reply metrics.',
        tasks: [
          'Scrape and verify 100 contacts matching the client\'s exact criteria',
          'Personalize line 1 of each email referencing their current company announcements or projects',
          'Launch initial batch scheduled across morning hours'
        ],
        estimatedHours: 2.5,
        deliverable: '100 personalized cold emails dispatched with open tracking.',
        tips: 'Aim for a 60%+ open rate and an 8%+ reply rate on your initial batch.'
      },
      {
        id: 'b2b-day-7',
        dayNumber: 7,
        title: 'Manage replies, book first sales meeting & invoice',
        objective: 'Turn positive email replies into scheduled calendar slots and get paid.',
        tasks: [
          'Respond to interested leads within 10 minutes providing the client\'s booking link',
          'Confirm prospect fits the qualification criteria',
          'Notify client: "Call booked on your calendar for Thursday at 2 PM! Invoice for $150 attached."'
        ],
        estimatedHours: 2,
        deliverable: 'First live qualified sales call confirmed on client calendar and invoice settled.',
        tips: 'Send a calendar reminder email to the prospect 2 hours before the call to ensure 90%+ show-up rate.'
      }
    ],
    proTips: [
      'Offer to warm up their LinkedIn inbox alongside email for omnichannel touchpoints.',
      'Always qualify leads thoroughly—a client will happily pay for 3 great calls over 15 unqualified duds.',
      'Record quick personalized Loom videos in follow-up emails for a 40% response surge.'
    ],
    risksAndMitigation: [
      'Risk: Email accounts getting flagged as spam. Mitigation: Never send more than 30 emails per account per day and maintain automated warmup.',
      'Risk: Prospect no-shows. Mitigation: Send an SMS or calendar nudge with a brief agenda 2 hours prior.'
    ],
    pricingSuggestion: {
      starter: '$150 – $250 per Qualified Booked Meeting (Performance)',
      standard: '$1,200/month Base Retainer + $100 per Booked Call',
      premium: '$2,500/month Full Pipeline Management (Email + LinkedIn + CRM)'
    },
    marketDemandScore: 96
  },
  {
    id: 'mobile-auto-detailing',
    name: 'Eco-Friendly Mobile Car Spa & Detailing',
    category: 'Local Hands-on Services',
    tagline: 'High-end waterless auto cleaning and interior detailing delivered right in client driveways',
    explanation: 'Car owners love clean vehicles but hate losing 2 hours waiting in dirty car wash waiting rooms on their Saturday morning. You bring professional interior shampooing, steam cleaning, and exterior ceramic spray directly to their home driveway or corporate office parking lot while they work.',
    whyItMatches: 'Ideal for energetic people seeking hands-on, offline work with immediate cash flow. No expensive storefront rent needed—your trunk or back seat is your mobile shop.',
    matchScore: 86,
    difficulty: 'Beginner',
    startingBudget: '$150 – $350',
    budgetNumericMax: 350,
    estimatedEarnings: '$800 – $3,500/month',
    earningsNumericMin: 800,
    timeRequired: '6 – 15 hours/week',
    timeNumericHours: 10,
    workType: 'Offline',
    requiredSkills: ['Handcrafting', 'Organizing', 'Sales/Marketing'],
    toolsNeeded: [
      { name: 'Shop-Vac / Portable Extractor', category: 'Interior Cleaning', cost: '$80 – $150', purpose: 'Deep vacuuming carpets, seats, and pet hair extraction', freeTier: false },
      { name: 'Waterless Wash & Ceramic Spray', category: 'Chemicals', cost: '$40', purpose: 'Scratch-free exterior cleaning without requiring a water hose hookup', freeTier: false },
      { name: 'Microfiber Towels & Detailing Brushes', category: 'Accessories', cost: '$30', purpose: 'Gentle vent dusting, screen cleaning, and streak-free windows', freeTier: false }
    ],
    targetCustomers: {
      persona: 'Busy suburban families with minivans/SUVs, dog owners, luxury car enthusiasts, and corporate workers',
      painPoint: 'Kids spilling food, ground-in pet fur, and zero free time to visit a detailing shop during business hours',
      whereToFind: 'Neighborhood Nextdoor apps, local Facebook community groups, corporate office parks'
    },
    howToGetFirstCustomer: {
      headline: 'The Nextdoor "Weekend Driveway Demo" Campaign',
      steps: [
        'Detail your own vehicle (or a friend\'s car) to showroom perfection.',
        'Take crisp before/after photos of the dirty floor mats and dog-hair covered seats.',
        'Post on Nextdoor or local Facebook group: "Hey neighbors! Doing 3 mobile interior vehicle cleanings this Saturday in [Neighborhood] at 30% off to build local reviews. I bring all equipment right to your driveway."',
        'Ask the first 2 clients to post a photo of their sparkling clean car in the neighborhood chat.'
      ],
      outreachTemplate: 'Hi neighbors! If your car is suffering from winter salt, kid snacks, or pet hair, I am offering mobile interior detailing right in your driveway this weekend. 100% eco-friendly, zero mess, and takes just 90 minutes while you relax inside. Doing 3 spots at $99 (regularly $150). Send me a DM to reserve your time!'
    },
    stepByStepGuide: {
      phase1Setup: [
        'Assemble your mobile detailing kit in 2 compact storage totes that fit easily in any car trunk',
        'Practice on family vehicles to master rapid 75-minute turnaround techniques',
        'Set up a simple square/Stripe card reader for seamless contactless driveway payments'
      ],
      phase2Launch: [
        'Launch weekly posts on Nextdoor and local community groups on Thursday evenings',
        'Offer a "Two Cars Same Driveway" discount so neighbors book together',
        'Leave a branded thank-you card and fresh pine scent hanger in every completed car'
      ],
      phase3Scale: [
        'Partner with local corporate offices to detail employee cars in the parking lot during workdays',
        'Introduce monthly subscription maintenance: $80/mo for a monthly driveway spruce-up',
        'Hire an assistant on weekends and run 2 mobile setups simultaneously'
      ]
    },
    sevenDayActionPlan: [
      {
        id: 'det-day-1',
        dayNumber: 1,
        title: 'Acquire core detailing gear & chemical supplies',
        objective: 'Gather professional-grade equipment on a smart, lean budget.',
        tasks: [
          'Purchase a high-suction portable wet/dry vacuum ($60–$90)',
          'Buy a pack of 24 edgeless microfiber towels, drill brush attachment kit, and interior APC (All-Purpose Cleaner)',
          'Get high-gloss tire shine and ceramic detail spray'
        ],
        estimatedHours: 2,
        deliverable: 'Fully stocked, organized mobile detailing kit organized in trunk totes.',
        tips: 'Color-code your microfiber towels: blue for interior dash, green for glass, yellow for wheels. Never cross-contaminate.'
      },
      {
        id: 'det-day-2',
        dayNumber: 2,
        title: 'Execute a transformation test & shoot portfolio photos',
        objective: 'Detail a heavily soiled vehicle and capture high-contrast before/after content.',
        tasks: [
          'Detail a family member\'s SUV or friend\'s pet-hair filled backseat',
          'Photograph split-screen before and after shots (tape down a line on the dirty carpet, clean one half, photograph contrast)',
          'Time yourself to establish a realistic 90-minute completion benchmark'
        ],
        estimatedHours: 3,
        deliverable: '5 jaw-dropping before/after photo comparisons ready for marketing.',
        tips: 'Clean floor mats and steering wheel emblems make the biggest visual impact in photos.'
      },
      {
        id: 'det-day-3',
        dayNumber: 3,
        title: 'Set service menus, packages & pricing structure',
        objective: 'Define simple, straightforward packages that customers can choose in 10 seconds.',
        tasks: [
          'Package 1: Express Interior Clean & Refresh ($89 sedans / $109 SUVs)',
          'Package 2: Complete Interior Deep Clean + Ceramic Hand Wash ($149 / $179)',
          'Define optional add-ons: Pet Hair Removal ($30), Engine Bay Clean ($40)'
        ],
        estimatedHours: 1.5,
        deliverable: '1-page visual price menu created in Canva.',
        tips: 'Charge extra for heavy pet hair and bio-mess upfront to prevent surprise awkwardness on site.'
      },
      {
        id: 'det-day-4',
        dayNumber: 4,
        title: 'Launch local Nextdoor & neighborhood promotion',
        objective: 'Publish your weekend availability to local homeowners within a 5-mile radius.',
        tasks: [
          'Write a warm, neighborly post on Nextdoor and 2 local Facebook Buy/Sell/Community groups',
          'Include 3 of your best before/after photos',
          'Offer 3 promotional slots for this Saturday: "First 3 bookings get complimentary ceramic tire shine"'
        ],
        estimatedHours: 1.5,
        deliverable: '3 public community posts live with notification alerts turned on.',
        tips: 'Post on Thursday at 7:00 PM when parents are relaxing at home planning their weekend chores.'
      },
      {
        id: 'det-day-5',
        dayNumber: 5,
        title: 'Book slots, route schedule & prep communication',
        objective: 'Confirm customer addresses, vehicle models, and prepare logistical route.',
        tasks: [
          'Respond to DMs within 10 minutes to secure deposit or calendar slot',
          'Gather: Vehicle make/model, driveway access confirmation, and payment method',
          'Plan driving route to minimize travel time between appointments'
        ],
        estimatedHours: 1.5,
        deliverable: '3 scheduled weekend client appointments with confirmed addresses.',
        tips: 'Ask if they have an outdoor electrical outlet available; this saves battery power.'
      },
      {
        id: 'det-day-6',
        dayNumber: 6,
        title: 'Execute first 2 mobile client details',
        objective: 'Deliver impeccable customer service, on-time arrival, and flawless workmanship.',
        tasks: [
          'Send an "On my way" text 15 minutes before arrival',
          'Perform a 2-minute pre-inspection with owner to note any pre-existing scratches',
          'Complete detailing within 90 minutes and invite client for final walk-around inspection'
        ],
        estimatedHours: 4,
        deliverable: '2 completed vehicle details and $200+ cash/card revenue collected.',
        tips: 'Leave a chilled bottle of water and custom mints in their cupholder with a handwritten thank-you card.'
      },
      {
        id: 'det-day-7',
        dayNumber: 7,
        title: 'Collect 5-star reviews & lock in monthly upkeep',
        objective: 'Convert happy driveway customers into recurring monthly subscribers.',
        tasks: [
          'Text client: "Hope you enjoyed driving your sparkling clean ride today! If you have 30 seconds, a quick review on Nextdoor helps our family business tremendously: [Link]"',
          'Offer a monthly subscription maintenance plan: "Would you like me to stop by once every 4 weeks to keep it in showroom condition for $79/mo?"',
          'Reinvest $50 from profits into higher-volume spray bottles and commercial chemicals'
        ],
        estimatedHours: 1.5,
        deliverable: '2 glowing neighborhood reviews posted and first recurring subscriber signed.',
        tips: 'When neighbors see your car parked in a driveway detailing a vehicle, they will frequently walk over to ask for your card.'
      }
    ],
    proTips: [
      'Carry printed business cards or flyers—neighbors always walk over and ask "how much for mine?"',
      'Target corporate office parks: get permission from the property manager to detail 5 cars in the lot during office hours.',
      'Invest in an ozone machine later ($60) to charge $75 for cigarette smoke or pet odor elimination.'
    ],
    risksAndMitigation: [
      'Risk: Rain or bad weather. Mitigation: Offer a complimentary rain guarantee: "If it rains within 48 hours, free exterior touch-up."',
      'Risk: Scratches or sensitive electronics. Mitigation: Always spray cleaning solution onto towel, never directly onto digital touchscreens.'
    ],
    pricingSuggestion: {
      starter: '$89 Interior Express Vacuum & Wipe Down',
      standard: '$169 Full Interior Deep Steam + Exterior Ceramic Wash',
      premium: '$269 Executive Package + Paint Sealant + Pet Hair Extraction'
    },
    marketDemandScore: 92
  }
];

export const SKILL_CATEGORIES = [
  'Writing',
  'Design',
  'Coding',
  'Video Editing',
  'Sales/Marketing',
  'Organizing',
  'Handcrafting',
  'Teaching/Tutoring',
  'Social Media',
  'Photography',
  'Finance/Bookkeeping',
  'Fitness',
  'Willing to learn'
];

export const INTEREST_CATEGORIES = [
  'Technology & AI',
  'Business & Finance',
  'Fitness & Health',
  'Creative Arts & Crafts',
  'Productivity & Systems',
  'Automotive & Hands-on',
  'Media & Publishing',
  'Local Community & Services',
  'Education & Coaching',
  'Travel & Lifestyle'
];
