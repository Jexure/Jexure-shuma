import React, { useState, useMemo } from 'react';
import {
  Compass,
  Search,
  SlidersHorizontal,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  Star,
  CheckCircle2
} from 'lucide-react';
import { SideHustle, UserTier } from '../types';
import { SAMPLE_SIDE_HUSTLES, SKILL_CATEGORIES } from '../data/hustles';

interface ExploreDirectoryProps {
  onSelectHustle: (hustle: SideHustle) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  tier: UserTier;
  onOpenPricing: () => void;
}

export const ExploreDirectory: React.FC<ExploreDirectoryProps> = ({
  onSelectHustle,
  savedIds,
  onToggleSave,
  tier,
  onOpenPricing,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');
  const [selectedWorkType, setSelectedWorkType] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState('All');

  const filteredHustles = useMemo(() => {
    return SAMPLE_SIDE_HUSTLES.filter((hustle) => {
      if (
        searchQuery &&
        !hustle.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !hustle.explanation.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !hustle.requiredSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        return false;
      }
      if (selectedDifficulty !== 'All' && hustle.difficulty !== selectedDifficulty) return false;
      if (selectedBudget === '$0 Only' && hustle.budgetNumericMax > 0) return false;
      if (selectedBudget === 'Under $50' && hustle.budgetNumericMax > 50) return false;
      if (selectedWorkType !== 'All' && hustle.workType !== selectedWorkType) return false;
      if (selectedSkill !== 'All' && !hustle.requiredSkills.includes(selectedSkill)) return false;

      return true;
    });
  }, [searchQuery, selectedDifficulty, selectedBudget, selectedWorkType, selectedSkill]);

  return (
    <div className="min-h-screen bg-[#080C15] pb-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <Compass className="h-3.5 w-3.5" />
            <span>Opportunities Directory</span>
          </div>
          <h1 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
            Explore All Side Hustles
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Browse our full catalog of realistic, vetted side hustles with complete 7-day action blueprints.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-slate-800/60 pb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by keywords, skills, or titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-200 focus:border-indigo-500 focus:outline-none"
            >
              <option value="All">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-200 focus:border-indigo-500 focus:outline-none"
            >
              <option value="All">All Starting Budgets</option>
              <option value="$0 Only">$0 Zero Cost Only</option>
              <option value="Under $50">Under $50</option>
            </select>

            <select
              value={selectedWorkType}
              onChange={(e) => setSelectedWorkType(e.target.value)}
              className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-200 focus:border-indigo-500 focus:outline-none"
            >
              <option value="All">Online & Offline</option>
              <option value="Online">100% Online</option>
              <option value="Offline">Offline / Hands-on</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-slate-200 focus:border-indigo-500 focus:outline-none"
            >
              <option value="All">All Skills</option>
              {SKILL_CATEGORIES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredHustles.map((hustle) => {
            const isSaved = savedIds.includes(hustle.id);

            return (
              <div
                key={hustle.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition-all hover:border-indigo-500/50 hover:bg-slate-900/90 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
                      {hustle.category}
                    </span>
                    <button
                      onClick={() => onToggleSave(hustle.id)}
                      className={`rounded-lg p-2 transition-colors ${
                        isSaved
                          ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                    </button>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {hustle.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {hustle.explanation}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-slate-800/80 bg-slate-950/40 p-2.5 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500">Starting Cost</span>
                      <p className="font-semibold text-slate-200">{hustle.startingBudget}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Difficulty</span>
                      <p className="font-semibold text-slate-200">{hustle.difficulty}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Potential</span>
                      <p className="font-semibold text-emerald-400">{hustle.estimatedEarnings}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Time Required</span>
                      <p className="font-semibold text-slate-200">{hustle.timeRequired}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {hustle.requiredSkills.map((sk) => (
                      <span
                        key={sk}
                        className="rounded-md bg-slate-800/60 px-2 py-0.5 text-[10px] text-slate-400"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-slate-800/80 pt-4">
                  <button
                    onClick={() => onSelectHustle(hustle)}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:brightness-110 transition-all"
                  >
                    <span>View Plan & Execution</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
