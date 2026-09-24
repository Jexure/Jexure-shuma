import React from 'react';
import { Sparkles, Compass, CheckCircle2, Bookmark, Crown, Zap, RotateCcw } from 'lucide-react';
import { UserTier } from '../types';

interface NavbarProps {
  currentView: 'landing' | 'dashboard' | 'explore' | 'tracker' | 'saved';
  onNavigate: (view: 'landing' | 'dashboard' | 'explore' | 'tracker' | 'saved') => void;
  onOpenQuestionnaire: () => void;
  onOpenPricing: () => void;
  tier: UserTier;
  savedCount: number;
  hasActivePlan: boolean;
  activePlanName?: string;
  hasCompletedQuestionnaire: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenQuestionnaire,
  onOpenPricing,
  tier,
  savedCount,
  hasActivePlan,
  activePlanName,
  hasCompletedQuestionnaire,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0B0F19]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('landing')}
          className="flex cursor-pointer items-center gap-2.5 transition-transform hover:scale-[1.02]"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/25">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white">
                SideHustle<span className="text-indigo-400">.AI</span>
              </span>
              {tier === 'pro' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 px-2 py-0.5 text-[11px] font-semibold text-amber-300 border border-amber-500/30">
                  <Crown className="h-3 w-3 text-amber-400" /> PRO
                </span>
              )}
            </div>
            <p className="hidden text-[10px] font-medium text-slate-400 sm:block leading-none">
              AI Discovery & 7-Day Execution
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/60 p-1 backdrop-blur-md">
          <button
            onClick={() => onNavigate('landing')}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              currentView === 'landing'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Home
          </button>

          {hasCompletedQuestionnaire && (
            <button
              onClick={() => onNavigate('dashboard')}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              My Recommendations
            </button>
          )}

          <button
            onClick={() => onNavigate('explore')}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              currentView === 'explore'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Compass className="h-3.5 w-3.5" />
            Explore Ideas
          </button>

          <button
            onClick={() => onNavigate('tracker')}
            className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              currentView === 'tracker'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            7-Day Tracker
            {hasActivePlan && (
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => onNavigate('saved')}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              currentView === 'saved'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" />
            Saved
            {savedCount > 0 && (
              <span className="ml-0.5 rounded-full bg-slate-800 px-1.5 py-0.2 text-[10px] font-semibold text-slate-200">
                {savedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right CTA / Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {hasCompletedQuestionnaire ? (
            <button
              onClick={onOpenQuestionnaire}
              title="Retake questionnaire with new preferences"
              className="hidden lg:flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/40 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Retake Quiz
            </button>
          ) : (
            <button
              onClick={onOpenQuestionnaire}
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 transition-all hover:brightness-110 hover:shadow-indigo-500/30"
            >
              <Zap className="h-3.5 w-3.5 text-amber-300" />
              Find My Hustle
            </button>
          )}

          {tier === 'free' ? (
            <button
              onClick={onOpenPricing}
              className="flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-orange-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300 transition-all hover:bg-amber-500/20 hover:border-amber-400"
            >
              <Crown className="h-3.5 w-3.5 text-amber-400" />
              Upgrade
            </button>
          ) : (
            <button
              onClick={onOpenPricing}
              className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 transition-all hover:bg-emerald-500/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Pro Active
            </button>
          )}
        </div>
      </div>

      {/* Mobile Secondary Navigation bar */}
      <div className="flex md:hidden items-center justify-around border-t border-slate-800/60 bg-[#0B0F19]/90 px-2 py-2">
        <button
          onClick={() => onNavigate('landing')}
          className={`flex flex-col items-center gap-0.5 text-[11px] ${
            currentView === 'landing' ? 'text-indigo-400 font-semibold' : 'text-slate-400'
          }`}
        >
          <span>Home</span>
        </button>
        {hasCompletedQuestionnaire && (
          <button
            onClick={() => onNavigate('dashboard')}
            className={`flex flex-col items-center gap-0.5 text-[11px] ${
              currentView === 'dashboard' ? 'text-indigo-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <span>Matches</span>
          </button>
        )}
        <button
          onClick={() => onNavigate('explore')}
          className={`flex flex-col items-center gap-0.5 text-[11px] ${
            currentView === 'explore' ? 'text-indigo-400 font-semibold' : 'text-slate-400'
          }`}
        >
          <span>Explore</span>
        </button>
        <button
          onClick={() => onNavigate('tracker')}
          className={`flex flex-col items-center gap-0.5 text-[11px] ${
            currentView === 'tracker' ? 'text-indigo-400 font-semibold' : 'text-slate-400'
          }`}
        >
          <span className="flex items-center gap-1">
            Tracker
            {hasActivePlan && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
          </span>
        </button>
        <button
          onClick={() => onNavigate('saved')}
          className={`flex flex-col items-center gap-0.5 text-[11px] ${
            currentView === 'saved' ? 'text-indigo-400 font-semibold' : 'text-slate-400'
          }`}
        >
          <span>Saved ({savedCount})</span>
        </button>
      </div>
    </header>
  );
};
