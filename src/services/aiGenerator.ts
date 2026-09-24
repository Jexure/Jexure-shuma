import { QuestionnaireAnswers, SideHustle, UserTier } from '../types';
import { SAMPLE_SIDE_HUSTLES } from '../data/hustles';

export interface RecommendationResult {
  recommendations: SideHustle[];
  userSummary: {
    primaryArchetype: string;
    strengthsIdentified: string[];
    suggestedWeeklySchedule: string;
    projectedFirstMonthIncome: string;
  };
  aiInsights: string;
}

export function generatePersonalizedRecommendations(
  answers: QuestionnaireAnswers,
  tier: UserTier = 'free'
): RecommendationResult {
  // Calculate match scores for all side hustles
  const scoredHustles = SAMPLE_SIDE_HUSTLES.map((hustle) => {
    let score = 65; // Base score

    // 1. Skill overlap
    const userSkills = answers.skills || [];
    const hasMatchingSkill = hustle.requiredSkills.some((skill) =>
      userSkills.includes(skill)
    );
    const exactMatches = hustle.requiredSkills.filter((skill) =>
      userSkills.includes(skill)
    ).length;

    if (userSkills.includes('Willing to learn')) {
      score += 10;
    } else {
      score += exactMatches * 8;
    }

    // 2. Budget compatibility
    if (answers.budget === '$0 (Zero Cost)' && hustle.budgetNumericMax <= 30) {
      score += 15;
    } else if (answers.budget === '$10 - $50' && hustle.budgetNumericMax <= 50) {
      score += 14;
    } else if (answers.budget === '$50 - $200' && hustle.budgetNumericMax <= 200) {
      score += 12;
    } else if (answers.budget === '$200 - $500' || answers.budget === '$500+') {
      score += 10;
    }

    // 3. Work preference compatibility (Online vs Offline vs Hybrid)
    if (answers.workPreference === 'Online' && hustle.workType === 'Online') {
      score += 15;
    } else if (answers.workPreference === 'Offline' && hustle.workType === 'Offline') {
      score += 18;
    } else if (answers.workPreference === 'Hybrid') {
      score += 12;
    } else if (answers.workPreference === 'Online' && hustle.workType === 'Offline') {
      score -= 25;
    } else if (answers.workPreference === 'Offline' && hustle.workType === 'Online') {
      score -= 15;
    }

    // 4. Time commitment
    if (answers.availableTime === '2-5 hrs/wk') {
      if (hustle.timeNumericHours <= 6) score += 12;
      else score -= 8;
    } else if (answers.availableTime === '5-10 hrs/wk') {
      if (hustle.timeNumericHours <= 10) score += 12;
    } else {
      score += 10; // 10+ hrs fits all
    }

    // 5. Interest alignment
    const userInterests = answers.interests || [];
    if (
      userInterests.some((int) =>
        hustle.tagline.toLowerCase().includes(int.toLowerCase().slice(0, 5)) ||
        hustle.category.toLowerCase().includes(int.toLowerCase().slice(0, 5))
      )
    ) {
      score += 10;
    }

    // Clamp score between 72% and 98%
    const finalScore = Math.min(98, Math.max(72, score));

    // Dynamic "Why it matches you" tailored to their inputs
    let why = hustle.whyItMatches;
    const skillList = userSkills.length > 0 ? userSkills.slice(0, 2).join(' & ') : 'your fast learning speed';
    if (answers.budget === '$0 (Zero Cost)' || answers.budget === '$10 - $50') {
      why = `Matches your starting budget of ${answers.budget}. Leverages your proficiency in ${skillList} within your available ${answers.availableTime} with near-zero overhead.`;
    } else {
      why = `Directly activates your background in ${skillList}. Designed to ramp to your ${answers.incomeGoal} goal within ${answers.availableTime}.`;
    }

    return {
      ...hustle,
      matchScore: finalScore,
      whyItMatches: why,
    };
  });

  // Sort descending by matchScore
  scoredHustles.sort((a, b) => b.matchScore - a.matchScore);

  // Free tier gets top 3, Premium gets unlimited
  const outputRecommendations = tier === 'free' ? scoredHustles.slice(0, 3) : scoredHustles;

  // Determine user archetype
  let archetype = 'Digital Builder';
  if (answers.workPreference === 'Offline') archetype = 'Local Hands-On Operator';
  else if (answers.skills.includes('Sales/Marketing') || answers.skills.includes('Writing')) archetype = 'High-Leverage Growth Specialist';
  else if (answers.skills.includes('Design') || answers.skills.includes('Video Editing')) archetype = 'Creative Systems Producer';

  const strengths = answers.skills.length > 0 ? answers.skills : ['High resourcefulness', 'Eager learner'];

  return {
    recommendations: outputRecommendations,
    userSummary: {
      primaryArchetype: archetype,
      strengthsIdentified: strengths,
      suggestedWeeklySchedule: `${answers.availableTime} split into 45-minute daily focus sprints`,
      projectedFirstMonthIncome: answers.incomeGoal === '$100 - $300/mo' ? '$250 – $400' : '$450 – $1,200',
    },
    aiInsights: `Based on your profile in ${answers.location || 'Remote'} with a target of ${answers.incomeGoal}, your greatest competitive moat is execution speed. By focusing on an immediate 7-day milestone, you avoid analysis paralysis and validate demand before spending capital.`,
  };
}
