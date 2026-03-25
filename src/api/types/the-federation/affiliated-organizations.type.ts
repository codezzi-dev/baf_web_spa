import { GenericElement } from "../common/generic.type";

// ──────────────────────────────────────────────
// Page statistics counters
// ──────────────────────────────────────────────

export type AffiliatedOrganizationHistories = {
    readonly totalOganizations: string; // typo kept to match API key
    readonly totalDivisions: string;
    readonly totalFederations: string;
    readonly totalAreas: string;
};

// ──────────────────────────────────────────────
// Category key-value pair
// ──────────────────────────────────────────────

export type Category = {
    readonly key: number;
    readonly value: string | null;
};

// ──────────────────────────────────────────────
// Affiliate organization item
// Expand fields once the API returns populated data
// ──────────────────────────────────────────────

export type AffiliateOrganization = {
    readonly affiliateOrganizationId: number;
    readonly organizationName: string;
    readonly organizationBio: string;
    readonly organizationAddress: string;
    readonly organizationDistrictId: number;
    readonly organizationDivitionId: number; // typo kept to match C# model
    readonly organizationPhone: string;
    readonly organizationEmail: string;
    readonly organizationWebsiteUrl: string;
    readonly organizationLogoUrl: string;
    readonly affiliateOrganizationCategoryId: number;
    readonly affiliateOrganizationTotalAthletes: number;
    readonly organizationId: number;
    readonly affiliateOrganizationStatus: number;
    readonly languageId: number;
};

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type AffiliatedOrganizationWrapperDto = {
    readonly pageGenericElements: GenericElement;
    readonly pageAffiliatedOrganizationHistories: AffiliatedOrganizationHistories;
    readonly categorys: Category[];         // typo kept to match API key
    readonly affiliateOrganization: AffiliateOrganization[];
};