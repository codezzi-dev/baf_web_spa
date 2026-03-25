// schemas/affiliated-organization.schema.ts

import { z } from 'zod';
import { PageGenericElementSchema } from '../generic/page-generic-element.schema';

// ──────────────────────────────────────────────
// Sub-schemas
// ──────────────────────────────────────────────

export const AffiliatedOrganizationHistorySchema = z.object({
    totalOganizations: z.number().int().nullable().optional(),
    totalDivisions: z.number().int().nullable().optional(),
    totalFederations: z.number().int().nullable().optional(),
    totalAreas: z.number().int().nullable().optional(),
});

export const CategorySchema = z.object({
    key: z.number().int(),
    value: z.string().nullable().optional(),
});

export const AffiliateOrganizationSchema = z.object({
    // populate fields here once API returns data
});

// ──────────────────────────────────────────────
// Main Wrapper Schema (what the API actually returns)
// ──────────────────────────────────────────────

export const AffiliatedOrganizationWrapperSchema = z.object({
    pageGenericElements: PageGenericElementSchema.nullable().optional(),
    pageAffiliatedOrganizationHistories: AffiliatedOrganizationHistorySchema.nullable().optional(),
    categorys: z.array(CategorySchema).nullable().optional(),
    affiliateOrganization: z.array(AffiliateOrganizationSchema).nullable().optional(),
});

// ──────────────────────────────────────────────
// Type inference
// ──────────────────────────────────────────────

export type AffiliatedOrganizationHistory = z.infer<typeof AffiliatedOrganizationHistorySchema>;
export type Category = z.infer<typeof CategorySchema>;
export type AffiliateOrganization = z.infer<typeof AffiliateOrganizationSchema>;
export type AffiliatedOrganizationWrapper = z.infer<typeof AffiliatedOrganizationWrapperSchema>;

// Most common usage type:
export type AffiliatedOrganizationApiResponse = AffiliatedOrganizationWrapper;