import React, { useState } from 'react';
import {
  X,
  Star,
  CheckCircle2,
  Calendar,
  Clock,
  DollarSign,
  Users,
  Target,
  Wrench,
  Sparkles,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  MessageSquare,
  Copy,
  Check,
  ShieldCheck,
  TrendingUp,
  FileText
} from 'lucide-react';
import { SideHustle, UserTier } from '../types';

interface HustleDetailModalProps {
  hustle: SideHustle | null;
  isOpen: boolean;
  onClose: () => void;
  onStartTracking: (hustle: SideHustle) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenAssistant: (hustle: SideHustle) => void;
  tier: UserTier;
  onOpenPricing: () => void;
}

export const HustleDetailModal: React.FC<HustleDetailModalProps> = ({
  hustle,
  isOpen,
  onClose,
  onStartTracking,
  isSaved,
  onToggleSave,
  onOpenAssistant,
  tier,
  onOpenPricing,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'plan' | 'firstCustomer' | 'tools' | 'guide'>('overview');
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  if (!isOpen || !hustle) return null;

  const handleCopyOutreach = () => {
    if (hustle.howToGetFirstCustomer.outreachTemplate) {
      navigator.clipboard.writeText(hustle.howToGetFirstCustomer.outreachTemplate);
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0B0F19] shadow-2xl">
        {/* Top Header Bar */}
        <div className="border-b border-slate-800/80 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-md">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
                  {hustle.category}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-400 border border-emerald-500/25">
                  <Star className="h-3 w-3 fill-emerald-400" />
                  {hustle.matchScore}% Match for you
                </span>
                <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-300">
                  {hustle.workType}
                </span>
              </div>
              <h2 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                {hustle.name}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                {hustle.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSave(hustle.id)}
                title={isSaved ? 'Remove Bookmark' : 'Save Idea'}
                className={`rounded-xl p-2.5 border transition-colors ${
                  isSaved
                    ? 'border-indigo-500/40 bg-indigo-500/20 text-indigo-300'
                    : 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
              </button>
              <button
                onClick={onClose}
                className="rounded-xl border border-slate-700 bg-slate-800 p-2.5 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-slate-800/80 pt-3 text-xs">
            <div className="rounded-lg bg-slate-950/40 p-2">
              <span className="text-slate-500">Starting Budget</span>
              <p className="font-bold text-slate-200">{hustle.startingBudget}</p>
            </div>
            <div className="rounded-lg bg-slate-950/40 p-2">
              <span className="text-slate-500">Estimated Potential</span>
              <p className="font-bold text-emerald-400">{hustle.estimatedEarnings}</p>
            </div>
            <div className="rounded-lg bg-slate-950/40 p-2">
              <span className="text-slate-500">Difficulty</span>
              <p className="font-bold text-slate-200">{hustle.difficulty}</p>
            </div>
            <div className="rounded-lg bg-slate-950/40 p-2">
              <span className="text-slate-500">Time Commitment</span>
              <p className="font-bold text-slate-200">{hustle.timeRequired}</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-4 flex overflow-x-auto gap-1 border-t border-slate-800/80 pt-2 text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`rounded-lg px-3 py-1.5 font-medium whitespace-nowrap transition-colors ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Overview & Fit
            </button>
            <button
              onClick={() => setActiveTab('plan')}
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 font-medium whitespace-nowrap transition-colors ${
                activeTab === 'plan'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Calendar className="h-3.5 w-3.5" />
              7-Day Action Plan
            </button>
            <button
              onClick={() => setActiveTab('firstCustomer')}
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 font-medium whitespace-nowrap transition-colors ${
                activeTab === 'firstCustomer'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Target className="h-3.5 w-3.5" />
              Get First Customer
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 font-medium whitespace-nowrap transition-colors ${
                activeTab === 'tools'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Wrench className="h-3.5 w-3.5" />
              Tools Needed
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 font-medium whitespace-nowrap transition-colors ${
                activeTab === 'guide'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              Step-by-Step Guide
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-slate-200">
          {/* TAB 1: OVERVIEW & FIT */}
          {activeTab === 'overview' && (
            <div className="space-y-6 text-sm">
              {/* Personalized Fit Callout */}
              <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" /> Why It Matches You
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {hustle.whyItMatches}
                </p>
              </div>

              {/* How it works explanation */}
              <div>
                <h4 className="font-bold text-white text-base">How It Works</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {hustle.explanation}
                </p>
              </div>

              {/* Target Customers */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <h4 className="flex items-center gap-2 font-bold text-white text-sm">
                  <Users className="h-4 w-4 text-cyan-400" />
                  Target Customers
                </h4>
                <div className="mt-3 space-y-2 text-xs text-slate-300">
                  <p>
                    <strong className="text-white">Who buys: </strong>
                    {hustle.targetCustomers.persona}
                  </p>
                  <p>
                    <strong className="text-white">Pain point: </strong>
                    "{hustle.targetCustomers.painPoint}"
                  </p>
                  <p>
                    <strong className="text-white">Where to find them: </strong>
                    {hustle.targetCustomers.whereToFind}
                  </p>
                </div>
              </div>

              {/* Pricing Suggestions */}
              <div>
                <h4 className="font-bold text-white text-sm">Suggested Pricing Structure</h4>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase">Starter Tier</span>
                    <p className="mt-1 font-bold text-white text-xs">{hustle.pricingSuggestion.starter}</p>
                    <p className="mt-1 text-[10px] text-slate-500">For first 3 clients & testimonials</p>
                  </div>
                  <div className="rounded-xl border border-indigo-500/40 bg-indigo-950/20 p-3">
                    <span className="text-[11px] font-semibold text-indigo-300 uppercase">Standard Core</span>
                    <p className="mt-1 font-bold text-white text-xs">{hustle.pricingSuggestion.standard}</p>
                    <p className="mt-1 text-[10px] text-slate-400">Your primary recurring offer</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase">Premium VIP</span>
                    <p className="mt-1 font-bold text-white text-xs">{hustle.pricingSuggestion.premium}</p>
                    <p className="mt-1 text-[10px] text-slate-500">High-touch done-for-you clients</p>
                  </div>
                </div>
              </div>

              {/* Pro Tips */}
              <div>
                <h4 className="font-bold text-white text-sm">Veteran Solopreneur Tips</h4>
                <ul className="mt-2 space-y-2 text-xs text-slate-300">
                  {hustle.proTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: 7-DAY ACTION PLAN */}
          {activeTab === 'plan' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">The Personalized 7-Day Roadmap</h4>
                  <p className="text-xs text-slate-400">
                    One concrete task per day so you make your first sale by Day 7.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onStartTracking(hustle);
                    onClose();
                  }}
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-indigo-500/25 hover:brightness-110 transition-all"
                >
                  Activate in Tracker →
                </button>
              </div>

              <div className="space-y-3 mt-4">
                {hustle.sevenDayActionPlan.map((day) => (
                  <div
                    key={day.id}
                    className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all hover:border-slate-700"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-xs font-extrabold text-indigo-300">
                          D{day.dayNumber}
                        </span>
                        <h5 className="font-bold text-white text-sm">
                          {day.title}
                        </h5>
                      </div>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="h-3 w-3" />
                        {day.estimatedHours} hrs
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-indigo-200/80">
                      <strong>Objective: </strong>{day.objective}
                    </p>

                    <div className="mt-3 space-y-1.5 pl-2 border-l border-slate-800">
                      {day.tasks.map((task, tidx) => (
                        <div key={tidx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-indigo-400 font-bold">•</span>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400">
                      <div>
                        <strong className="text-slate-300">Deliverable: </strong>
                        {day.deliverable}
                      </div>
                      <div className="text-amber-300/90 italic">
                        Tip: {day.tips}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FIRST CUSTOMER PLAYBOOK */}
          {activeTab === 'firstCustomer' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Traction Guarantee
                </span>
                <h4 className="mt-1 text-lg font-bold text-white">
                  {hustle.howToGetFirstCustomer.headline}
                </h4>
                <p className="mt-1 text-xs text-slate-400">
                  Follow these step-by-step instructions to get your very first paying customer.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                {hustle.howToGetFirstCustomer.steps.map((st, sidx) => (
                  <div
                    key={sidx}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-3.5 text-xs text-slate-200"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                      {sidx + 1}
                    </span>
                    <span className="mt-0.5 leading-relaxed">{st}</span>
                  </div>
                ))}
              </div>

              {/* Outreach Template with Copy Button */}
              {hustle.howToGetFirstCustomer.outreachTemplate && (
                <div className="rounded-xl border border-indigo-500/40 bg-slate-900/80 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                      Copy-Paste Cold Outreach Script
                    </span>
                    <button
                      onClick={handleCopyOutreach}
                      className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      {copiedTemplate ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy Script</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-black/50 p-3 text-xs text-slate-300 font-mono leading-relaxed border border-slate-800">
                    {hustle.howToGetFirstCustomer.outreachTemplate}
                  </pre>
                  <p className="mt-2 text-[11px] text-slate-400">
                    Replace bracketed items with details unique to your prospect.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: TOOLS NEEDED */}
          {activeTab === 'tools' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-bold text-white">Recommended Tool Stack</h4>
                <p className="text-xs text-slate-400">
                  Every tool has a free tier so you never need to spend capital to get started.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {hustle.toolsNeeded.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-4 gap-2 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{t.name}</span>
                        <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                          {t.category}
                        </span>
                        {t.freeTier && (
                          <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                            Free Tier Available
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-slate-400">{t.purpose}</p>
                    </div>
                    <div className="text-right sm:shrink-0">
                      <span className="text-[11px] font-semibold text-slate-300">{t.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: STEP-BY-STEP STARTUP GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-white">The 3-Phase Startup Lifecycle</h4>
                <p className="text-xs text-slate-400">
                  Setup in 48 hours, launch in week one, and scale once proven.
                </p>
              </div>

              {/* Phase 1 */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Phase 1: Foundation & Setup (Days 1–3)
                </span>
                <ul className="mt-2.5 space-y-2 text-xs text-slate-300">
                  {hustle.stepByStepGuide.phase1Setup.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Phase 2: Launch & First Sales (Days 4–7)
                </span>
                <ul className="mt-2.5 space-y-2 text-xs text-slate-300">
                  {hustle.stepByStepGuide.phase2Launch.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Phase 3: Scaling to $1,000+/Month (Month 2+)
                </span>
                <ul className="mt-2.5 space-y-2 text-xs text-slate-300">
                  {hustle.stepByStepGuide.phase3Scale.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-800/80 bg-slate-950/70 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onOpenAssistant(hustle)}
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <MessageSquare className="h-3.5 w-3.5 text-indigo-400" />
            <span>Ask AI Coach About This Idea</span>
          </button>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              onClick={() => {
                onStartTracking(hustle);
                onClose();
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-xl shadow-indigo-500/25 hover:brightness-110 active:scale-95 transition-all"
            >
              <Calendar className="h-4 w-4" />
              <span>Start 7-Day Action Plan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
