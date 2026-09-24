export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type WorkType = 'Online' | 'Offline' | 'Hybrid';
export type TimeCommitment = '2-5 hrs/wk' | '5-10 hrs/wk' | '10-20 hrs/wk' | '20+ hrs/wk';
export type BudgetRange = '$0 (Zero Cost)' | '$10 - $50' | '$50 - $200' | '$200 - $500' | '$500+';
export type IncomeTarget = '$100 - $300/mo' | '$300 - $1,000/mo' | '$1,000 - $3,000/mo' | '$3,000 - $5,000+/mo';

export interface QuestionnaireAnswers {
  skills: string[];
  interests: string[];
  availableTime: TimeCommitment;
  budget: BudgetRange;
  location: string;
  incomeGoal: IncomeTarget;
  workPreference: WorkType;
  experienceLevel?: string;
  notes?: string;
}

export interface DayPlanTask {
  id: string;
  dayNumber: number;
  title: string;
  objective: string;
  tasks: string[];
  estimatedHours: number;
  deliverable: string;
  tips: string;
  templatesOrPrompts?: string[];
  completed?: boolean;
}

export interface ToolItem {
  name: string;
  category: string;
  cost: string;
  purpose: string;
  url?: string;
  freeTier: boolean;
}

export interface SideHustle {
  id: string;
  name: string;
  category: string;
  tagline: string;
  explanation: string;
  whyItMatches: string;
  matchScore: number; // e.g. 94%
  difficulty: DifficultyLevel;
  startingBudget: string;
  budgetNumericMax: number; // For filtering
  estimatedEarnings: string;
  earningsNumericMin: number; // For filtering
  timeRequired: string;
  timeNumericHours: number; // e.g. 8
  workType: WorkType;
  requiredSkills: string[];
  toolsNeeded: ToolItem[];
  targetCustomers: {
    persona: string;
    painPoint: string;
    whereToFind: string;
  };
  howToGetFirstCustomer: {
    headline: string;
    steps: string[];
    outreachTemplate?: string;
  };
  stepByStepGuide: {
    phase1Setup: string[];
    phase2Launch: string[];
    phase3Scale: string[];
  };
  sevenDayActionPlan: DayPlanTask[];
  proTips: string[];
  risksAndMitigation: string[];
  pricingSuggestion: {
    starter: string;
    standard: string;
    premium: string;
  };
  marketDemandScore: number; // 1-100
  isFeatured?: boolean;
}

export interface UserProgress {
  hustleId: string;
  hustleName: string;
  startDate: string;
  completedTaskIds: string[];
  currentDay: number;
  notesByDay: Record<number, string>;
  lastActive: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export interface FilterState {
  searchQuery: string;
  budget: string;
  difficulty: string;
  workType: string;
  timeCommitment: string;
  incomeGoal: string;
  skill: string;
  sortBy: 'match' | 'earnings' | 'budget-low' | 'time-low';
}

export type UserTier = 'free' | 'pro';
