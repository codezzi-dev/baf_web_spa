import { GenericElement } from "../common/generic.type";

// ──────────────────────────────────────────────
// History summary counters
// ──────────────────────────────────────────────

export type HistoryContent = {
  readonly historyYearsOfExcellence: number;
  readonly historyNumbersOfNationalChampion: number;
  readonly historyNumbersOfInternationalMedals: number;
  readonly historyNumbersOfActiveAthletes: number;
};





// ──────────────────────────────────────────────
// Milestone icons (restrict for UI safety)
// ──────────────────────────────────────────────

export type MilestoneIconTag =
  | "foundation"
  | "award"
  | "championship"
  | "success"
  | "goal"
  | "talent"
  | "growth";

// ──────────────────────────────────────────────
// Individual milestone
// ──────────────────────────────────────────────

export type HistoryMilestone = {
  readonly milestoneYear: number;
  readonly milestoneTitle: string;
  readonly milestoneDescription: string;
  readonly milestoneIconTag: MilestoneIconTag;
};

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type HistoryContentWrapperDto = {
  readonly historyContent: HistoryContent;
  readonly historyMilestones: HistoryMilestone[];
  readonly pageGenericElements: GenericElement;
};
