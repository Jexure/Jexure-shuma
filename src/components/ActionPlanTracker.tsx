import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  ArrowRight,
  RotateCcw,
  MessageSquare,
  Trophy,
  Flame,
  FileEdit,
  ExternalLink,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { SideHustle, UserProgress } from '../types';

interface ActionPlanTrackerProps {
  hustle: SideHustle | null;
  progress: UserProgress | null;
  onToggleTask: (taskId: string) => void;
  onUpdateDayNote: (day: number, note: string) => void;
  onSelectDay: (day: number) => void;
  onOpenAssistant: (hustle: SideHustle, promptHint?: string) => void;
  onExploreOtherHustles: () => void;
}

export const ActionPlanTracker: React.FC<ActionPlanTrackerProps> = ({
  hustle,
  progress,
  onToggleTask,
  onUpdateDayNote,
  onSelectDay,
  onOpenAssistant,
  onExploreOtherHustles,
}) => {
  const [activeDay, setActiveDay] = useState<number>(progress?.currentDay || 1);

  if (!hustle || !progress) {
    return (
      <div className="min-h-screen bg-[#080C15] py-20 px-4 text-center text-slate-100">
        <div className="mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-md">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Calendar className="h-7 w-7" />
          </div>
          <h2 className="mt-4 text-xl font-bold text-white">No Active Action Plan</h2>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            Select a side hustle from your recommendations or directory and click "Start 7-Day Action Plan" to begin tracking.
          </p>
          <button
            onClick={onExploreOtherHustles}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-500/25 hover:brightness-110 transition-all"
          >
            <span>Explore Side Hustles</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  // Calculate stats
  // Total tasks across 7 days
  const allTasksCount = hustle.sevenDayActionPlan.reduce((acc, d) => acc + d.tasks.length, 0);
  const completedCount = progress.completedTaskIds.length;
  const progressPercent = Math.min(100, Math.round((completedCount / allTasksCount) * 100));

  const currentDayData = hustle.sevenDayActionPlan.find((d) => d.dayNumber === activeDay) || hustle.sevenDayActionPlan[0];

  const currentDayCompletedTasks = currentDayData.tasks.filter((_, idx) =>
    progress.completedTaskIds.includes(`${currentDayData.id}-task-${idx}`)
  ).length;

  const isCurrentDayComplete = currentDayCompletedTasks === currentDayData.tasks.length;

  return (
    <div className="min-h-screen bg-[#080C15] pb-24 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              <Calendar className="h-3.5 w-3.5" />
              <span>7-Day Execution Workspace</span>
            </div>
            <h1 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
              {hustle.name}
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              Goal: Launch and acquire your first paying customer by Day 7.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenAssistant(hustle, `I am on Day ${activeDay}: "${currentDayData.title}". How can I do this task faster?`)}
              className="flex items-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-2 text-xs font-bold text-indigo-300 hover:bg-indigo-500/20 transition-all"
            >
              <MessageSquare className="h-3.5 w-3.5 text-indigo-400" />
              <span>Ask AI Coach (Day {activeDay})</span>
            </button>
            <button
              onClick={onExploreOtherHustles}
              className="rounded-xl border border-slate-700 bg-slate-800/60 px-3.5 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              Switch Hustle
            </button>
          </div>
        </div>

        {/* Global Progress Bar Strip */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Flame className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Overall Progress</div>
                <div className="text-base font-extrabold text-white">
                  {progressPercent}% Complete ({completedCount} of {allTasksCount} Tasks)
                </div>
              </div>
            </div>

            {progressPercent === 100 ? (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-500/20 px-4 py-2 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                <Trophy className="h-4 w-4 text-amber-300" />
                <span>7-Day Blueprint Mastered! Ready to Scale.</span>
              </div>
            ) : (
              <div className="text-xs text-slate-400">
                Current Focus: <span className="font-bold text-white">Day {activeDay} of 7</span>
              </div>
            )}
          </div>

          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Day Selector Pills (Day 1 - Day 7) */}
        <div className="mt-8 flex overflow-x-auto gap-2.5 pb-2">
          {hustle.sevenDayActionPlan.map((d) => {
            const isSelected = activeDay === d.dayNumber;
            const dayTasks = d.tasks;
            const completedInDay = dayTasks.filter((_, idx) =>
              progress.completedTaskIds.includes(`${d.id}-task-${idx}`)
            ).length;
            const isDayFinished = completedInDay === dayTasks.length;

            return (
              <button
                key={d.id}
                onClick={() => {
                  setActiveDay(d.dayNumber);
                  onSelectDay(d.dayNumber);
                }}
                className={`flex shrink-0 flex-col items-start rounded-xl px-4 py-3 text-left transition-all ${
                  isSelected
                    ? 'border-2 border-indigo-500 bg-indigo-600/20 shadow-lg shadow-indigo-500/10'
                    : isDayFinished
                    ? 'border border-emerald-500/30 bg-emerald-950/20 text-slate-300'
                    : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex w-full items-center justify-between gap-4">
                  <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    Day {d.dayNumber}
                  </span>
                  {isDayFinished ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <span className="text-[10px] text-slate-500">
                      {completedInDay}/{dayTasks.length}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-[11px] font-medium text-slate-300 line-clamp-1 max-w-[120px]">
                  {d.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Day Detail Card */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md">
          {/* Day Title and Objective */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-xs font-extrabold text-indigo-300">
                  D{currentDayData.dayNumber}
                </span>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  {currentDayData.title}
                </h2>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-indigo-200/90 leading-relaxed">
                <strong className="text-white">Day Objective: </strong>
                {currentDayData.objective}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-slate-950/40 px-3.5 py-2 text-xs text-slate-300 shrink-0">
              <Clock className="h-3.5 w-3.5 text-indigo-400" />
              <span>Est. {currentDayData.estimatedHours} Hours</span>
            </div>
          </div>

          {/* Action Tasks Checklists */}
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Today's Action Checklist (Click to Complete)
            </h3>

            <div className="mt-4 space-y-3">
              {currentDayData.tasks.map((task, idx) => {
                const taskId = `${currentDayData.id}-task-${idx}`;
                const isChecked = progress.completedTaskIds.includes(taskId);

                return (
                  <div
                    key={idx}
                    onClick={() => onToggleTask(taskId)}
                    className={`flex cursor-pointer items-start gap-3.5 rounded-xl border p-4 transition-all ${
                      isChecked
                        ? 'border-emerald-500/40 bg-emerald-950/20 text-slate-300'
                        : 'border-slate-800 bg-slate-950/40 text-slate-200 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      ) : (
                        <Circle className="h-5 w-5 text-slate-500" />
                      )}
                    </div>
                    <div className="flex-1 text-xs sm:text-sm">
                      <span className={isChecked ? 'line-through text-slate-400' : 'font-medium'}>
                        {task}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deliverable Callout */}
          <div className="mt-6 rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-4 text-xs text-slate-300">
            <span className="font-bold text-indigo-300">Expected Deliverable by end of day: </span>
            <p className="mt-1 text-slate-200">{currentDayData.deliverable}</p>
          </div>

          {/* Pro Tip */}
          <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-950/10 p-4 text-xs text-slate-300">
            <span className="font-bold text-amber-300">Coach's Pro Tip: </span>
            <p className="mt-1 text-slate-300">{currentDayData.tips}</p>
          </div>

          {/* Prompts & Templates (if available) */}
          {currentDayData.templatesOrPrompts && currentDayData.templatesOrPrompts.length > 0 && (
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Recommended AI Prompt
              </span>
              <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-black/40 p-3 text-xs text-indigo-300 font-mono">
                {currentDayData.templatesOrPrompts[0]}
              </pre>
            </div>
          )}

          {/* Daily Journal / Notes Field */}
          <div className="mt-6 border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 mb-2">
              <FileEdit className="h-3.5 w-3.5 text-indigo-400" />
              <span>Day {activeDay} Execution Notes & Log</span>
            </div>
            <textarea
              rows={3}
              value={progress.notesByDay[activeDay] || ''}
              onChange={(e) => onUpdateDayNote(activeDay, e.target.value)}
              placeholder="Jot down notes, customer names, links, or lessons learned today..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {/* Bottom Next/Prev Day Controls */}
          <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
            {activeDay > 1 ? (
              <button
                onClick={() => {
                  const prev = activeDay - 1;
                  setActiveDay(prev);
                  onSelectDay(prev);
                }}
                className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
              >
                ← Previous Day
              </button>
            ) : <div />}

            {activeDay < 7 ? (
              <button
                onClick={() => {
                  const next = activeDay + 1;
                  setActiveDay(next);
                  onSelectDay(next);
                }}
                className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-500 transition-all"
              >
                <span>Continue to Day {activeDay + 1}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <div className="text-xs font-bold text-emerald-400">
                Final Day Reached! 🚀
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
