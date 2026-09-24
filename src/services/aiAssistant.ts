import { SideHustle } from '../types';

export async function askSideHustleAssistant(
  hustle: SideHustle,
  question: string,
  chatHistory: { role: string; text: string }[]
): Promise<string> {
  // First try backend API endpoint
  try {
    const res = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        hustleName: hustle.name,
        hustleCategory: hustle.category,
        budget: hustle.startingBudget,
        time: hustle.timeRequired,
        firstCustomerPlaybook: hustle.howToGetFirstCustomer,
        question,
        chatHistory,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.reply) {
        return data.reply;
      }
    }
  } catch (err) {
    console.warn('Backend AI API unavailable, using contextual engine', err);
  }

  // Intelligent Contextual Heuristic Engine
  const q = question.toLowerCase();

  if (q.includes('price') || q.includes('charge') || q.includes('cost') || q.includes('rate')) {
    return `For **${hustle.name}**, here is the recommended 3-tier pricing strategy:\n\n` +
      `• **Starter / Launch Tier:** ${hustle.pricingSuggestion.starter}. Use this to close your first 3 clients quickly and gather video testimonials.\n` +
      `• **Standard Flagship:** ${hustle.pricingSuggestion.standard}. This will be your primary bread-and-butter package once you have proof.\n` +
      `• **Premium Done-For-You:** ${hustle.pricingSuggestion.premium}. For clients with larger budgets who want zero effort.\n\n` +
      `**Pro-tip:** Never underprice to compete on being the "cheapest". Position yourself on reliability, fast turnaround, and clear communication.`;
  }

  if (q.includes('first client') || q.includes('customer') || q.includes('outreach') || q.includes('script') || q.includes('template')) {
    const template = hustle.howToGetFirstCustomer.outreachTemplate ||
      `"Hi [Name], loved your recent work on [Topic]. I put together a quick solution for [Specific Pain Point]: [Preview Link]. If this saves you time, feel free to use it! Happy to chat further if useful."`;

    return `Here is your direct action plan to get your first customer for **${hustle.name}**:\n\n` +
      `**Headline Strategy:** ${hustle.howToGetFirstCustomer.headline}\n\n` +
      `**Copy-Paste Outreach Script:**\n> ${template}\n\n` +
      `**3 Rules for Maximum Response:**\n` +
      `1. Target people actively experiencing the problem right now (look at recent social posts or reviews).\n` +
      `2. Keep initial messages under 75 words so they can read and reply from their phone in 20 seconds.\n` +
      `3. Always follow up politely after 48 hours. 60% of replies happen on the second nudge!`;
  }

  if (q.includes('tool') || q.includes('software') || q.includes('app') || q.includes('free')) {
    const toolList = hustle.toolsNeeded
      .map((t) => `• **${t.name}** (${t.category}) — *${t.cost}*: ${t.purpose}`)
      .join('\n');
    return `Here is the leanest tech stack for **${hustle.name}**:\n\n${toolList}\n\n` +
      `**Start with $0:** You do NOT need paid subscriptions to start. Use the free tiers until your first client pays you, then reinvest a small percentage of profits.`;
  }

  if (q.includes('time') || q.includes('schedule') || q.includes('balance') || q.includes('full-time') || q.includes('job')) {
    return `Managing **${hustle.name}** alongside a 9-to-5 job is very realistic with a focused weekly schedule (${hustle.timeRequired}):\n\n` +
      `• **Mon & Tue (45 min):** Prospecting & building your lead list.\n` +
      `• **Wed & Thu (45 min):** Product creation, service fulfillment, or personalized outreach.\n` +
      `• **Saturday Morning (2-3 hrs):** Deep execution sprint (content creation, client deliverables, or live service).\n` +
      `• **Sunday (30 min):** Review analytics and schedule tasks for the upcoming week.\n\n` +
      `The key is consistent daily sprints rather than letting tasks pile up until you feel overwhelmed.`;
  }

  if (q.includes('tax') || q.includes('legal') || q.includes('llc') || q.includes('register')) {
    return `Here is the pragmatic legal & tax roadmap for starting **${hustle.name}**:\n\n` +
      `1. **Start as Sole Proprietorship:** In most jurisdictions, you don't need an LLC on Day 1 to earn your first $500. You can operate under your legal name.\n` +
      `2. **Separate Bank Account:** Open a free business checking account (e.g. Mercury, Relay, or standard local bank) so personal and side-hustle funds never mix.\n` +
      `3. **Set Aside 25% for Taxes:** Automatically transfer 25% to 30% of every invoice into a tax reserve account so tax season is stress-free.\n` +
      `4. **Form an LLC Later:** Once you hit consistent $1,500/month revenue, formalize an LLC for liability protection and tax benefits.`;
  }

  // Default deep coaching reply
  return `Great question regarding **${hustle.name}**! Here is how to approach this:\n\n` +
    `1. **Focus on Day 1-3 Milestones:** Review your 7-Day Action Plan in the tracker. Don't worry about scaling until Day 1 (Niche validation) and Day 2 (MVP definition) are completed.\n` +
    `2. **Your Target Customer:** Remember your core audience: *${hustle.targetCustomers.persona}*. They care about solving: *"${hustle.targetCustomers.painPoint}"*.\n` +
    `3. **Immediate Next Step:** Put 30 minutes on your calendar today to test the free tools and write down your first 3 prospective buyers.\n\n` +
    `Feel free to ask me to draft a specific email, critique a product idea, or calculate your revenue targets!`;
}
