import { GenericElement } from "../common/generic.type";

// ──────────────────────────────────────────────
// Step (inside a group)
// ──────────────────────────────────────────────

export type StepFromDto = {
    stepId: number;
    stepTitle: string;
    stepDescription: string;
    stepIcon: string | null;
    stepTags: string[] | null;
    stepOrder: number;
    stepItemFromDtos: unknown[];
};

// ──────────────────────────────────────────────
// Step group
// ──────────────────────────────────────────────

export type ElementDto = {
    readonly stepGroupId: number;
    readonly stepGroupKey: string;
    readonly stepGroupName: string;
    readonly stepGroupOrder: number;
    readonly stepGroupTitle: string;
    readonly stepGroupSummary: string;
    readonly stepFromDtos: StepFromDto[];
};

// ──────────────────────────────────────────────
// Safeguarding Officer
// ──────────────────────────────────────────────

export type SafeguardingOfficer = {
    readonly safeguardingOfficerName: string;
    readonly safeguardingOfficerDesignation: string;
    readonly safeguardingOfficerDescription: string;
    readonly safeguardingOfficerPhone: string;
    readonly safeguardingOfficerEmail: string;
    readonly safeguardingOfficerSupport: string;
};

// ──────────────────────────────────────────────
// Safeguarding Resources
// ──────────────────────────────────────────────

export type SafeguardingResources = {
    readonly documentId: number;
    readonly documentName: string;
    readonly documentType: string;
    readonly documentUrl: string;
};

// ──────────────────────────────────────────────
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type SafeguardingOfficerWrapperDto = {
    readonly elementDtos: ElementDto[];
    readonly pageGenericElements: GenericElement;
    readonly pageSafeguardingOfficerDto: SafeguardingOfficer;
    readonly safeguardingResources: SafeguardingResources[];

};