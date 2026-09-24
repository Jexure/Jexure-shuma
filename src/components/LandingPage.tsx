import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Target,
  CalendarCheck,
  CheckCircle2,
  TrendingUp,
  Clock,
  DollarSign,
  ShieldCheck,
  ChevronDown,
  Compass,
  Cpu,
  Zap,
  HelpCircle,
  Users,
  Flame,
  Star
} from 'lucide-react';
import { SAMPLE_SIDE_HUSTLES } from '../data/hustles';
import { SideHustle, UserTier } from '../types';

interface LandingPageProps {
  onStartQuiz: () => void;
  onExploreIdeas: () => void;
  onSelectHustle: (hustle: SideHustle) => void;
  onOpenPricing: () => void;
  tier: UserTier;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartQuiz,
  onExploreIdeas,
  onSelectHustle,
  onOpenPricing,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const featuredHustles = SAMPLE_SIDE_HUSTLES.slice(0, 3);

  const faqs = [
    {
      q: 'How does AI Side-Hustle Finder differ from just asking ChatGPT?',
      a: 'Generic chatbots produce vague, high-level lists ("start dropshipping or freelance writing") with zero verification. AI Side-Hustle Finder evaluates your exact starting budget, skills, available hours, and location against a curated catalog of validated models. It delivers a full, tactical 7-Day Day-by-Day Action Plan, customer acquisition scripts, tool stacks, and a step-by-step startup guide.',
    },
    {
      q: 'Can I really start these side hustles with little to no money?',
      a: 'Yes! Most of our recommended models are curated specifically for zero or low-budget bootstrappers ($0 to $50 max). Many leverage free software tiers (Notion, Canva, Google Business, Substack, CapCut) so you can make your first $1 online before spending a single dollar on software.',
    },
    {
      q: 'How much time do I realistically need each week?',
      a: 'Our models are explicitly categorized by time commitment. You can choose options tailored to 2–5 hours/week, 5–10 hours/week, or higher. The 7-Day Action Plan breaks daily work into focused 30-to-60 minute micro-sprints designed for people with 9-to-5 jobs or families.',
    },
    {
      q: 'What if I don\'t have coding or design skills?',
      a: 'Over 60% of our catalog requires zero coding or graphic design. We feature high-demand services like Local Google Maps optimization, cold email prospecting, curated newsletters, mobile auto detailing, and digital organization where consistency and clear communication are the main differentiators.',
    },
    {
      q: 'What happens after the 7-day plan?',
      a: 'By Day 7, you will have your minimum viable product, storefront or service menu live, and your first outreach pitches sent. Once you close your first paying customer, the app provides Phase 2 and Phase 3 scaling strategies along with an AI coaching assistant to guide your expansion to $1,000+/month.',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080C15] text-slate-100">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-[35%] -left-48 -z-10 h-[450px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute top-[65%] -right-48 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-3xl" />

      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md transition-all hover:bg-indigo-500/15">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-spin-slow" />
            <span>Personalized AI Discovery & 7-Day Execution</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>

          {/* Hero Headline */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-white">Find the Right Side Hustle</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              for You.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg sm:leading-relaxed">
            Tell us your skills, interests, budget, and goals. Our AI will find realistic side-hustle
            opportunities and show you exactly how to start.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onStartQuiz}
              className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40 active:scale-95 sm:w-auto"
            >
              <span>Find My Side Hustle</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreIdeas}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-7 py-4 text-base font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-slate-600 hover:bg-slate-800/80 hover:text-white sm:w-auto"
            >
              <Compass className="h-4 w-4 text-slate-400" />
              <span>Explore Ideas</span>
            </button>
          </div>

          {/* Social Proof badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 sm:gap-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Zero-to-low budget options ($0–$50)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Actionable 7-day day-by-day plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>First customer outreach scripts included</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Asset Showcase */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/50 p-2 shadow-2xl backdrop-blur-xl sm:p-3">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/src/assets/images/hero_founder_workspace_1790260227446.jpg"
                alt="Modern focused solopreneur desk workspace"
                className="h-72 w-full object-cover sm:h-96 lg:h-[420px] filter brightness-90 transition-all hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C15] via-[#080C15]/40 to-transparent" />

              {/* Floating Live Metric Overlay 1 */}
              <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3.5 rounded-xl border border-slate-700/80 bg-[#0B0F19]/90 p-3.5 shadow-2xl backdrop-blur-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Target Outcome</div>
                  <div className="text-base font-bold text-white">$400 – $2,500 / month</div>
                  <div className="text-[11px] text-emerald-400 font-medium">Validated with 0 inventory</div>
                </div>
              </div>

              {/* Floating Live Metric Overlay 2 */}
              <div className="absolute top-6 right-6 flex items-center gap-3 rounded-xl border border-indigo-500/30 bg-[#0B0F19]/90 p-3 shadow-2xl backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Flame className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-indigo-300">7-Day Execution Blueprint</div>
                  <div className="text-xs text-slate-300">Day 1: Validate → Day 7: First Sale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative border-t border-slate-800/80 bg-[#0B0F19]/60 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              The Path to Revenue
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
              From feeling stuck to launching your first paying offer in 7 structured steps.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/70">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-lg font-bold">
                01
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">2-Minute Intake</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Tell the system about your existing skills, interests, free weekly hours, starting budget, and income target.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/70">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 text-lg font-bold">
                02
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">AI Alignment Engine</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Our algorithm scores dozens of vetted models and filters out ideas requiring capital or time you don't have.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/70">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-lg font-bold">
                03
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">Personalized Blueprint</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Review complete operational playbooks: tools, customer profiles, competitive pricing, and first-sale outreach scripts.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/70">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-lg font-bold">
                04
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">7-Day Execution</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Follow simple daily checklists with an AI assistant coach. Check off tasks, track momentum, and close your first sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use AI Side-Hustle Finder */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              The Pragmatic Advantage
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Why Use AI Side-Hustle Finder
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
              Stop drowning in YouTube guru hype and start executing with verifiable, low-risk systems.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* The Old Way */}
            <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-red-400 font-bold text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/20 text-xs">✕</span>
                The Typical Confusion
              </div>
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-base font-bold">•</span>
                  <span><strong>Generic YouTube advice:</strong> "Start dropshipping" without telling you it requires $2,000 in ad spend.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-base font-bold">•</span>
                  <span><strong>Analysis paralysis:</strong> 40 bookmarked browser tabs and endless note-taking with zero revenue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-base font-bold">•</span>
                  <span><strong>No first-client playbook:</strong> Leaving you to guess how to actually convince a stranger to pay you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-base font-bold">•</span>
                  <span><strong>No daily accountability:</strong> Getting excited on Sunday and giving up by Wednesday night.</span>
                </li>
              </ul>
            </div>

            {/* The SideHustle.AI Way */}
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/80 p-6 sm:p-8 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs">✓</span>
                The AI Side-Hustle Finder Way
              </div>
              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-base font-bold">•</span>
                  <span><strong>Strict constraints match:</strong> Tailored to your true $0–$50 starting budget and 5 weekly hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-base font-bold">•</span>
                  <span><strong>Structured 7-Day Plan:</strong> Every day has one concrete task, deliverable, and time estimate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-base font-bold">•</span>
                  <span><strong>Proven outreach copy:</strong> Copy-paste DM templates and video scripts that generate high replies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 text-base font-bold">•</span>
                  <span><strong>Built-in Progress Tracker:</strong> Check off daily milestones and ask the AI Coach anytime you get stuck.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example Side Hustles Showcase */}
      <section className="relative border-t border-slate-800/80 bg-[#0B0F19]/50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Proven Curated Blueprints
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Example Side Hustles
              </h2>
              <p className="mt-2 max-w-xl text-slate-400 text-sm">
                Each opportunity includes pricing formulas, free tool stacks, and day-by-day roadmaps.
              </p>
            </div>
            <button
              onClick={onExploreIdeas}
              className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>View all in directory</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredHustles.map((hustle) => (
              <div
                key={hustle.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div>
                  {/* Top tags */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
                      {hustle.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                      <Star className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
                      {hustle.matchScore}% Match
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {hustle.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {hustle.explanation}
                  </p>

                  {/* Core Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-4 text-xs">
                    <div>
                      <span className="text-slate-500">Starting Budget</span>
                      <p className="font-semibold text-slate-200">{hustle.startingBudget}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Potential</span>
                      <p className="font-semibold text-emerald-400">{hustle.estimatedEarnings}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Difficulty</span>
                      <p className="font-semibold text-slate-200">{hustle.difficulty}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Time Needed</span>
                      <p className="font-semibold text-slate-200">{hustle.timeRequired}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">7-Day Action Plan included</div>
                  <button
                    onClick={() => onSelectHustle(hustle)}
                    className="flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                  >
                    <span>View Plan</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Built For Serious Execution
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
              Not just ideas—a complete discovery engine, daily planner, and solopreneur coaching suite.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">AI Personalization Engine</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Calculates precise match scores and tailors the startup roadmap to your real background and schedule.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <CalendarCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">7-Day Action Roadmaps</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Step-by-step daily micro-tasks that take you from Day 1 niche validation to Day 7 customer acquisition.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">Interactive Progress Tracker</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Mark tasks complete, log reflections, maintain execution streaks, and stay accountable to your goals.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">24/7 AI Startup Coach</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Ask specific questions anytime: "How do I price this?", "Can you write my cold email?", "What free tool do I use?"
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">First-Customer Blueprints</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Direct scripts, where target customers hang out online, and risk-reversal offers to guarantee early traction.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">Zero-Capital Stacks</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Every hustle lists free tiers and zero-inventory alternatives so you never risk your savings to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Freemium + Premium) */}
      <section className="relative border-t border-slate-800/80 bg-[#0B0F19]/60 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Transparent Monetization
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Simple, Accessible Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
              Start 100% free. Upgrade only when you want unlimited ideas and 24/7 AI coaching.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Free Plan */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Starter</h3>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                    Free Forever
                  </span>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-extrabold text-white">
                  $0
                  <span className="ml-1 text-sm font-normal text-slate-400">/ forever</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Ideal for testing your skills and discovering your initial 3 matches.
                </p>

                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Personalized intake questionnaire</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Top 3 curated AI side-hustle recommendations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Basic side-hustle information & startup guide</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Standard 7-Day action plan</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Interactive task progress tracker</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onStartQuiz}
                className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-800/80 py-3 text-xs font-bold text-white transition-all hover:bg-slate-700 hover:border-slate-600"
              >
                Get Started Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="relative rounded-2xl border-2 border-indigo-500/80 bg-gradient-to-b from-indigo-950/40 via-slate-900/90 to-slate-900 p-8 shadow-2xl backdrop-blur-md flex flex-col justify-between">
              <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-amber-400 to-indigo-500 px-3 py-1 text-[11px] font-bold text-black uppercase tracking-wider">
                Most Popular
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Pro Solopreneur</h3>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/30">
                    Unlimited
                  </span>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-extrabold text-white">
                  $19
                  <span className="ml-1 text-sm font-normal text-slate-400">/ month</span>
                </div>
                <p className="mt-2 text-xs text-indigo-200/80">
                  For creators serious about hitting $1,000+ per month side income.
                </p>

                <ul className="mt-6 space-y-3 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="font-semibold text-white">Unlimited personalized recommendations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="font-semibold text-white">24/7 AI Startup Coach assistant</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>In-depth AI market & competitor deep-dive audits</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Advanced action plans with copy-paste DM scripts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Pricing calculators & multi-tier revenue projections</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Curated cheat sheets, Notion templates & prompt library</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenPricing}
                className="mt-8 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:brightness-110 active:scale-98"
              >
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Got Questions?
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left font-medium text-slate-200 hover:text-white"
                  >
                    <span className="text-sm sm:text-base font-semibold">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-indigo-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative border-t border-slate-800/80 bg-gradient-to-b from-[#0B0F19] to-[#080C15] py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6">
            <Sparkles className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Start Your First Side Hustle This Week.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300 text-sm sm:text-base">
            Turn your extra hours into a recurring revenue stream with an exact 7-day roadmap tailored to your life.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onStartQuiz}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40 active:scale-95"
            >
              <span>Find My Side Hustle →</span>
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500">Takes less than 2 minutes • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#060910] py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} AI Side-Hustle Finder. Built for solopreneurs and ambitious builders.</p>
      </footer>
    </div>
  );
};
