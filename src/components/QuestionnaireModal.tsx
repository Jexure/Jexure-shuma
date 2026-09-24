import React, { useState } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Check,
  Clock,
  Wallet,
  Globe,
  MapPin,
  Target,
  Wrench,
  Heart
} from 'lucide-react';
import { QuestionnaireAnswers, TimeCommitment, BudgetRange, IncomeTarget, WorkType } from '../types';
import { SKILL_CATEGORIES, INTEREST_CATEGORIES } from '../data/hustles';

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (answers: QuestionnaireAnswers) => void;
  initialAnswers?: QuestionnaireAnswers | null;
}

export const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialAnswers,
}) => {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const [answers, setAnswers] = useState<QuestionnaireAnswers>(() => {
    return (
      initialAnswers || {
        skills: ['Writing', 'Organizing'],
        interests: ['Technology & AI', 'Productivity & Systems'],
        availableTime: '5-10 hrs/wk',
        budget: '$10 - $50',
        location: 'Remote',
        incomeGoal: '$300 - $1,000/mo',
        workPreference: 'Online',
      }
    );
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisPhase, setAnalysisPhase] = useState(0);

  if (!isOpen) return null;

  const timeOptions: { label: TimeCommitment; desc: string; icon: string }[] = [
    { label: '2-5 hrs/wk', desc: 'Evenings & quick weekend check-ins', icon: '⚡' },
    { label: '5-10 hrs/wk', desc: '1 hour every evening or Saturday sprints', icon: '🚀' },
    { label: '10-20 hrs/wk', desc: 'Serious part-time secondary business', icon: '🔥' },
    { label: '20+ hrs/wk', desc: 'Rapid transition towards full-time self-employment', icon: '👑' },
  ];

  const budgetOptions: { label: BudgetRange; desc: string }[] = [
    { label: '$0 (Zero Cost)', desc: '100% free software tools and zero inventory risk' },
    { label: '$10 - $50', desc: 'Domain name, starter hosting, or digital design templates' },
    { label: '$50 - $200', desc: 'Basic equipment, small software suite, or starter supplies' },
    { label: '$200 - $500', desc: 'Professional gear, tools, or modest initial inventory' },
    { label: '$500+', desc: 'Dedicated setup, local marketing, or specialty hardware' },
  ];

  const incomeOptions: { label: IncomeTarget; desc: string }[] = [
    { label: '$100 - $300/mo', desc: 'Pay for groceries, subscriptions, or fun savings' },
    { label: '$300 - $1,000/mo', desc: 'Meaningful cushion that covers rent or utilities' },
    { label: '$1,000 - $3,000/mo', desc: 'Substantial side income that transforms your lifestyle' },
    { label: '$3,000 - $5,000+/mo', desc: 'High-ticket scale with potential to replace your 9-to-5' },
  ];

  const workTypes: { label: WorkType; desc: string; icon: any }[] = [
    { label: 'Online', desc: 'Work 100% from your laptop anywhere in the world', icon: Globe },
    { label: 'Offline', desc: 'Hands-on local services in your neighborhood or city', icon: MapPin },
    { label: 'Hybrid', desc: 'Combination of digital outreach and local fulfillment', icon: Sparkles },
  ];

  const toggleSkill = (skill: string) => {
    setAnswers((prev) => {
      const exists = prev.skills.includes(skill);
      if (exists) {
        return { ...prev, skills: prev.skills.filter((s) => s !== skill) };
      } else {
        return { ...prev, skills: [...prev.skills, skill] };
      }
    });
  };

  const toggleInterest = (interest: string) => {
    setAnswers((prev) => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleFinish = () => {
    setIsAnalyzing(true);

    const phases = [
      'Scanning your skills and available time constraints...',
      'Cross-referencing verified low-capital business models...',
      'Synthesizing your personalized 7-Day Action Plan...',
    ];

    let currentPhase = 0;
    const interval = setInterval(() => {
      currentPhase++;
      if (currentPhase < phases.length) {
        setAnalysisPhase(currentPhase);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsAnalyzing(false);
          onSubmit(answers);
          onClose();
        }, 600);
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 sm:p-8 shadow-2xl transition-all">
        {/* Header with Close and Progress */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/20 text-xs font-bold text-indigo-400">
              {step}
            </span>
            <span className="text-xs text-slate-400">Step {step} of {totalSteps}</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Loading / AI Analyzing State */}
        {isAnalyzing ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="relative flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 animate-ping rounded-full bg-indigo-500/20" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-xl shadow-indigo-500/30">
                <Sparkles className="h-7 w-7 text-white animate-spin-slow" />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">AI Analysis in Progress</h3>
            <p className="mt-2 text-sm text-indigo-300 animate-pulse font-medium">
              {[
                'Analyzing your skills and weekly schedule...',
                'Evaluating margin potentials and startup budgets...',
                'Tailoring your customized 7-Day execution roadmaps...',
              ][analysisPhase]}
            </p>
            <div className="mt-6 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce" />
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        ) : (
          <div className="mt-6 min-h-[360px] flex flex-col justify-between">
            {/* STEP 1: Skills */}
            {step === 1 && (
              <div>
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                  <Wrench className="h-4 w-4" /> Your Foundation
                </div>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  What skills or proficiencies do you currently possess?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  Select all that apply. If you're a complete beginner, select "Willing to learn".
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {SKILL_CATEGORIES.map((skill) => {
                    const isSelected = answers.skills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/30'
                            : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                        }`}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5 text-white" />}
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Interests */}
            {step === 2 && (
              <div>
                <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                  <Heart className="h-4 w-4" /> Personal Interests
                </div>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  What topics or domains genuinely interest you?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  Side hustles stick when you enjoy reading and thinking about the space.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {INTEREST_CATEGORIES.map((interest) => {
                    const isSelected = answers.interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-400/30'
                            : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                        }`}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5 text-white" />}
                        <span>{interest}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: Available Time */}
            {step === 3 && (
              <div>
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <Clock className="h-4 w-4" /> Time Commitment
                </div>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  How much time can you dedicate per week?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  Be honest with your schedule. Consistency beats occasional intense marathons.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timeOptions.map((opt) => {
                    const isSelected = answers.availableTime === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setAnswers({ ...answers, availableTime: opt.label })}
                        className={`flex flex-col items-start rounded-xl p-4 text-left transition-all ${
                          isSelected
                            ? 'bg-indigo-600/20 border-2 border-indigo-500 shadow-lg shadow-indigo-500/10'
                            : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span className="text-base font-bold text-white">{opt.label}</span>
                          <span className="text-lg">{opt.icon}</span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">{opt.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: Budget */}
            {step === 4 && (
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <Wallet className="h-4 w-4" /> Starting Capital
                </div>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  What is your comfortable starting budget?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  You can launch with $0. We prioritize lean validation before spending capital.
                </p>

                <div className="mt-5 space-y-2.5">
                  {budgetOptions.map((b) => {
                    const isSelected = answers.budget === b.label;
                    return (
                      <button
                        key={b.label}
                        type="button"
                        onClick={() => setAnswers({ ...answers, budget: b.label })}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                          isSelected
                            ? 'bg-emerald-600/20 border-2 border-emerald-500'
                            : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-bold text-white">{b.label}</div>
                          <div className="text-xs text-slate-400">{b.desc}</div>
                        </div>
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-500 text-white'
                              : 'border-slate-700'
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 5: Online / Offline / Location */}
            {step === 5 && (
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <Globe className="h-4 w-4" /> Work Style & Location
                </div>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Do you prefer online remote work or local services?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  Online scales globally, while local offline services face almost zero global competition.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {workTypes.map((wt) => {
                    const Icon = wt.icon;
                    const isSelected = answers.workPreference === wt.label;
                    return (
                      <button
                        key={wt.label}
                        type="button"
                        onClick={() => setAnswers({ ...answers, workPreference: wt.label })}
                        className={`flex flex-col items-center text-center rounded-xl p-4 transition-all ${
                          isSelected
                            ? 'bg-amber-500/20 border-2 border-amber-500'
                            : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="mt-3 text-sm font-bold text-white">{wt.label}</span>
                        <p className="mt-1 text-xs text-slate-400">{wt.desc}</p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-medium text-slate-400">
                    Your City / Region (optional, helps localize suggestions):
                  </label>
                  <input
                    type="text"
                    value={answers.location}
                    onChange={(e) => setAnswers({ ...answers, location: e.target.value })}
                    placeholder="e.g. Austin, TX, London, or Remote"
                    className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 6: Income Goal */}
            {step === 6 && (
              <div>
                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                  <Target className="h-4 w-4" /> Financial Target
                </div>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  What is your realistic monthly income goal?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  We'll reverse-engineer the number of clients or sales needed to hit this target.
                </p>

                <div className="mt-5 space-y-2.5">
                  {incomeOptions.map((inc) => {
                    const isSelected = answers.incomeGoal === inc.label;
                    return (
                      <button
                        key={inc.label}
                        type="button"
                        onClick={() => setAnswers({ ...answers, incomeGoal: inc.label })}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                          isSelected
                            ? 'bg-rose-500/20 border-2 border-rose-500'
                            : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-bold text-white">{inc.label}</div>
                          <div className="text-xs text-slate-400">{inc.desc}</div>
                        </div>
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            isSelected
                              ? 'border-rose-500 bg-rose-500 text-white'
                              : 'border-slate-700'
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-800/80 pt-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-500/25 hover:brightness-110 active:scale-95 transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinish}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-indigo-600 to-purple-600 px-7 py-2.5 text-xs font-bold text-white shadow-xl shadow-indigo-500/30 hover:brightness-110 active:scale-95 transition-all"
                >
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  <span>Analyze & Find My Hustle</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
