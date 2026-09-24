import React, { useState, useEffect } from 'react';
import { QuestionnaireAnswers, SideHustle, UserProgress, UserTier } from './types';
import { SAMPLE_SIDE_HUSTLES } from './data/hustles';
import { generatePersonalizedRecommendations, RecommendationResult } from './services/aiGenerator';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { QuestionnaireModal } from './components/QuestionnaireModal';
import { DashboardView } from './components/DashboardView';
import { HustleDetailModal } from './components/HustleDetailModal';
import { ActionPlanTracker } from './components/ActionPlanTracker';
import { SavedHustlesView } from './components/SavedHustlesView';
import { ExploreDirectory } from './components/ExploreDirectory';
import { PricingModal } from './components/PricingModal';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'explore' | 'tracker' | 'saved'>('landing');

  // Subscription Tier (Freemium vs Premium)
  const [tier, setTier] = useState<UserTier>(() => {
    return (localStorage.getItem('sidehustle_tier') as UserTier) || 'free';
  });

  // User Questionnaire Answers
  const [answers, setAnswers] = useState<QuestionnaireAnswers | null>(() => {
    const saved = localStorage.getItem('sidehustle_answers');
    return saved ? JSON.parse(saved) : null;
  });

  // Recommendations Result
  const [recResult, setRecResult] = useState<RecommendationResult | null>(() => {
    const saved = localStorage.getItem('sidehustle_answers');
    if (saved) {
      const parsedAnswers = JSON.parse(saved);
      const currentTier = (localStorage.getItem('sidehustle_tier') as UserTier) || 'free';
      return generatePersonalizedRecommendations(parsedAnswers, currentTier);
    }
    return null;
  });

  // Saved Bookmarks
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('sidehustle_saved');
    return saved ? JSON.parse(saved) : ['digital-product-business'];
  });

  // Active Progress Tracker State
  const [activeProgress, setActiveProgress] = useState<UserProgress | null>(() => {
    const saved = localStorage.getItem('sidehustle_progress');
    return saved ? JSON.parse(saved) : null;
  });

  // Selected Hustle for Detail Modal or Assistant
  const [selectedHustle, setSelectedHustle] = useState<SideHustle | null>(null);

  // Modals & Drawers visibility
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantPromptHint, setAssistantPromptHint] = useState<string | undefined>(undefined);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('sidehustle_tier', tier);
  }, [tier]);

  useEffect(() => {
    if (answers) {
      localStorage.setItem('sidehustle_answers', JSON.stringify(answers));
    }
  }, [answers]);

  useEffect(() => {
    localStorage.setItem('sidehustle_saved', JSON.stringify(savedIds));
  }, [savedIds]);

  useEffect(() => {
    if (activeProgress) {
      localStorage.setItem('sidehustle_progress', JSON.stringify(activeProgress));
    }
  }, [activeProgress]);

  // Recalculate recommendations when tier or answers change
  useEffect(() => {
    if (answers) {
      const result = generatePersonalizedRecommendations(answers, tier);
      setRecResult(result);
    }
  }, [tier, answers]);

  // Handlers
  const handleToggleSave = (hustleId: string) => {
    setSavedIds((prev) =>
      prev.includes(hustleId) ? prev.filter((id) => id !== hustleId) : [...prev, hustleId]
    );
  };

  const handleQuestionnaireSubmit = (newAnswers: QuestionnaireAnswers) => {
    setAnswers(newAnswers);
    const result = generatePersonalizedRecommendations(newAnswers, tier);
    setRecResult(result);
    setCurrentView('dashboard');
  };

  const handleSelectHustle = (hustle: SideHustle) => {
    setSelectedHustle(hustle);
    setIsDetailOpen(true);
  };

  const handleStartTracking = (hustle: SideHustle) => {
    const newProgress: UserProgress = {
      hustleId: hustle.id,
      hustleName: hustle.name,
      startDate: new Date().toISOString(),
      completedTaskIds: [],
      currentDay: 1,
      notesByDay: {},
      lastActive: new Date().toISOString(),
    };
    setActiveProgress(newProgress);
    setSelectedHustle(hustle);
    setIsDetailOpen(false);
    setCurrentView('tracker');
  };

  const handleToggleTask = (taskId: string) => {
    if (!activeProgress) return;

    setActiveProgress((prev) => {
      if (!prev) return prev;
      const completed = prev.completedTaskIds.includes(taskId)
        ? prev.completedTaskIds.filter((id) => id !== taskId)
        : [...prev.completedTaskIds, taskId];

      return {
        ...prev,
        completedTaskIds: completed,
        lastActive: new Date().toISOString(),
      };
    });
  };

  const handleUpdateDayNote = (day: number, note: string) => {
    if (!activeProgress) return;
    setActiveProgress((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        notesByDay: {
          ...prev.notesByDay,
          [day]: note,
        },
      };
    });
  };

  const handleSelectDay = (day: number) => {
    if (!activeProgress) return;
    setActiveProgress((prev) => (prev ? { ...prev, currentDay: day } : prev));
  };

  const handleOpenAssistant = (hustle: SideHustle, promptHint?: string) => {
    setSelectedHustle(hustle);
    setAssistantPromptHint(promptHint);
    setIsAssistantOpen(true);
  };

  // Find active hustle object for tracker
  const trackingHustle = activeProgress
    ? SAMPLE_SIDE_HUSTLES.find((h) => h.id === activeProgress.hustleId) || SAMPLE_SIDE_HUSTLES[0]
    : null;

  return (
    <div className="min-h-screen bg-[#080C15] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        onOpenQuestionnaire={() => setIsQuestionnaireOpen(true)}
        onOpenPricing={() => setIsPricingOpen(true)}
        tier={tier}
        savedCount={savedIds.length}
        hasActivePlan={Boolean(activeProgress)}
        activePlanName={activeProgress?.hustleName}
        hasCompletedQuestionnaire={Boolean(answers && recResult)}
      />

      {/* Main Views */}
      <main>
        {currentView === 'landing' && (
          <LandingPage
            onStartQuiz={() => setIsQuestionnaireOpen(true)}
            onExploreIdeas={() => setCurrentView('explore')}
            onSelectHustle={handleSelectHustle}
            onOpenPricing={() => setIsPricingOpen(true)}
            tier={tier}
          />
        )}

        {currentView === 'dashboard' && recResult && answers && (
          <DashboardView
            result={recResult}
            userAnswers={answers}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onSelectHustle={handleSelectHustle}
            onOpenTracker={() => setCurrentView('tracker')}
            activeProgress={activeProgress}
            tier={tier}
            onOpenPricing={() => setIsPricingOpen(true)}
            onRetakeQuiz={() => setIsQuestionnaireOpen(true)}
          />
        )}

        {currentView === 'explore' && (
          <ExploreDirectory
            onSelectHustle={handleSelectHustle}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            tier={tier}
            onOpenPricing={() => setIsPricingOpen(true)}
          />
        )}

        {currentView === 'tracker' && (
          <ActionPlanTracker
            hustle={trackingHustle}
            progress={activeProgress}
            onToggleTask={handleToggleTask}
            onUpdateDayNote={handleUpdateDayNote}
            onSelectDay={handleSelectDay}
            onOpenAssistant={handleOpenAssistant}
            onExploreOtherHustles={() => setCurrentView('explore')}
          />
        )}

        {currentView === 'saved' && (
          <SavedHustlesView
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onSelectHustle={handleSelectHustle}
            onExplore={() => setCurrentView('explore')}
          />
        )}
      </main>

      {/* Questionnaire Wizard Modal */}
      <QuestionnaireModal
        isOpen={isQuestionnaireOpen}
        onClose={() => setIsQuestionnaireOpen(false)}
        onSubmit={handleQuestionnaireSubmit}
        initialAnswers={answers}
      />

      {/* Detailed Side-Hustle Modal */}
      <HustleDetailModal
        hustle={selectedHustle}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onStartTracking={handleStartTracking}
        isSaved={selectedHustle ? savedIds.includes(selectedHustle.id) : false}
        onToggleSave={handleToggleSave}
        onOpenAssistant={handleOpenAssistant}
        tier={tier}
        onOpenPricing={() => {
          setIsDetailOpen(false);
          setIsPricingOpen(true);
        }}
      />

      {/* Pricing / Upgrade Modal */}
      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        tier={tier}
        onSetTier={setTier}
      />

      {/* AI Assistant Drawer */}
      <AIAssistantDrawer
        isOpen={isAssistantOpen}
        onClose={() => {
          setIsAssistantOpen(false);
          setAssistantPromptHint(undefined);
        }}
        hustle={selectedHustle || trackingHustle || SAMPLE_SIDE_HUSTLES[0]}
        initialPrompt={assistantPromptHint}
      />
    </div>
  );
}
