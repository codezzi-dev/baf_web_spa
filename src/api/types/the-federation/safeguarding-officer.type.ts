import { GenericElement } from "../common/generic.type";

// ──────────────────────────────────────────────
// Step (inside a group)
// ──────────────────────────────────────────────

export type StepFromDto = Record<string, unknown>; // populate once API returns step data

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
// API data wrapper (inside `data`)
// ──────────────────────────────────────────────

export type SafeguardingOfficerWrapperDto = {
    readonly elementDtos: ElementDto[];
    readonly pageGenericElements: GenericElement;
    readonly pageSafeguardingOfficerDto: SafeguardingOfficer;
};