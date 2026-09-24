import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Crown,
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  Check
} from 'lucide-react';
import { UserTier } from '../types';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: UserTier;
  onSetTier: (tier: UserTier) => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  tier,
  onSetTier,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  if (!isOpen) return null;

  const handleToggleTier = () => {
    const nextTier = tier === 'free' ? 'pro' : 'free';
    onSetTier(nextTier);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Subscription Plans
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-white">
              Unlock Your Full Side-Hustle Potential
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Billing cycle toggle */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center rounded-full border border-slate-800 bg-slate-900/80 p-1 text-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-4 py-1.5 font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Free Tier */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Free Starter</h3>
                {tier === 'free' && (
                  <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                    Your Current Plan
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline text-3xl font-extrabold text-white">
                $0
                <span className="ml-1 text-xs font-normal text-slate-400">/ forever</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Great for discovering your initial matches and following the basic 7-day checklist.
              </p>

              <ul className="mt-6 space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Limited questionnaire</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Top 3 side-hustle recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Basic side-hustle information</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Standard 7-Day action plan</span>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <span className="h-4 w-4 text-slate-600 font-bold ml-0.5">✕</span>
                  <span>AI Assistant access (Pro only)</span>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <span className="h-4 w-4 text-slate-600 font-bold ml-0.5">✕</span>
                  <span>Market & competitor deep dive</span>
                </li>
              </ul>
            </div>

            {tier === 'free' ? (
              <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950/60 py-2.5 text-center text-xs font-semibold text-slate-400">
                Active Plan
              </div>
            ) : (
              <button
                onClick={handleToggleTier}
                className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-800 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-700"
              >
                Downgrade to Free
              </button>
            )}
          </div>

          {/* Premium Tier */}
          <div className="relative rounded-2xl border-2 border-indigo-500/80 bg-gradient-to-b from-indigo-950/30 via-slate-900/90 to-slate-900 p-6 sm:p-7 shadow-2xl flex flex-col justify-between">
            <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-amber-400 to-indigo-500 px-3 py-0.5 text-[10px] font-bold text-black uppercase tracking-wider">
              Recommended
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">Pro Solopreneur</h3>
                  <Crown className="h-4 w-4 text-amber-400" />
                </div>
                {tier === 'pro' && (
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 border border-emerald-500/30">
                    Active Plan
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-baseline text-3xl font-extrabold text-white">
                {billingCycle === 'monthly' ? '$19' : '$12'}
                <span className="ml-1 text-xs font-normal text-slate-400">
                  / month {billingCycle === 'annual' && '(billed $149/yr)'}
                </span>
              </div>
              <p className="mt-2 text-xs text-indigo-200/80">
                Full unconstrained access to unlimited ideas, deep market intelligence, and 24/7 coaching.
              </p>

              <ul className="mt-6 space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="font-semibold text-white">Unlimited personalized recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="font-semibold text-white">24/7 AI Solopreneur Assistant Coach</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Market & competitor opportunity radar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Advanced action plans with copy-paste DM scripts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Marketing angles & high-converting pricing formulas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Exclusive Notion OS systems and prompt swipe library</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button
                onClick={handleToggleTier}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 py-3 text-xs font-bold text-white shadow-xl shadow-indigo-500/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <Crown className="h-4 w-4 text-amber-300" />
                <span>{tier === 'pro' ? 'Switch Back to Free Plan' : 'Activate Pro Membership'}</span>
              </button>
              <p className="mt-2 text-center text-[10px] text-slate-500">
                Instant one-click activation • Cancel anytime • 14-day money back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
