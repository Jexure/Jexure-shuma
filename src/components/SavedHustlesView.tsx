import React from 'react';
import {
  Bookmark,
  BookmarkX,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  TrendingUp,
  Compass
} from 'lucide-react';
import { SideHustle } from '../types';
import { SAMPLE_SIDE_HUSTLES } from '../data/hustles';

interface SavedHustlesViewProps {
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectHustle: (hustle: SideHustle) => void;
  onExplore: () => void;
}

export const SavedHustlesView: React.FC<SavedHustlesViewProps> = ({
  savedIds,
  onToggleSave,
  onSelectHustle,
  onExplore,
}) => {
  const savedHustles = SAMPLE_SIDE_HUSTLES.filter((h) => savedIds.includes(h.id));

  return (
    <div className="min-h-screen bg-[#080C15] pb-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <Bookmark className="h-3.5 w-3.5" />
            <span>Saved Bookmarks</span>
          </div>
          <h1 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
            Bookmarked Side Hustles ({savedHustles.length})
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Your saved opportunities ready for launch whenever you are ready.
          </p>
        </div>

        {savedHustles.length === 0 ? (
          <div className="mt-16 mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center backdrop-blur-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Bookmark className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">No Saved Ideas Yet</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              When browsing recommendations or the directory, click the bookmark icon on any card to save it for quick reference here.
            </p>
            <button
              onClick={onExplore}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/25 hover:bg-indigo-500 transition-all"
            >
              <Compass className="h-4 w-4" />
              <span>Explore Ideas</span>
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedHustles.map((hustle) => (
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
                      title="Remove from saved"
                      className="rounded-lg p-1.5 text-indigo-400 hover:bg-slate-800 hover:text-red-400 transition-colors"
                    >
                      <BookmarkX className="h-4 w-4" />
                    </button>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {hustle.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {hustle.explanation}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-slate-800/80 bg-slate-950/40 p-2.5 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500">Starting Cost</span>
                      <p className="font-semibold text-slate-200">{hustle.startingBudget}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Potential</span>
                      <p className="font-semibold text-emerald-400">{hustle.estimatedEarnings}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Difficulty</span>
                      <p className="font-semibold text-slate-200">{hustle.difficulty}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500">Time Required</span>
                      <p className="font-semibold text-slate-200">{hustle.timeRequired}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-slate-800/80 pt-4">
                  <button
                    onClick={() => onSelectHustle(hustle)}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-500 transition-all"
                  >
                    <span>View Plan & Execution</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
