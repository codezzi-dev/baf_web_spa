// schemas/history.schema.ts  (or types/history.schema.ts)

import { z } from 'zod';
import { PageGenericElementSchema } from '../generic/page-generic-element.schema';

export const HistoryContentSchema = z.object({
  historyYearsOfExcellence: z.number().int().nullable().optional(),
  historyNumbersOfNationalChampion: z.number().int().nullable().optional(),
  historyNumbersOfInternationalMedals: z.number().int().nullable().optional(),
  historyNumbersOfActiveAthletes: z.number().int().nullable().optional(),
});

export const MilestoneSchema = z.object({
  milestoneYear: z.number().int().nullable().optional(),
  milestoneTitle: z.string().nullable().optional(),
  milestoneDescription: z.string().nullable().optional(),
  milestoneIconTag: z.string().nullable().optional(),
});



// ──────────────────────────────────────────────
// Main Wrapper Schema (what the API actually returns)
// ──────────────────────────────────────────────

export const HistoryContentWrapperSchema = z.object({
  historyContent: HistoryContentSchema.nullable().optional(),
  historyMilestones: z.array(MilestoneSchema).nullable().optional(),
  pageGenericElements: PageGenericElementSchema.nullable().optional(),
});

// ──────────────────────────────────────────────
// Type inference (for use in your components/hooks)
// ──────────────────────────────────────────────

export type HistoryContent = z.infer<typeof HistoryContentSchema>;
export type Milestone = z.infer<typeof MilestoneSchema>;
export type PageGenericElement = z.infer<typeof PageGenericElementSchema>;
export type HistoryContentWrapper = z.infer<typeof HistoryContentWrapperSchema>;

// Most common usage type:
export type HistoryApiResponse = HistoryContentWrapper;