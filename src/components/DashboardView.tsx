import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Search,
  Filter,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  Star,
  CheckCircle2,
  SlidersHorizontal,
  RotateCcw,
  Zap,
  Crown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SideHustle, UserProgress, UserTier, QuestionnaireAnswers } from '../types';
import { RecommendationResult } from '../services/aiGenerator';
import { SKILL_CATEGORIES } from '../data/hustles';

interface DashboardViewProps {
  result: RecommendationResult;
  userAnswers: QuestionnaireAnswers;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectHustle: (hustle: SideHustle) => void;
  onOpenTracker: () => void;
  activeProgress: UserProgress | null;
  tier: UserTier;
  onOpenPricing: () => void;
  onRetakeQuiz: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  result,
  userAnswers,
  savedIds,
  onToggleSave,
  onSelectHustle,
  onOpenTracker,
  activeProgress,
  tier,
  onOpenPricing,
  onRetakeQuiz,
}) => {
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [budgetFilter, setBudgetFilter] = useState('All');
  const [workTypeFilter, setWorkTypeFilter] = useState('All');
  const [timeFilter, setTimeFilter] = useState('All');
  const [skillFilter, setSkillFilter] = useState('All');

  const filteredHustles = useMemo(() => {
    return result.recommendations.filter((hustle) => {
      // Search
      if (
        searchQuery &&
        !hustle.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !hustle.explanation.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !hustle.requiredSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        return false;
      }

      // Difficulty
      if (difficultyFilter !== 'All' && hustle.difficulty !== difficultyFilter) {
        return false;
      }

      // Budget
      if (budgetFilter === 'Under $50' && hustle.budgetNumericMax > 50) return false;
      if (budgetFilter === '$0 Only' && hustle.budgetNumericMax > 0) return false;

      // Work type
      if (workTypeFilter !== 'All' && hustle.workType !== workTypeFilter) {
        return false;
      }

      // Time
      if (timeFilter === 'Under 8 hrs' && hustle.timeNumericHours > 8) return false;

      // Skill
      if (skillFilter !== 'All' && !hustle.requiredSkills.includes(skillFilter)) {
        return false;
      }

      return true;
    });
  }, [result.recommendations, searchQuery, difficultyFilter, budgetFilter, workTypeFilter, timeFilter, skillFilter]);

  const activePlanProgressPercent = activeProgress
    ? Math.round((activeProgress.completedTaskIds.length / 21) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-[#080C15] pb-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Welcome Back Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Welcome back 👋
              </h1>
              <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
                {result.userSummary.primaryArchetype}
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Personalized based on: {userAnswers.availableTime} • Budget: {userAnswers.budget} • Goal: {userAnswers.incomeGoal}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onRetakeQuiz}
              className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/60 px-3.5 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Adjust Preferences
            </button>
            {tier === 'free' && (
              <button
                onClick={onOpenPricing}
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:brightness-110 transition-all"
              >
                <Crown className="h-3.5 w-3.5 text-amber-200" />
                Unlock Unlimited Matches
              </button>
            )}
          </div>
        </div>

        {/* Active 7-Day Plan Progress Tracker Banner (if active) */}
        {activeProgress && (
          <div className="mt-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/80 p-5 shadow-xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/40">
                  <span className="text-base font-extrabold">{activePlanProgressPercent}%</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Active 7-Day Execution
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <h3 className="text-base font-bold text-white">{activeProgress.hustleName}</h3>
                  <p className="text-xs text-slate-400">
                    Day {activeProgress.currentDay} of 7 • {activeProgress.completedTaskIds.length} tasks completed
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenTracker}
                className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-500 transition-all"
              >
                <span>Continue Day {activeProgress.currentDay}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* AI Insight Strategic Digest */}
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-sm flex items-start gap-3 text-xs sm:text-sm text-slate-300">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <span className="font-bold text-white">AI Strategy Insight: </span>
            <span className="text-slate-300 leading-relaxed">{result.aiInsights}</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Your Recommended Side Hustles
            </h2>
            <p className="text-xs text-slate-400">
              Ranked by compatibility with your skills, capital, and available time.
            </p>
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by skill, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="mt-4 flex flex-wrap items-center gap-2 border-y border-slate-800/60 py-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mr-2">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters:
          </div>

          {/* Difficulty Filter */}
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
          >
            <option value="All">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Budget Filter */}
          <select
            value={budgetFilter}
            onChange={(e) => setBudgetFilter(e.target.value)}
            className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
          >
            <option value="All">All Budgets</option>
            <option value="$0 Only">$0 Zero Cost Only</option>
            <option value="Under $50">Under $50</option>
          </select>

          {/* Work Type Filter */}
          <select
            value={workTypeFilter}
            onChange={(e) => setWorkTypeFilter(e.target.value)}
            className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
          >
            <option value="All">Online & Offline</option>
            <option value="Online">100% Online</option>
            <option value="Offline">Offline / Hands-on</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* Time Filter */}
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
          >
            <option value="All">Any Time</option>
            <option value="Under 8 hrs">Under 8 hrs/wk</option>
          </select>

          {/* Skill Filter */}
          <select
            value={skillFilter}
            onChange={(e) => setSkillFilter(e.target.value)}
            className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none"
          >
            <option value="All">All Skills</option>
            {SKILL_CATEGORIES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          {(difficultyFilter !== 'All' ||
            budgetFilter !== 'All' ||
            workTypeFilter !== 'All' ||
            timeFilter !== 'All' ||
            skillFilter !== 'All' ||
            searchQuery) && (
            <button
              onClick={() => {
                setDifficultyFilter('All');
                setBudgetFilter('All');
                setWorkTypeFilter('All');
                setTimeFilter('All');
                setSkillFilter('All');
                setSearchQuery('');
              }}
              className="text-xs text-indigo-400 hover:underline ml-2"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Recommendations Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredHustles.map((hustle) => {
            const isSaved = savedIds.includes(hustle.id);

            return (
              <div
                key={hustle.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition-all hover:border-indigo-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div>
                  {/* Top Bar with Match Score and Save */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/25">
                      <Star className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
                      {hustle.matchScore}% Match
                    </span>

                    <button
                      onClick={() => onToggleSave(hustle.id)}
                      title={isSaved ? 'Remove bookmark' : 'Bookmark this idea'}
                      className={`rounded-lg p-2 transition-colors ${
                        isSaved
                          ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {isSaved ? (
                        <BookmarkCheck className="h-4 w-4 text-indigo-400" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {/* Title & Category */}
                  <div className="mt-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
                      {hustle.category} • {hustle.workType}
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {hustle.name}
                    </h3>
                  </div>

                  {/* Short Explanation */}
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {hustle.explanation}
                  </p>

                  {/* Personalized Why it matches you */}
                  <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950/50 p-2.5 text-[11px] text-slate-300 leading-relaxed">
                    <span className="font-semibold text-indigo-300">Why it matches: </span>
                    {hustle.whyItMatches}
                  </div>

                  {/* Four Core Metrics Requested in Prompt */}
                  <div className="mt-4 grid grid-cols-2 gap-2.5 rounded-xl border border-slate-800/80 bg-slate-950/30 p-3 text-xs">
                    <div>
                      <span className="text-[11px] text-slate-500">Starting Cost</span>
                      <p className="font-bold text-slate-200">{hustle.startingBudget}</p>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500">Difficulty</span>
                      <p className="font-bold text-slate-200">{hustle.difficulty}</p>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500">Potential</span>
                      <p className="font-bold text-emerald-400">{hustle.estimatedEarnings}</p>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500">Time Required</span>
                      <p className="font-bold text-slate-200">{hustle.timeRequired}</p>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {hustle.requiredSkills.map((sk) => (
                      <span
                        key={sk}
                        className="rounded-md bg-slate-800/60 px-2 py-0.5 text-[10px] text-slate-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Buttons matching prompt: View Plan | Save */}
                <div className="mt-6 flex items-center gap-2 border-t border-slate-800/80 pt-4">
                  <button
                    onClick={() => onSelectHustle(hustle)}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:brightness-110 active:scale-95 transition-all"
                  >
                    <span>View Plan</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => onToggleSave(hustle.id)}
                    className={`flex items-center gap-1 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition-all ${
                      isSaved
                        ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300'
                        : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {isSaved ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Freemium Limit Notice */}
        {tier === 'free' && (
          <div className="mt-12 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-slate-900 to-slate-900 p-6 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Crown className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Showing your top 3 curated recommendations (Free Tier)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Upgrade to Pro to unlock unlimited side-hustle discoveries, 24/7 AI Solopreneur Coach, and competitor deep-dives.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenPricing}
              className="w-full md:w-auto shrink-0 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-3 text-xs font-bold text-black shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all"
            >
              Upgrade to Pro ($19/mo)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
